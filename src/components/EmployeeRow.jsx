import { Button } from "../app/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "../app/ui/dropdown-menu";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "../app/ui/dialog";
import {
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "../app/ui/table";
import { Badge } from "../app/ui/badge";
import EditEmployeeForm from "./EditEmployeeForm";
import api from "@/services/api";

const EmployeeRow = ({ sendRefetch, employee }) => {
  async function onDelete() {
    try {
      const response = await api.delete(`users/${employee.id}`);
      console.log("Employee deleted:", response.data);
      sendRefetch((state) => !state);
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  }

  async function onRestore() {
    try {
      const response = await api.get(`users/restore/${employee.id}`);
      console.log("Employee restored:", response.data);
      sendRefetch((state) => !state);
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  }
  console.log(employee);
  return (
    <TableRow>
      <TableCell className="font-medium">{employee.username}</TableCell>
      <TableCell>{employee.email}</TableCell>
      <TableCell className="hidden md:table-cell">
        {employee.department}
      </TableCell>
      <TableCell className="hidden md:table-cell">
        {employee.hireDate}
      </TableCell>
      <TableCell>
        <Badge variant="success">{employee.role.toUpperCase()}</Badge>
      </TableCell>
      {!employee.deletedAt && (
        <TableCell className="flex space-x-2">
          <EditEmployeeForm sendRefetch={sendRefetch} employee={employee} />
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" variant="outline">
                <DeleteIcon className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white rounded-lg shadow-lg p-6">
              <DialogHeader className="text-center">
                <DialogTitle>Confirm Deletion</DialogTitle>
                <DialogDescription>
                  Are you sure you want to delete {employee.username}?
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="flex justify-end gap-4 mt-4">
                <DialogTrigger asChild>
                  <Button
                    variant="destructive"
                    onClick={onDelete}
                    className="bg-red-500 text-white hover:bg-red-600"
                  >
                    Yes, Delete
                  </Button>
                </DialogTrigger>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </Button>
                </DialogTrigger>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </TableCell>
      )}
      {employee.deletedAt && (
        <TableCell className="flex space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" variant="outline">
                <RestoreUserIcon className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white rounded-lg shadow-lg p-6">
              <DialogHeader className="text-center">
                <DialogTitle>Confirm Restoration</DialogTitle>
                <DialogDescription>
                  Are you sure you want to restore {employee.username}?
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="flex justify-end gap-4 mt-4">
                <DialogTrigger asChild>
                  <Button
                    variant="primary"
                    onClick={onRestore}
                    className="bg-green-500 text-white hover:bg-green-600"
                  >
                    Yes, Restore
                  </Button>
                </DialogTrigger>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </Button>
                </DialogTrigger>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </TableCell>
      )}
    </TableRow>
  );
};

export default EmployeeRow;

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

function RestoreUserIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      <path d="M18 2v4h4" />
      <path d="M23 11a9 9 0 1 1-8-8" />
    </svg>
  );
}
