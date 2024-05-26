import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "../app/ui/button";
import { Input } from "../app/ui/input";
import {
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog
} from "../app/ui/dialog";
import { Label } from "../app/ui/label";
import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectContent,
  SelectValue,
  SelectMulti
} from "../app/ui/select";

const DUMMY_Persons = [
  "mohsen",
  "bachir",
  "bouzguelif"
];

const AddRoomForm = () => {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      name: "",
      members: []
    }
  });

  const onSubmit = (values) => {
    console.log(values);
    // Call your onSubmitFn here
  };

  const selectedMembers = watch("members");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="ml-auto" size="sm">
          Create Room
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a New Chat Room</DialogTitle>
          <DialogDescription>
            Enter the room name and add members to get started.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 p-6">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <div>
                <Label>Name</Label>
                <Input placeholder="Mohsen's room" {...field} />
              </div>
            )}
          />
          <Controller
            name="members"
            control={control}
            render={({ field }) => (
              <div>
                <Label>Members</Label>
                <SelectMulti
                  value={field.value}
                  onChange={(selected) => field.onChange(selected)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Members" />
                  </SelectTrigger>
                  <SelectContent>
                    {DUMMY_Persons.map((person, index) => (
                      <SelectItem value={person} key={index}>
                        {person}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </SelectMulti>
              </div>
            )}
          />
          <div className="flex flex-wrap gap-2">
            {selectedMembers &&
              selectedMembers.map((member, index) => (
                <span
                  key={index}
                  className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full"
                >
                  {member}
                </span>
              ))}
          </div>
          <Button type="submit">Submit</Button>
        </form>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit(onSubmit)}>
            Create Room
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddRoomForm;
