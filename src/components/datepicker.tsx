"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "@/lib/icon-library";
import { DateTime } from "luxon";

export interface DatepickerProps {
  onChange?: (date: Date | undefined) => void;
}

export function Datepicker({ onChange }: DatepickerProps) {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className="w-48 justify-between text-left font-normal border-[#828282] text-base/none text-[#4F4F4F] px-3.5"
        >
          {date ? (
            DateTime.fromJSDate(date).toFormat("dd/LL/yyyy")
          ) : (
            <span>Set Date</span>
          )}
          <CalendarIcon fill="currentColor" className="text-[#4F4F4F]" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto p-0 border border-[#828282] rounded-md"
        align="start"
        sideOffset={8}
        alignOffset={160}
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={(newDate) => {
            setDate(newDate);

            onChange?.(newDate);
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
