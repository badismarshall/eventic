"use client"
import { Table } from "@tanstack/react-table"
import { DataTableFacetedFilter } from "../../../../../../../components/table/attendee/data-table-faceted-filter"
import { DataTableViewOptions } from "../../../../../../../components/table/attendee/data-table-view-options"
import { Input } from "@/components/ui/input"



interface DataTableToolbarProps<TData> {
    table: Table<TData>
  }

  export function DataTableToolbar<TData>({
    table,
  }: DataTableToolbarProps<TData>) {
    const isFiltered = table.getState().columnFilters.length > 0

    return (
        <div className="flex items-center justify-between">
          <div className="flex flex-1 items-center gap-2">
            <Input
              placeholder="Filter les Evénements..."
              value={(table.getColumn("event")?.getFilterValue() as string) ?? ""}
              onChange={(event) =>
                table.getColumn("event")?.setFilterValue(event.target.value)
              }
              className="h-8 w-[150px] lg:w-[250px]"
            />
            </div>
        <DataTableViewOptions table={table} />
        </div>
    )
  }