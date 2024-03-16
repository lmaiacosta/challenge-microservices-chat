"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function OutcomeMessage({ text, avatar }) {
  return (
    <div className={`mb-4 flex justify-end`}>
      <div className="mr-2 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl bg-blue-400 px-4 py-3 text-white">
        {text}
      </div>
      <Image
        src={avatar}
        className="h-8 w-8 rounded-full object-cover"
        alt=""
        height={30}
        width={30}
      />
    </div>
  );
}
