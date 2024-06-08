import React from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "./ui/command";
import { ModeToggle } from "./ModeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoMdSettings, IoMdPerson } from "react-icons/io";


const Sidebar = () => {
  return (
    <div className="flex flex-col items-start gap-8 w-[400px] h-[100vh] p-5">
      <span className="text-4xl font-bold">To-Do List App</span>
      <ModeToggle />
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>All Tasks</CommandItem>
            <CommandItem>Starred</CommandItem>
            <CommandItem>Completed</CommandItem>
            <CommandItem>Archieved</CommandItem>
            <CommandItem>Excluded</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem className="flex items-center justify-start gap-4 p-4 justify">
              <Avatar className="flex items-center justify-center">
                <IoMdPerson className="text-2xl" />
              </Avatar>
              Profile
            </CommandItem>
            <CommandItem className="flex items-center justify-start gap-4 p-4 justify">
              <Avatar className="flex items-center justify-center">
                <IoMdSettings className="text-2xl" />
              </Avatar>
              Settings
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
};

export default Sidebar;
