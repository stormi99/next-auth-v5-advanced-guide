import React from "react";

export default function TopicSeperator({
  number,
  header,
  fontClassName,
  divColor,
  textColor,
}: {
  number?: number;
  header: string;
  fontClassName?: string;
  divColor?: string;
  textColor?: string;
}) {
  const className = `text-center ${
    textColor ? textColor : "text-white"
  } uppercase text-sm mb-[1rem] tracking-[2px] font-normal`;
  return (
    <div>
      <div
        className={`h-[1.5px] w-full ${divColor ? divColor : "bg-white"}`}
      ></div>

      <div
        className={`flex gap-x-4 items-center ${
          number ? "justify-between" : "justify-end"
        } w-full ${fontClassName ? fontClassName : ""}`}
      >
        {number && <span className={className}>{number}</span>}
        <h2 className={className}>{header}</h2>
      </div>
    </div>
  );
}
