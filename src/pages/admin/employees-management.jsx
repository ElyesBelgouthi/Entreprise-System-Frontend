import { Button } from "../../app/ui/button";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "../../app/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../app/ui/dialog";

import EmployeeRow from "@/components/EmployeeRow";
import AddEmployeeForm from "@/components/AddEmployeeForm";
import api from "@/services/api";
import { useEffect, useState } from "react";

const EmployeesMangagement = () => {
  const [employees, setEmployees] = useState(null);
  const [refetch, sendRefetch] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(
    (employees) => {
      const fetchEmployees = async () => {
        try {
          const queryParam = disabled ? "?mode=withDeleted" : "";
          const response = await api.get(`/users${queryParam}`);
          if (response.data) {
            setEmployees(response.data);
          }
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      };
      fetchEmployees();
    },
    [refetch, disabled]
  );

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-lg md:text-2xl">Employees</h1>

        <AddEmployeeForm sendRefetch={sendRefetch} />
        <Button
          onClick={() => {
            setDisabled((state) => !state);
          }}
          className="mx-2"
          variant="outline"
        >
          {disabled ? "Hide Disabled" : "Show Disabled"}
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
              <TableHead>Role</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees &&
              employees.map((employee, index) => {
                return (
                  <EmployeeRow
                    sendRefetch={sendRefetch}
                    employee={employee}
                    key={index}
                  />
                );
              })}
          </TableBody>
        </Table>
      </div>
    </main>
  );
};
export default EmployeesMangagement;
