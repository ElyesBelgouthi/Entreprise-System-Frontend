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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../app/ui/popover";

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

const AddEmployeeForm = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      department: "",
      hireDate: null,
      roles: [],
      phoneNumber: "",
    },
  });

  const [date, setDate] = useState(null);

  function onSubmit(values) {
    console.log(values);
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
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            <ScrollArea className="h-[600px] rounded-md border p-2">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Mohsen Mohsen" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="example@gmail.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input placeholder="" type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="department"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Department</FormLabel>
                        <FormControl>
                          <Select {...field}>
                            <SelectTrigger>
                              <SelectValue placeholder="Choose the department" />
                            </SelectTrigger>
                            <SelectContent>
                              {Departments.map((dep, index) => (
                                <SelectItem value={dep} key={index}>
                                  {dep}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+216 98 765 432" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="hireDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Hire Date   </FormLabel>
                        <FormControl>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-[280px] justify-start text-left font-normal",
                                  !date && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={date}
                                onSelect={(selectedDate) => {
                                  setDate(selectedDate);
                                  field.onChange(selectedDate);
                                }}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit">Submit</Button>
                </form>
              </Form>
            </ScrollArea>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddEmployeeForm;
