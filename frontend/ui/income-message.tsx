"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function IncomeMessage({ text, avatar }) {
  return (
    <div className="mb-4 flex justify-start">
      <Image
        src={avatar}
        className="h-8 w-8 rounded-full object-cover"
        alt=""
        height={30}
        width={30}
      />
      <div className="ml-2 rounded-br-3xl rounded-tl-xl rounded-tr-3xl bg-gray-400 px-4 py-3 text-white">
        {text}
      </div>
    </div>
  );
}
