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
            <DataTableColumnHeader column={column} title="Événement" className="text-center"/>
        ),
        cell: ({ row }) => <div>{row.getValue("event")}</div>,
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
        accessorKey: 'price',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Prix" />
        ),
        cell: ({ row }) => <div className="w-[80px]">{row.getValue("price")}</div>,
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
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Actions" />
        ),
        cell: ({ row }) => <DataTableRowActions row={row} />,
    }
]