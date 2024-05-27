import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../app/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../app/ui/dialog";
import { ScrollArea } from "../app/ui/scroll-area";
import DialogEmployeeForm from "./DialogEmployeeForm";
import api from "@/services/api";

const EditEmployeeForm = ({ sendRefetch, employee }) => {
  const form = useForm({
    defaultValues: {
      username: employee.username,
      email: employee.email,
      password: "",
      department: employee.department,
      hireDate: new Date(employee.hireDate),
      role: employee.role,
      phoneNumber: employee.phoneNumber,
    },
  });

  const onSubmit = async (values) => {
    try {
      let sentValues = { ...values };
      if (values.password === "") {
        delete sentValues.password;
      }
      const response = await api.patch(`users/${employee.id}`, sentValues);
      console.log("Employee created:", response.data);
      sendRefetch((state) => !state);
    } catch (error) {
      console.error("Error creating employee:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          <EditIcon className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Employee</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[600px] rounded-md border p-2">
          <DialogEmployeeForm
            form={form}
            hireDate={employee.hireDate}
            onSubmitFn={onSubmit}
          />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default EditEmployeeForm;

function EditIcon(props) {
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
      <path d="M12 20h9" />
      <path d="M16.5 3.5l4 4L7 21H3v-4L16.5 3.5z" />
    </svg>
  );
}
