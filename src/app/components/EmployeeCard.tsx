"use client";
import Image from "next/image";
import { useState } from "react";
import { Employee } from "../lib/employeeInfo";

export default function EmployeeCard({ employee }: { employee: Employee }) {
  const [open, setOpen] = useState(false);
  const [firstName, lastName] = [...employee.name.split(' ')]

  return (
    <div
      onClick={() => setOpen((prev) => !prev)}
      onKeyDown={(e) => e.key === "Enter" && setOpen((prev) => !prev)}
      role="button"
      aria-expanded={open}
      tabIndex={0}
      className="group relative flex max-h-[370px] w-[140px] flex-col items-center justify-between overflow-hidden bg-[#BDBEC0] sm:w-[200px] lg:w-[280px] xl:w-[315px]"
    >
      <div className="relative">
        <Image
          className={`relative top-3.5 z-[1] h-[100px] w-auto transition-all duration-300 group-hover:top-[-250px] sm:h-[140px] lg:h-[205px] ${open ? "top-[-250px]" : ""}`}
          src={employee.catImage}
          alt="cat image"
        />
      </div>
      <div
        className={`bg-customBlack text-customWhite relative z-10 flex w-full flex-col items-center justify-center pt-[5px] pb-[5px] transition-all duration-300 [clip-path:polygon(0_0,100%_4%,100%_100%,0_100%)] group-hover:translate-y-6 sm:pt-[20px] sm:pb-[15px] sm:group-hover:translate-y-12 xl:pt-[40px] xl:pb-[25px] ${open ? "translate-y-6 sm:translate-y-12" : ""}`}
      >
        <h3 className="mb-[5px] px-2.5 text-center font-bold text-wrap uppercase sm:mb-[10px] sm:text-2xl sm:leading-8 xl:text-(length:--font-md)">
          {firstName} <br /> {lastName}
        </h3>
        <p className="text-[12px] font-normal sm:text-(length:--font-sm)">
          <span className={`${employee.short_title ? 'max-lg:hidden' : ""}`}>{employee.title}</span>
          <span className={`${employee.short_title ? 'min-lg:hidden' : ""}`}>{employee.short_title}</span>
        </p>
      </div>
      <Image
        className={`absolute z-[1] transition-all duration-300 group-hover:top-0 ${open ? "top-0" : "top-[350px]"}`}
        src={employee.employeePhoto}
        alt={`Photo of ${employee.name}`}
      />
    </div>
  );
}
