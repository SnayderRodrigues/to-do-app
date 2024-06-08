import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoMdSearch, IoMdNotifications } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Main = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[100vh]">
      <div className="flex items-center justify-between gap-4 w-full px-8">
        <Input type="text" placeholder="Search tasks" />
        <Button variant="outline">Search</Button>
        <Popover>
          <PopoverTrigger>
            <IoMdNotifications className="text-2xl"/>
          </PopoverTrigger>
          <PopoverContent>Place content for the popover here.</PopoverContent>
        </Popover>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="grid grid-cols-3 grid-rows-3 gap-8 w-full p-8">
        <Card className="col-start-1 col-end-2 row-start-1 row-end-2">
          <CardHeader>
            <CardTitle>Task Title</CardTitle>
            <CardDescription>Category</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Description</p>
          </CardContent>
          <CardFooter>
            <p>Date/Time</p>
          </CardFooter>
        </Card>
        <Card className="col-start-2 col-end-3 row-start-1 row-end-2">
          <CardHeader>
            <CardTitle>Task Title</CardTitle>
            <CardDescription>Category</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Description</p>
          </CardContent>
          <CardFooter>
            <p>Date/Time</p>
          </CardFooter>
        </Card>
        <Card className="col-start-3 col-end-4 row-start-1 row-end-2">
          <CardHeader>
            <CardTitle>Task Title</CardTitle>
            <CardDescription>Category</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Description</p>
          </CardContent>
          <CardFooter>
            <p>Date/Time</p>
          </CardFooter>
        </Card>
        <Card className="col-start-1 col-end-2 row-start-2 row-end-3">
          <CardHeader>
            <CardTitle>Task Title</CardTitle>
            <CardDescription>Category</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Description</p>
          </CardContent>
          <CardFooter>
            <p>Date/Time</p>
          </CardFooter>
        </Card>
        <Card className="col-start-2 col-end-3 row-start-2 row-end-3">
          <CardHeader>
            <CardTitle>Task Title</CardTitle>
            <CardDescription>Category</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Description</p>
          </CardContent>
          <CardFooter>
            <p>Date/Time</p>
          </CardFooter>
        </Card>
        <Card className="col-start-3 col-end-4 row-start-2 row-end-3">
          <CardHeader>
            <CardTitle>Task Title</CardTitle>
            <CardDescription>Category</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Description</p>
          </CardContent>
          <CardFooter>
            <p>Date/Time</p>
          </CardFooter>
        </Card>
        <Card className="col-start-1 col-end-2 row-start-3 row-end-4">
          <CardHeader>
            <CardTitle>Task Title</CardTitle>
            <CardDescription>Category</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Description</p>
          </CardContent>
          <CardFooter>
            <p>Date/Time</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Main;
