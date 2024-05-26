import { Button } from "../../app/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "../../app/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../app/ui/dialog"


import EmployeeRow from "@/components/EmployeeRow";
import AddEmployeeForm from "@/components/AddEmployeeForm";

const DUMMY_Employees = [
  {
    name: "Employee 1",
    email: "employee1@example.com",
    password: "password1",
    department: "Human Resources (HR)",
    hireDate: "2024-05-27T08:00:00.000Z",
    roles: ["Admin", "User"],
    phoneNumber: "+1234567890",
    status: "Active"
  },
  {
    name: "Employee 2",
    email: "employee2@example.com",
    password: "password2",
    department: "Finance",
    hireDate: "2024-05-27T08:00:00.000Z",
    roles: ["User"],
    phoneNumber: "+1234567891",
    status: "Not Active"
  },
  {
    name: "Employee 3",
    email: "employee3@example.com",
    password: "password3",
    department: "Marketing",
    hireDate: "2024-05-27T08:00:00.000Z",
    roles: ["Manager"],
    phoneNumber: "+1234567892",
    status: "Active"
  },
  {
    name: "Employee 4",
    email: "employee4@example.com",
    password: "password4",
    department: "Sales",
    hireDate: "2024-05-27T08:00:00.000Z",
    roles: ["Admin", "User"],
    phoneNumber: "+1234567893",
    status: "Not Active"
  },
  {
    name: "Employee 5",
    email: "employee5@example.com",
    password: "password5",
    department: "Research and Development (R&D)",
    hireDate: "2024-05-27T08:00:00.000Z",
    roles: ["User"],
    phoneNumber: "+1234567894",
    status: "Active"
  },
  {
    name: "Employee 6",
    email: "employee6@example.com",
    password: "password6",
    department: "Information Technology (IT)",
    hireDate: "2024-05-27T08:00:00.000Z",
    roles: ["Manager"],
    phoneNumber: "+1234567895",
    status: "Not Active"
  },
  {
    name: "Employee 7",
    email: "employee7@example.com",
    password: "password7",
    department: "Customer Service",
    hireDate: "2024-05-27T08:00:00.000Z",
    roles: ["Admin", "User"],
    phoneNumber: "+1234567896",
    status: "Active"
  },
  {
    name: "Employee 8",
    email: "employee8@example.com",
    password: "password8",
    department: "Operations",
    hireDate: "2024-05-27T08:00:00.000Z",
    roles: ["User"],
    phoneNumber: "+1234567897",
    status: "Not Active"
  },
  {
    name: "Employee 9",
    email: "employee9@example.com",
    password: "password9",
    department: "Logistics",
    hireDate: "2024-05-27T08:00:00.000Z",
    roles: ["Manager"],
    phoneNumber: "+1234567898",
    status: "Active"
  },
  {
    name: "Employee 10",
    email: "employee10@example.com",
    password: "password10",
    department: "Procurement",
    hireDate: "2024-05-27T08:00:00.000Z",
    roles: ["Admin", "User"],
    phoneNumber: "+1234567899",
    status: "Not Active"
  }
];


const EmployeesMangagement = () => {
    return <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
    <div className="flex items-center">
      <h1 className="font-semibold text-lg md:text-2xl">Employees</h1>
      
      <AddEmployeeForm/>
      
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


