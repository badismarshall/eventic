import { Metadata } from "next"
import { DataTable } from "@/components/table/data-table"
import { z } from "zod"
import path from "path"
import { promises as fs } from "fs"
import { columns } from "./_components/table/usersTableColumns"
import { usersSchema } from "./_components/table/users-data-table-schema"
import { DataTableToolbar } from "./_components/table/users-data-table-toolbar"

export const metadata: Metadata = {
    title: "Utilisateurs",
    description: "Une liste de tous les utilisateurs.",
  }

// Simulate a database read for users.
async function getUsers() {
  const data = await fs.readFile(
    path.join(process.cwd(), "/constants/dashboard/administrator/users/users-data.json")
  )

  const users = JSON.parse(data.toString())

  return z.array(usersSchema).parse(users)
}
  export default async function UsersPage() {
    const users = await getUsers()


    return(
        <>
        <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
            <div className="flex items-center justify-between space-y-2">
            <div>
                <h2 className="text-2xl font-bold tracking-tight">Content de te revoir!</h2>
                <p className="text-muted-foreground">
                Voici une liste de tous les Utilisateurs!
                </p>
            </div>
            </div>
        <DataTable 
          data={users} 
          columns={columns} 
          DataTableToolbar={DataTableToolbar}
          />
      </div>
        </>
    )
  }