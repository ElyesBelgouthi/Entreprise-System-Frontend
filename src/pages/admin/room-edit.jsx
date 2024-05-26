import React, { useState } from "react";
import { Button } from "../../app/ui/button";
import { Input } from "../../app/ui/input";
import {
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog
} from "../../app/ui/dialog";
import { Label } from "../../app/ui/label";

const DUMMY_PERSONS = [
  { name: "John Doe" },
  { name: "Jane Smith" },
  { name: "Bob Johnson" },
  { name: "Alice Williams" },
  { name: "Tom Davis" },
  { name: "Sarah Lee" },
  { name: "Michael Chen" },
  { name: "Emily Davis" },
  { name: "Chris Wilson" },
  { name: "Jessica Miller" }
];

const RoomEdit = () => {
  const [members, setMembers] = useState([
    { name: "John Doe" },
    { name: "Jane Smith" },
    { name: "Bob Johnson" },
    { name: "Alice Williams" }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPersons, setFilteredPersons] = useState(DUMMY_PERSONS);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    if (term.trim() === "") {
      setFilteredPersons(DUMMY_PERSONS);
    } else {
      setFilteredPersons(
        DUMMY_PERSONS.filter((person) =>
          person.name.toLowerCase().includes(term.toLowerCase())
        )
      );
    }
  };

  const handleAddMember = (person) => {
    if (!members.some((member) => member.name === person.name)) {
      setMembers([...members, person]);
    }
  };

  const handleRemoveMember = (person) => {
    setMembers(members.filter((member) => member.name !== person.name));
  };

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex items-center">
        <h1 className="font-semibold text-lg md:text-2xl">General Chat</h1>
        <div className="ml-auto flex items-center gap-2">
        <Dialog>
        <DialogTrigger asChild>
          <Button size="sm" variant="outline">
            Add Member
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Member to General Chat</DialogTitle>
            <DialogDescription>
              Search for and select members to add to the chat room.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right" htmlFor="search">
                Search
              </Label>
              <div className="col-span-3">
                <Input
                  id="search"
                  value={searchTerm}
                  onChange={handleSearch}
                  placeholder="Search for members"
                />
              </div>
            </div>
            <div className="col-span-4 grid gap-2">
              {filteredPersons.map((person, index) => (
                <div className="flex items-center gap-4" key={index}>
                  <div className="grid gap-0.5">
                    <div className="font-medium">{person.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Member
                    </div>
                  </div>
                  <Button
                    className="ml-auto"
                    size="icon"
                    variant="ghost"
                    onClick={() => handleAddMember(person)}
                  >
                    <PlusIcon className="h-4 w-4" />
                    <span className="sr-only">Add member</span>
                  </Button>
                </div>
              ))}
            </div>
          </div>
          <DialogFooter>
            <Button type="button">Add Members</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
          <Button size="sm" variant="destructive">
            Delete Room
          </Button>
        </div>
      </div>
      <div className="border shadow-sm rounded-lg">
        {members.map((member, index) => (
          <div className="p-4 border-b" key={index}>
            <div className="flex items-center gap-4">
              <div className="grid gap-0.5">
                <div className="font-medium">{member.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Member
                </div>
              </div>
              <Button
                className="ml-auto"
                size="icon"
                variant="ghost"
                onClick={() => handleRemoveMember(member)}
              >
                <XIcon className="h-4 w-4" />
                <span className="sr-only">Remove member</span>
              </Button>
            </div>
          </div>
        ))}
      </div>
      
    </main>
  );
};

export default RoomEdit;

function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function PlusIcon(props) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
