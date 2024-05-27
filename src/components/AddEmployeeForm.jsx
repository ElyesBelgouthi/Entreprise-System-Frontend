import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../app/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../app/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../app/ui/form";
import { Input } from "../app/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../app/ui/select";
import { ScrollArea } from "../app/ui/scroll-area";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "../app/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../app/ui/popover";
import { Checkbox } from "../app/ui/checkbox";
import DialogEmployeeForm from "./DialogEmployeeForm";
import api from "@/services/api";

const rolesOptions = [
  { value: "Admin", label: "Admin" },
  { value: "User", label: "User" },
  { value: "Manager", label: "Manager" },
  // Add other roles as needed
];

const Departments = [
  "Human Resources (HR)",
  "Finance",
  "Marketing",
  "Sales",
  "Research and Development (R&D)",
  "Information Technology (IT)",
  "Customer Service",
  "Operations",
  "Logistics",
  "Procurement",
  "Legal",
  "Administration",
  "Public Relations (PR)",
  "Quality Assurance (QA)",
  "Engineering",
  "Product Management",
  "Business Development",
  "Corporate Strategy",
  "Health and Safety",
  "Training and Development",
];

const AddEmployeeForm = ({ sendRefetch }) => {
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      department: "",
      hireDate: null,
      role: "",
      phoneNumber: "",
    },
  });

  async function onSubmit(values) {
    console.log(values);
    try {
      const response = await api.post("users", values);
      console.log("Employee created:", response.data);
      sendRefetch((state) => !state);
    } catch (error) {
      console.error("Error creating employee:", error);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="ml-auto" size="sm">
          Add Employee
        </Button>
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

export default AddEmployeeForm;
