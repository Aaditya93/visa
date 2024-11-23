"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const data: visa[] =[
    {
      No: 1,
      Full_name: "ZHAO HEMING",
      Birthday: "21/07/2022",
      Sex: "Nam",
      Current_nationality: "China",
      Original_nationality: "",
      Job: "Tự do",
      Office: "",
      Passport_number: "SM 30 EJ7492804",
      Type_of_Passport_: "Hộ chiếu phổ thông",
      Purpose: "du lịch",
      From_Date_to_enter: "10/01/2025",
      To_date: "09/02/2025",
      Duration: "Một lần",
      Place_to_get_visa: "Tổng lãnh sự quán Việt Nam tại Thượng Hải - Trung Quốc",
      status: "success"
    },
    {
        No: 1,
        Full_name: "HAN XIREN",
        Birthday: "21/07/2022",
        Sex: "Nam",
        Current_nationality: "China",
        Original_nationality: "",
        Job: "Tự do",
        Office: "",
        Passport_number: "SM 30 EJ7492804",
        Type_of_Passport_: "Hộ chiếu phổ thông",
        Purpose: "du lịch",
        From_Date_to_enter: "10/01/2025",
        To_date: "09/02/2025",
        Duration: "Một lần",
        Place_to_get_visa: "Tổng lãnh sự quán Việt Nam tại Thượng Hải - Trung Quốc",
        status: "success"
      },
      
      {
        No: 1,
        Full_name: "WANG WENHUI",
        Birthday: "21/07/2022",
        Sex: "Nam",
        Current_nationality: "China",
        Original_nationality: "",
        Job: "Tự do",
        Office: "",
        Passport_number: "SM 30 EJ7492804",
        Type_of_Passport_: "Hộ chiếu phổ thông",
        Purpose: "du lịch",
        From_Date_to_enter: "10/01/2025",
        To_date: "09/02/2025",
        Duration: "Một lần",
        Place_to_get_visa: "Tổng lãnh sự quán Việt Nam tại Thượng Hải - Trung Quốc",
        status: "success"
      },
      {
        No: 1,
        Full_name: "YANG XIAOYU",
        Birthday: "21/07/2022",
        Sex: "Nam",
        Current_nationality: "China",
        Original_nationality: "",
        Job: "Tự do",
        Office: "",
        Passport_number: "SM 30 EJ7492804",
        Type_of_Passport_: "Hộ chiếu phổ thông",
        Purpose: "du lịch",
        From_Date_to_enter: "10/01/2025",
        To_date: "09/02/2025",
        Duration: "Một lần",
        Place_to_get_visa: "Tổng lãnh sự quán Việt Nam tại Thượng Hải - Trung Quốc",
        status: "success"
      },
      {
        No: 1,
        Full_name: "KONG HUI",
        Birthday: "21/07/2022",
        Sex: "Nam",
        Current_nationality: "China",
        Original_nationality: "",
        Job: "Tự do",
        Office: "",
        Passport_number: "SM 30 EJ7492804",
        Type_of_Passport_: "Hộ chiếu phổ thông",
        Purpose: "du lịch",
        From_Date_to_enter: "10/01/2025",
        To_date: "09/02/2025",
        Duration: "Một lần",
        Place_to_get_visa: "Tổng lãnh sự quán Việt Nam tại Thượng Hải - Trung Quốc",
        status: "success"
      },
      {
        No: 1,
        Full_name: "ZHAO HEMING",
        Birthday: "21/07/2022",
        Sex: "Nam",
        Current_nationality: "China",
        Original_nationality: "",
        Job: "Tự do",
        Office: "",
        Passport_number: "SM 30 EJ7492804",
        Type_of_Passport_: "Hộ chiếu phổ thông",
        Purpose: "du lịch",
        From_Date_to_enter: "10/01/2025",
        To_date: "09/02/2025",
        Duration: "Một lần",
        Place_to_get_visa: "Tổng lãnh sự quán Việt Nam tại Thượng Hải - Trung Quốc",
        status: "pending"
      },

  ]
  

export type visa = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const columns: ColumnDef<visa>[] = [
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
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "Full_name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Full Name
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("Full_name")}</div>,
  },
  
 
  {
    accessorKey: "Birthday",
    header: "Birthday",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("Birthday")}</div>
    ),
  },
  {
    accessorKey: "Sex",
    header: "Sex",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("Sex")}</div>
    ),
  },
  {
    accessorKey: "Current_nationality",
    header: "Current nationality",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("Current_nationality")}</div>
    ),
  },
  {
    accessorKey: "From_Date_to_enter",
    header: "From Date to enter",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("From_Date_to_enter")}</div>
    ),
  },
  {
    accessorKey: "To_date",
    header: "To date",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("To_date")}</div>
    ),
  },
  {
    accessorKey: "Passport_number",
    header: "Passport number",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("Passport_number")}</div>
    ),
  },
 
  {
    accessorKey: "Type_of_Passport_",
    header: "Type of Passport",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("Type_of_Passport_")}</div>
    ),
  },
  {
    accessorKey: "Purpose",
    header: "Purpose",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("Purpose")}</div>
    ),
  },
  {
    accessorKey: "Duration",
    header: "Duration",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("Duration")}</div>
    ),
  },
  {
    accessorKey: "Place_to_get_visa",
    header: "Place to get visa",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("Place_to_get_visa")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
 
  
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Download .xlsx
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Download Pdf
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              View Visa
            </DropdownMenuItem>
            {/* <DropdownMenuItem>View Visa</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Search..."
          value={(table.getColumn("Full_name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("Full_name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}