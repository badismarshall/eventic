import { SeedPostgres } from "@snaplet/seed/adapter-postgres";
import { defineConfig } from "@snaplet/seed/config";
import postgres from "postgres";

export default defineConfig({
  adapter: () => {
    const client = postgres("postgresql://postgres.fsoceeavqdzzhuwhfvoj:9UhACsrnlzA5Rbtl@aws-0-eu-central-1.pooler.supabase.com:5432/postgres");
    return new SeedPostgres(client);
  },
  select: [
    // We want to alter all the tables under public schema
    "public*",
    // We also want to alter some of the tables under the auth schema
    "auth.users",
    "auth.identities",
    "auth.sessions",
  ]
});
