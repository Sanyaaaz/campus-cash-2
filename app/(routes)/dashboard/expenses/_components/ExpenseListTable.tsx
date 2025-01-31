import React from "react";
import { db } from "@/utils/dbConfig";
import { Expenses } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { toast } from "sonner";

interface Expense {
  id: number; // Adjust based on your schema
  name: string;
  amount: number;
  createdAt: string;
}

interface ExpenseListTableProps {
  expensesList: Expense[];
  refreshData: () => void;
}

const ExpenseListTable: React.FC<ExpenseListTableProps> = ({
  expensesList,
  refreshData,
}) => {
  const deleteExpense = async (expense: Expense) => {
    try {
      const result = await db
        .delete(Expenses)
        .where(eq(Expenses.id, expense.id))
        .returning();

      if (result) {
        toast("Expense Deleted!");
        refreshData();
      }
    } catch (error) {
      console.error("Error deleting expense:", error);
      toast.error("Failed to delete expense.");
    }
  };

  return (
    <div className="mt-3">
      <h2 className="font-bold text-lg">Latest Expenses</h2>
      <div className="grid grid-cols-4 rounded-tl-xl rounded-tr-xl bg-slate-200 p-2 mt-3">
        <h2 className="font-bold">Name</h2>
        <h2 className="font-bold">Amount</h2>
        <h2 className="font-bold">Date</h2>
        <h2 className="font-bold">Action</h2>
      </div>
      {expensesList.map((expense) => (
        <div
          key={expense.id}
          className="grid grid-cols-4 bg-slate-50 rounded-bl-xl rounded-br-xl p-2"
        >
          <h2>{expense.name}</h2>
          <h2>{expense.amount}</h2>
          <h2>{expense.createdAt}</h2>
          <h2
            onClick={() => deleteExpense(expense)}
            className="text-red-500 cursor-pointer"
          >
            Delete
          </h2>
          {/* Uncomment the following block if you prefer using the Trash icon */}
          {/* 
          <h2>
            <Trash
              className="text-red-500 cursor-pointer"
              onClick={() => deleteExpense(expense)}
            />
          </h2> 
          */}
        </div>
      ))}
    </div>
  );
};

export default ExpenseListTable;
