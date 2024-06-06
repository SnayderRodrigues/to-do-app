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


const Sidebar = () => {
  return (
    <div className="flex flex-col items-start gap-8 w-[400px] h-full p-5">
      <span className="text-4xl font-bold">To-Do App</span>
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
            <CommandItem className="flex items-center justify-start gap-4 p-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              Profile
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
};

export default Sidebar;
