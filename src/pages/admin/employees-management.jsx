import { Button } from "../../app/ui/button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "../../app/ui/dropdown-menu"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "../../app/ui/table"
import { Badge } from "../../app/ui/badge"
import EmployeeRow from "@/components/EmployeeRow";

const DUMMY_Employees = [
  {
    name: "John Doe",
    email: "john@acme.com",
    department: "Sales",
    startDate: "2021-03-15",
    status: "Active",
    enabled: true  },
  {
    name: "Jane Smith",
    email: "jane@acme.com",
    department: "Marketing",
    startDate: "2022-01-01",
    status: "Active",
    enabled: true  },
  {
    name: "Bob Johnson",
    email: "bob@acme.com",
    department: "IT",
    startDate: "2020-06-01",
    status: "Active",
    enabled: true  },
  {
    name: "Sarah Lee",
    email: "sarah@acme.com",
    department: "HR",
    startDate: "2019-09-01",
    status: "Active",
    enabled: true  },
  {
    name: "Michael Brown",
    email: "michael@acme.com",
    department: "Finance",
    startDate: "2018-11-01",
    status: "Disabled",
    enabled: false
  }
];


const EmployeesMangagement = () => {
    return <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
    <div className="flex items-center">
      <h1 className="font-semibold text-lg md:text-2xl">Employees</h1>
      <Button className="ml-auto" size="sm">
        Add Employee
      </Button>
    </div>
    <div className="border shadow-sm rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="hidden md:table-cell">Department</TableHead>
            <TableHead className="hidden md:table-cell">Hire Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {DUMMY_Employees.map((employee, index)=> {
            return <EmployeeRow employee={employee} key={index} />
          })}
        </TableBody>
      </Table>
    </div>
  </main>
}
export default EmployeesMangagement


