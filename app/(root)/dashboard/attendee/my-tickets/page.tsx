import { ticketsSchema } from "@/app/(root)/dashboard/attendee/my-tickets/_components/table/tickets-data-table-schema"
import { columns } from "@/app/(root)/dashboard/attendee/my-tickets/_components/table/ticketsTableColumns"
import { promises as fs } from "fs"
import { Metadata } from "next"
import path from "path"
import { z } from "zod"
import { DataTable } from "@/components/table/data-table"
import { DataTableToolbar } from "@/app/(root)/dashboard/attendee/my-tickets/_components/table/tickets-data-table-toolbar"



export const metadata: Metadata = {
    title: "Vos billets",
    description: "Une liste de tous Vos billets.",
  }

// Simulate a database read for tasks.
async function getTickets() {
  const data = await fs.readFile(
    path.join(process.cwd(), "/constants/dashboard/attendee/tickets/tickets-data.json")
  )

  const tickets = JSON.parse(data.toString())

  return z.array(ticketsSchema).parse(tickets)
}

export default async function  MyticketPage ()  {
    const tickets = await getTickets()

  return (
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Vos billets</h2>
            <p className="text-muted-foreground">
            Voici une liste de tous les billets !
            </p>
          </div>
        </div>
        <DataTable 
          data={tickets} 
          columns={columns} 
          DataTableToolbar={DataTableToolbar} // need to modify this
          />
      </div>
  )
}

