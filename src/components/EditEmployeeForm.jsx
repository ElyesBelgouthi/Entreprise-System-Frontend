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

const EditEmployeeForm = ({employee}) => {
  const form = useForm({
    defaultValues: {
      name: employee.name,
      email: employee.email,
      password: employee.password,
      department: employee.department,
      hireDate: new Date(employee.hireDate),
      roles: employee.roles,
      phoneNumber: employee.phoneNumber,
    },
  });
  console.log(form)
  function onSubmit(values) {
    console.log(values);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <EditIcon/>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Employee</DialogTitle>

        </DialogHeader>
        <ScrollArea className="h-[600px] rounded-md border p-2">
              <DialogEmployeeForm form={form} onSubmitFn={onSubmit} />
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