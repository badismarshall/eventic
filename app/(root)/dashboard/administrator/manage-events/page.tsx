import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import Image from "next/image"
import { z } from "zod"

import { columns } from "./_components/table/eventsTableColumns"
import { DataTable } from "@/components/table/data-table"
import { taskSchema } from "./_components/table/events-data-table-schema"
import { DataTableToolbar } from "./_components/table/events-data-table-toolbar"

export const metadata: Metadata = {
  title: "Événements",
  description: "Une liste de tous les événements.",
}

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "/constants/dashboard/administrator/events/events-tasks.json")
  )

  const tasks = JSON.parse(data.toString())

  return z.array(taskSchema).parse(tasks)
}

export default async function EventsPage() {
  const tasks = await getTasks()

  return (
    <div>
      <div className="md:hidden">
        <Image
          src="/examples/tasks-light.png"
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <Image
          src="/examples/tasks-dark.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Content de te revoir!</h2>
            <p className="text-muted-foreground">
            Voici une liste de tous les Événements!
            </p>
          </div>
        </div>
        <DataTable 
          data={tasks} 
          columns={columns} 
          DataTableToolbar={DataTableToolbar}
          />
      </div>
    </div>
  )
}