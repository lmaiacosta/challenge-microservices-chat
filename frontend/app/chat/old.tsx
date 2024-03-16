// import Header from "@/ui/header";
// import Image from "next/image";
// import Link from "next/link";

// export default function chats() {
//   const chats = [
//     {
//       id: 1,
//       name: "Black Holes",
//       slug: "black-holes",
//       author: {
//         name: "Leonardo Maia Costa",
//         email: "lmaiacosta@gmail.com",
//         avatar: "https://avatars.githubusercontent.com/lmaiacosta",
//       },
//       lastComment: "2023-01-23T13:23Z",
//       loggedInUsers: 5,
//     },
//     {
//       id: 2,
//       name: "Tecnology Age",
//       slug: "tecnology-age",
//       author: {
//         name: "Amon Henry",
//         email: "courtney.henry@example.com",
//         avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
//       },
//       lastComment: "2023-01-23T13:23Z",
//       loggedInUsers: 10,
//     },
//     {
//       id: 3,
//       name: "Terapy",
//       slug: "terapy",
//       author: {
//         name: "Courtney Henry",
//         email: "courtney.henry@example.com",
//         avatar:
//           "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//       },
//       lastComment: "2023-01-23T13:23Z",
//       loggedInUsers: 10,
//     },
//   ];
//   return (
//     <>
//       <div className="text-blue">
//         <h2 className="mt-6 font-bold">Opened chats:</h2>

//         <ul role="list" className="divide-y divide-gray-100">
//           {chats.map((chat) => (
//             <li key={`/chat/${chat.slug}`} className="">
//               <Link
//                 href={`/chat/${chat.slug}`}
//                 className="flex justify-between gap-x-6 py-2"
//               >
//                 <div className="flex min-w-0 gap-x-4 align-bottom">
//                   <Image
//                     className="h-12 w-12 flex-none rounded-full bg-gray-50"
//                     width="50"
//                     height="50"
//                     src={chat.author.avatar}
//                     alt=""
//                   />
//                   <div className="min-w-0 flex-auto">
//                     <p className="text-sm font-semibold leading-6 text-gray-900">
//                       {chat.name}
//                     </p>
//                     <p className="mt-1 truncate text-xs leading-5 text-gray-500">
//                       {chat.email}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
//                   <p className="text-sm leading-6 text-gray-900">{chat.role}</p>
//                   <div className="mt-1 flex items-center gap-x-1.5">
//                     <div className="flex-none rounded-full bg-emerald-500/20 p-1">
//                       <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
//                     </div>
//                     <p className="text-xs leading-5 text-gray-500">
//                       Online ({chat.loggedInUsers})
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }
