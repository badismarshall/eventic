"use client"

import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Row } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

import { ticketsSchema } from "./tickets-data-table-schema"

interface DataTableRowActionsProps<TData> {
    row: Row<TData>
  }

  export function DataTableRowActions<TData>({
    row,
  }: DataTableRowActionsProps<TData>) {
    const ticket = ticketsSchema.parse(row.original)
  
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <DotsHorizontalIcon className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[190px] space-y-1">
          <DropdownMenuItem>Imprimer les billets</DropdownMenuItem>
          <DropdownMenuItem>Détails du paiement</DropdownMenuItem>
          <DropdownMenuItem>Contacter l'organisateur</DropdownMenuItem>
          <DropdownMenuItem>Détails</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }