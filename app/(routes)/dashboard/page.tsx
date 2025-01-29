"use client";

import React, { useEffect, useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import CardInfo from "./_components/CardInfo";
import { db } from "@/utils/dbConfig";
import { desc, eq, getTableColumns, sql } from "drizzle-orm";
import { Budgets, Expenses, Incomes } from "@/utils/schema";
import BarChartDashboard from "./_components/BarChartDashboard";
import BudgetItem from "./budgets/_components/BudgetItem";
import ExpenseListTable from "./expenses/_components/ExpenseListTable";

// Define types for the lists
interface Budget {
  id: number;
  name: string;
  amount: number;
  totalSpend: number;
  totalItem: number;
  createdBy: string;
}

interface Expense {
  id: number;
  name: string;
  amount: number;
  createdAt: string;
}

interface Income {
  id: number;
  name: string;
  amount: number;
  totalAmount: number;
}

function Dashboard() {
  const { user } = useUser();

  const [budgetList, setBudgetList] = useState<Budget[]>([]);
  const [incomeList, setIncomeList] = useState<Income[]>([]);
  const [expensesList, setExpensesList] = useState<Expense[]>([]);

  useEffect(() => {
    if (user) {
      getBudgetList();
    }
  }, [user]);

  /**
   * Fetches budget list
   */
  const getBudgetList = async () => {
    try {
      const result = await db
        .select({
          ...getTableColumns(Budgets),
          totalSpend: sql`SUM(${Expenses.amount})`.mapWith(Number),
          totalItem: sql`COUNT(${Expenses.id})`.mapWith(Number),
        })
        .from(Budgets)
        .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
        .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress ?? ""))
        .groupBy(Budgets.id)
        .orderBy(desc(Budgets.id));

      setBudgetList(result);
      getAllExpenses();
      getIncomeList();
    } catch (error) {
      console.error("Error fetching budget list:", error);
    }
  };

  /**
   * Fetches income streams
   */
  const getIncomeList = async () => {
    try {
      const result = await db
        .select({
          ...getTableColumns(Incomes),
          totalAmount: sql`SUM(CAST(${Incomes.amount} AS NUMERIC))`.mapWith(Number),
        })
        .from(Incomes)
        .groupBy(Incomes.id);

      setIncomeList(result);
    } catch (error) {
      console.error("Error fetching income list:", error);
    }
  };

  /**
   * Fetches all expenses for the user
   */
  const getAllExpenses = async () => {
    try {
      const result = await db
        .select({
          id: Expenses.id,
          name: Expenses.name,
          amount: Expenses.amount,
          createdAt: Expenses.createdAt,
        })
        .from(Budgets)
        .rightJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
        .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress ?? ""))
        .orderBy(desc(Expenses.id));

      setExpensesList(result);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  return (
    <div className="p-8 bg-">
      <h2 className="font-bold text-4xl">Hi, {user?.fullName} 👋</h2>
      <p className="text-gray-500">
        Here's what's happening with your money. Let's manage your expenses.
      </p>

      <CardInfo budgetList={budgetList} incomeList={incomeList} />

      <div className="grid grid-cols-1 lg:grid-cols-3 mt-6 gap-5">
        <div className="lg:col-span-2">
          <BarChartDashboard budgetList={budgetList} />

          <ExpenseListTable
            expensesList={expensesList}
            refreshData={() => getBudgetList()}
          />
        </div>
        <div className="grid gap-5">
          <h2 className="font-bold text-lg">Latest Budgets</h2>
          {budgetList.length > 0 ? (
            budgetList.map((budget, index) => (
              <BudgetItem budget={budget} key={index} />
            ))
          ) : (
            [1, 2, 3, 4].map((item, index) => (
              <div
                key={index}
                className="h-[180px] w-full bg-slate-200 rounded-lg animate-pulse"
              ></div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
