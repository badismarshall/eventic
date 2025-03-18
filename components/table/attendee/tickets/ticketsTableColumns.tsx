'use client'

import { ColumnDef } from "@tanstack/react-table"
import { Ticket } from "./tickets-data-table-schema"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from "../../administrator/data-table-column-header"
import { DataTableRowActions } from "./tickets-data-table-row-actions"
import { format, parseISO } from "date-fns"
import { fr } from 'date-fns/locale';
import { statuses } from "./tickets-data-table-dataset"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const columns: ColumnDef<Ticket>[] = [{
    id: 'select',
    header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="translate-y-[2px]"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="translate-y-[2px]"
        />
      ),
      enableSorting: false,
    },
    {
        accessorKey: 'id',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Billet" />
        ),
        cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
        enableSorting: false,
    },
    {
        accessorKey: 'event',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Événement" />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex space-x-2">
                <Avatar className="w-9 h-9 rounded-lg">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="max-w-[500px] truncate font-medium">
                    {row.getValue("event")}
                  </span>
                  <span className="text-muted-foreground">Organizer</span>
                </div>
              </div>
            )
        },
        enableSorting: false,
    },
    {
        accessorKey: 'date',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Date" className="text-center" />
        ),
        cell: ({ row }) => <div className="text-center">{
            format(parseISO(row.getValue('date')), "PPPP", {
              locale : fr,
            })
             } </div>,
        enableSorting: false,
    },
    {
        accessorKey: 'quantity',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Quantité" />
        ),
        cell: ({ row }) => <div className="w-[80px] text-center">{row.getValue("quantity")}</div>,
    },
    {
        accessorKey: 'price',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Prix (Dinar DZ)" className="text-center" />
        ),
        cell: ({ row }) => <div className="w-[80px] text-primary text-center">{row.getValue("price")}</div>,
        enableSorting: false,
    },
    {
        accessorKey: 'status',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Statut" />
        ),
        cell: ({ row }) => {
            const className = ['bg-red-400', 'bg-green-400', 'bg-yellow-400']
            const status = statuses.find((status) => status.value === row.original.status)

            return (
                <div className="w-[80px]">{status && <Badge variant="default" className={`bg-${status.color}-400`} >{status.label}</Badge>}</div>
            )
        },
    },
    {
        id: 'actions',
        cell: ({ row }) => <DataTableRowActions row={row}/>,
        enableHiding: false, 
    }
]