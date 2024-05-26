import { Button } from "../app/ui/button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "../app/ui/dropdown-menu"
import {  TableRow, TableHeader, TableCell, TableBody, Table } from "../app/ui/table"
import { Badge } from "../app/ui/badge"
import EditEmployeeForm from "./EditEmployeeForm"

const EmployeeRow = ({employee}) => {
    return (
        <TableRow>
            <TableCell className="font-medium">{employee.name}</TableCell>
            <TableCell>{employee.email}</TableCell>
            <TableCell className="hidden md:table-cell">{employee.department}</TableCell>
            <TableCell className="hidden md:table-cell">{employee.hireDate}</TableCell>
            <TableCell>
              <Badge variant="success">{employee.status}</Badge>
            </TableCell>
            <TableCell className="flex space-x-2">
              <EditEmployeeForm employee={employee}/>
              <DeleteIcon/>
            </TableCell>
          </TableRow>
    )
}

export default EmployeeRow


  
function DeleteIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 6h18" />
        <path d="M19 6l-1.5 14.5a2 2 0 0 1-2 1.5H8.5a2 2 0 0 1-2-1.5L5 6" />
        <path d="M10 11v6" />
        <path d="M14 11v6" />
        <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
      </svg>
    );
  }
  