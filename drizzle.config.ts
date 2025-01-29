interface DBCredentials {
    url: string;
    connectionString: string;
  }
  
  interface DrizzleConfig {
    dialect: string;
    schema: string;
    out: string;
    dbCredentials: DBCredentials;
  }
  
  const config: DrizzleConfig = {
    dialect: "postgresql",
    schema: "./utils/schema.tsx",
    out: "./drizzle",
    dbCredentials: {
      url: "postgresql://neondb_owner:npg_mIaSAOMj23lU@ep-restless-waterfall-a85ic2y5-pooler.eastus2.azure.neon.tech/neondb?sslmode=require",
      connectionString:
        "postgresql://neondb_owner:npg_mIaSAOMj23lU@ep-restless-waterfall-a85ic2y5-pooler.eastus2.azure.neon.tech/neondb?sslmode=require",
    },
  };
  
  export default config;
  