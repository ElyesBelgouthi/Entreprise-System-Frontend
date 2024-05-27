import React, { useEffect, useState } from "react";
import { Button } from "../../app/ui/button";
import { Input } from "../../app/ui/input";
import {
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
} from "../../app/ui/dialog";
import { Label } from "../../app/ui/label";
import { ScrollArea } from "../../app/ui/scroll-area";
import { useNavigate, useParams } from "react-router-dom";
import api from "@/services/api";

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
  { name: "Jessica Miller" },
];

const RoomEdit = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);

  const [members, setMembers] = useState([]);

  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPersons, setFilteredPersons] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const response = await api.get("/rooms/" + id);
        if (response.data) {
          setRoom(response.data);
          setMembers(response.data.users);
        }
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };

    const fetchEmployees = async () => {
      try {
        const response = await api.get("/users");
        if (response.data) {
          setEmployees(response.data);
          setFilteredPersons(response.data);
        }
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };
    fetchRoom();
    fetchEmployees();
  }, []);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    if (term.trim() === "") {
      setFilteredPersons(
        employees.filter(
          (person) => !members.some((member) => member.id === person.id)
        )
      );
    } else {
      setFilteredPersons(
        employees.filter(
          (person) =>
            person.username.toLowerCase().includes(term.toLowerCase()) &&
            !members.some((member) => member.id === person.id)
        )
      );
    }
  };

  const handleAddMember = (person) => {
    if (!members.some((member) => member.id === person.id)) {
      setMembers([...members, person]);
      setFilteredPersons(filteredPersons.filter((p) => p.id !== person.id));
    }
  };

  const handleRemoveMember = async (person) => {
    setMembers(members.filter((member) => member.id !== person.id));
    if (!filteredPersons.some((p) => p.id === person.id)) {
      setFilteredPersons([...filteredPersons, person]);
    }

    try {
      await api.post(`/rooms/remove/users`, {
        roomId: room.id,
        userIds: [person.id],
      });
    } catch (error) {
      console.error("Error adding members:", error);
    }
  };

  const handleAddMembersClick = async () => {
    const newMemberIds = members
      .filter((member) => !room.users.some((user) => user.id === member.id))
      .map((member) => member.id);

    try {
      await api.post(`/rooms/add/users`, {
        roomId: room.id,
        userIds: newMemberIds,
      });
    } catch (error) {
      console.error("Error adding members:", error);
    }
  };

  const handleDeleteRoom = async () => {
    try {
      await api.delete(`/rooms/${id}`);
      navigate("/admin/rooms");
    } catch (error) {
      console.error("Error deleting room:", error);
    }
  };

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex items-center">
        <h1 className="font-semibold text-lg md:text-2xl">
          {room ? room.name : "Room"}
        </h1>
        <div className="ml-auto flex items-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" variant="outline">
                Add Member
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>
                  Add Member to {room ? room.name : "Room"}
                </DialogTitle>
                <DialogDescription>
                  Search for and select members to add to the chat room.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <div className="col-span-4">
                    <Input
                      id="search"
                      value={searchTerm}
                      onChange={handleSearch}
                      placeholder="Search for members"
                    />
                  </div>
                </div>
                <ScrollArea className="h-[400px] rounded-md border p-2">
                  <div className="col-span-4 grid gap-2">
                    {filteredPersons.map((person, index) => (
                      <div className="flex items-center gap-4" key={index}>
                        <div className="grid gap-0.5">
                          <div className="font-medium">{person.username}</div>
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
                </ScrollArea>
              </div>
              <DialogFooter>
                <DialogTrigger>
                  <Button type="button" onClick={handleAddMembersClick}>
                    Add Members
                  </Button>
                </DialogTrigger>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" variant="destructive">
                Delete Room
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white rounded-lg shadow-lg p-6">
              <DialogHeader className="text-center">
                <h2 className="text-lg font-semibold text-gray-800">
                  Are you sure you want to delete this room?
                </h2>
              </DialogHeader>
              <DialogFooter className="flex justify-end gap-4 mt-4">
                <Button
                  variant="destructive"
                  className="bg-red-500 text-white hover:bg-red-600"
                  onClick={handleDeleteRoom}
                >
                  Yes, Delete
                </Button>
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
        </div>
      </div>
      <div className="border shadow-sm rounded-lg">
        {members.map((member, index) => (
          <div className="p-4 border-b" key={index}>
            <div className="flex items-center justify-between">
              <div className="grid gap-0.5">
                <div className="font-medium">{member.username}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Member
                </div>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="sm" variant="outline" className="p-2">
                    <XIcon className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-white rounded-lg shadow-lg p-6">
                  <DialogHeader className="text-center">
                    <h2 className="text-lg font-semibold text-gray-800">
                      Are you sure you want to remove {member.username}?
                    </h2>
                  </DialogHeader>
                  <DialogFooter className="flex justify-end gap-4 mt-4">
                    <DialogTrigger asChild>
                      <Button
                        variant="destructive"
                        onClick={() => handleRemoveMember(member)}
                        className="bg-red-500 text-white hover:bg-red-600"
                      >
                        Yes
                      </Button>
                    </DialogTrigger>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50"
                      >
                        No
                      </Button>
                    </DialogTrigger>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
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
