import React, { useRef, useEffect } from "react";
import { Textarea } from "./ui/textarea";
import { cn } from "@/lib/utils";

interface AutoResizeTextareaProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
  maxRows?: number;
  className?: string;
  placeholder?: string;
}

const AutoResizeTextarea: React.FC<AutoResizeTextareaProps> = ({
  id,
  value,
  onChange,
  rows = 2,
  maxRows = 10,
  className,
  placeholder,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset height to auto to calculate scrollHeight correctly
      textarea.style.height = `${Math.min(
        textarea.scrollHeight,
        maxRows * 28
      )}px`; // Adjust height based on scrollHeight and maxRows
    }
  }, [value, maxRows]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <Textarea
      id={id}
      ref={textareaRef}
      className={cn(
        "ml-1 text-base focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-offset-0 border-[#828282] rounded-md placeholder:text-[#4F4F4F] focus:p-3 focus:border min-h-10 resize-none text-[#4F4F4F] transition-all duration-150 border-0 p-0 overflow-hidden",
        className
      )}
      rows={rows}
      onChange={handleChange}
      value={value}
      placeholder={placeholder || "No Description"}
    />
  );
};

export default AutoResizeTextarea;
