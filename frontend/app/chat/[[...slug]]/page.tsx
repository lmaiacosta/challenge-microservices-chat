"use client";
import IncomeMessage from "@/ui/income-message";
import OutcomeMessage from "@/ui/outcome-message";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { useState } from "react";
import InputEmoji from "react-input-emoji";
const inter = Inter({ subsets: ["latin"] });
const chats = [
  {
    id: 1,
    name: "Black Holes",
    slug: "black-holes",
    author: {
      name: "Leonardo Maia Costa",
      email: "lmaiacosta@gmail.com",
      avatar: "https://avatars.githubusercontent.com/lmaiacosta",
    },
    lastMessage: "Leo: Hi!",
    lastComment: "2023-01-23T13:23Z",
    loggedInUsers: 5,
  },
  {
    id: 2,
    name: "Tecnology Age",
    slug: "tecnology-age",
    author: {
      name: "Amon Henry",
      email: "courtney.henry@example.com",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    },
    lastMessage: "Leo: Hi!",
    lastComment: "2023-01-23T13:23Z",
    loggedInUsers: 10,
  },
  {
    id: 3,
    name: "Terapy",
    slug: "terapy",
    author: {
      name: "Courtney Henry",
      email: "courtney.henry@example.com",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    lastMessage: "Leo: Hi!",
    lastComment: "2023-01-23T13:23Z",
    loggedInUsers: 10,
  },
];

const chat = {
  id: 1,
  name: "Black Holes",
  slug: "black-holes",
  avatar: "https://source.unsplash.com/L2cxSuKWbpo/600x600",
  createdAt: "2023-01-23T13:23Z",
  author: {
    name: "Leonardo Maia Costa",
    email: "lmaiacosta@gmail.com",
    avatar: "https://avatars.githubusercontent.com/lmaiacosta",
  },
  lastComment: "2023-01-23T13:23Z",
  loggedInUsers: 5,
  messages: [
    {
      id: 1,
      author: {
        id: 1,
        avatar: "https://avatars.githubusercontent.com/lmaiacosta",
      },
      timestamp: 1458692752478,
      chatId: 1,
      text: "Hi there \n we a Here to talk about Black Holes!\n WHat are they?\n Relative Time\n",
      // reply_to
      // externaId:
    },
    {
      id: 2,
      author: {
        id: 1,
        avatar: "https://avatars.githubusercontent.com/lmaiacosta",
      },
      timestamp: 1458692752478,
      chatId: 1,
      text: "Welcome to group everyone !      ",
      // reply_to
      // externaId:
    },
    {
      id: 3,
      author: {
        id: 2,
        avatar: "https://source.unsplash.com/vpOeXr5wmR4/600x600",
      },
      timestamp: 1458692752478,
      chatId: 1,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at praesentium, aut ullam delectus odio error sit rem. Architecto nulla doloribus laborum illo rem enim dolor odio saepe, consequatur quas?      ",
      // reply_to
      // externaId:
    },
    {
      id: 4,
      author: {
        id: 2,
        avatar: "https://source.unsplash.com/vpOeXr5wmR4/600x600",
      },
      timestamp: 1458692752478,
      chatId: 1,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, repudiandae.",
      // reply_to
      // externaId:
    },
    {
      id: 5,
      author: {
        id: 2,
        avatar: "https://source.unsplash.com/vpOeXr5wmR4/600x600",
      },
      timestamp: 1458692752478,
      chatId: 1,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, repudiandae.",
      // reply_to
      // externaId:
    },
  ],
};

export default function Room({ params }: { params: { slug: string } }) {
  const [text, setText] = useState("");

  return (
    <>
      <div className="container mx-auto rounded-lg shadow-lg">
        <div className="flex flex-row justify-between ">
          <div className="hidden w-2/5 flex-col overflow-y-auto border-r-2 lg:block ">
            <div className="border-b-2 px-2 py-4">
              <input
                type="text"
                placeholder="search chatting"
                className="w-full rounded-2xl border-2 border-gray-200 px-2 py-2"
              />
            </div>

            <ul role="list" className="divide-y divide-gray-100">
              {chats.map((chat) => (
                <li key={`/chat/${chat.slug}`} className="">
                  <Link
                    href={`/chat/${chat.slug}`}
                    className="flex justify-between gap-x-6 py-2"
                  >
                    <div className="flex min-w-0 gap-x-4 align-bottom">
                      <Image
                        className="h-12 w-12 flex-none rounded-full bg-gray-50"
                        width="50"
                        height="50"
                        src={chat.author.avatar}
                        alt=""
                      />
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                          {chat.name}
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                          {chat.lastMessage}
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0 sm:flex sm:flex-col sm:items-center">
                      <p className="text-sm leading-6 text-gray-900">
                        {chat.email || "Group"}
                      </p>
                      <div className="mt-1 flex items-center gap-x-1.5">
                        <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        </div>
                        <p className="text-xs leading-5 text-gray-500">
                          Online ({chat.loggedInUsers})
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex w-full flex-col justify-between px-5">
            <div className="mt-5 flex flex-col">
              {chat.messages.map((message) => (
                <div key={`${message.id}-message`}>
                  {message.author.id == 1 ? (
                    <OutcomeMessage
                      text={message.text}
                      avatar={message.author.avatar}
                    />
                  ) : (
                    <IncomeMessage
                      text={message.text}
                      avatar={message.author.avatar}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="w-full rounded-xl bg-gray-300 px-3 py-5">
              {/* <InputEmoji
                value={text}
                onChange={setText}
                cleanOnEnter={true}
                // placeholder="..."
                fontSize={14}
                height={120}
              /> */}
            </div>
          </div>
          <div className="hidden w-2/5 border-l-2 px-5 lg:block">
            <div className="flex flex-col">
              <div className=" py-4 text-xl font-semibold ">
                {chat.name || chat.author.name}
              </div>
              <Image
                src={chat.avatar || chat.author.avatar}
                className="h-64 rounded-xl object-cover"
                height={256}
                width={256}
                alt=""
              />
              <div className="py-4 font-semibold">Created {chat.createdAt}</div>
              <div className="font-light">
                {chat.description || chat.author.email}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
