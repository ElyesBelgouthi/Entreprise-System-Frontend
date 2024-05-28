import React, { useEffect, useState } from "react";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "../app/ui/card";
import { Label } from "../app/ui/label";
import { Input } from "../app/ui/input";
import { Button } from "../app/ui/button";
import api from "@/services/api";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const ProfilePage = () => {
  const userData = useSelector((state) => state.mainReducer.userData);
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await api.get("/users/" + userData.id);
        if (response.data) {
          setEmployee(response.data);
        }
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };
    fetchEmployee();
  }, []);

  return (
    <main className="p-10 bg-gray-300 h-full">
      {employee && (
        <Card className="w-full h-full">
          <CardHeader className="mb-10">
            <CardTitle>Profile</CardTitle>
            <CardDescription>Consult your profile information.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input disabled id="name" value={employee.username} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input disabled id="email" value={employee.email} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="job-title">Department</Label>
                <Input disabled id="job-title" value={employee.department} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="hire-date">Hire Date</Label>
                <Input disabled id="hire-date" value="2022-01-01" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input disabled id="phone" value={employee.phoneNumber} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="roles">Role</Label>
                <Input disabled id="roles" value={employee.role} />
              </div>
            </div>
          </CardContent>
          <CardFooter className="justify-end">
            <NavLink to="/">
              <Button>Go Back</Button>
            </NavLink>
          </CardFooter>
        </Card>
      )}
    </main>
  );
};

export default ProfilePage;
