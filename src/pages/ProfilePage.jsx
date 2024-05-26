import React from "react";
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

const ProfilePage = () => {
  return (
    <main className="">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Manage your profile information.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input disabled id="name" value="John Doe" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input disabled id="email" value="john.doe@company.com" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="job-title">Job Title</Label>
              <Input disabled id="job-title" value="Software Engineer" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="department">Department</Label>
              <Input disabled id="department" value="Engineering" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="employee-id">Employee ID</Label>
              <Input disabled id="employee-id" value="12345" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="hire-date">Hire Date</Label>
              <Input disabled id="hire-date" value="2022-01-01" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone</Label>
              <Input disabled id="phone" value="+1 (555) 555-5555" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="roles">Roles</Label>
              <Input disabled id="roles" value="Admin, Manager" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="password">Change Password</Label>
              <div className="grid gap-2">
                <Input
                  id="password"
                  placeholder="Current password"
                  type="password"
                />
                <Input
                  id="new-password"
                  placeholder="New password"
                  type="password"
                />
                <Input
                  id="confirm-password"
                  placeholder="Confirm new password"
                  type="password"
                />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="justify-end">
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>
    </main>
  );
};

export default ProfilePage;
