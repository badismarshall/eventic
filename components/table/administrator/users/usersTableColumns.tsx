"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

import { User } from "./users-data-table-schema"
import { statuses } from "../users/users-data-table-datatest"
import { DataTableColumnHeader } from "../users/users-data-table-column-header"
import { DataTableRowActions } from "../users/users-data-table-row-actions"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { format, parseISO } from "date-fns"
import { fr } from 'date-fns/locale';

export const columns: ColumnDef<User>[] = [
  {
    id: "select",
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
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="IdUtilisateur" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nom" />
    ),
    cell: ({ row }) => {

      return (
        <div className="flex space-x-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="max-w-[500px] truncate font-medium">
              {row.getValue("name")}
            </span>
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => {

      return (
        <div className="flex items-center">
          <p className="max-w-[500px] truncate font-medium">
            {row.getValue("email")}
          </p>
        </div>
      )
    },
  },
  {
    accessorKey: "phoneNo",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Numéro de Tel" />
    ),
    cell: ({ row }) => {

      return (
        <div className="flex items-center">
          <p className="max-w-[500px] truncate font-medium">
            {row.getValue("phoneNo")}
          </p>
        </div>
      )
    },
  },
  {
    accessorKey: "registrationdate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date d'inscription" />
    ),
    cell: ({ row }) => {

      return (
        <div className="flex items-center">
          <div className="max-w-[500px] truncate font-medium">
            {
              format(parseISO(row.getValue('registrationdate')), "PPPP", {
                locale : fr,
              })
            }
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const className = ['bg-red-400', 'bg-green-400', 'bg-yellow-400']
      const status = statuses.find((status) => status.value === row.original.status)

      return (
        <div  className={`flex items-center`}>
          {status && <Badge variant="default" className={`bg-${status.color}-400`} >{status.label}</Badge>}
        </div>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]