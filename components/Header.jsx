import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export const Header = () => {
  const [id, setId] = useState("");

  const router = useRouter();

  return (
    <header className="flex flex-col md:flex-row bg-black p-2 text-white flex items-center text-center mb-24 z-50">
      <Image src="/images/logo.jpg" alt="logo" width={100} height={100}></Image>

      <div className="flex flex-col md:flex-row justify-around justify-between items-center text-center w-full font-bebas text-2xl">
        <Link href="/">
          <div
            className={`hover:text-red-400 ${
              router.pathname === "/" ? "text-red-400" : ""
            }`}
          >
            Home
          </div>
        </Link>
        <Link href="/history">
          <div
            className={`hover:text-red-400 ${
              router.pathname === "/history" ? "text-red-400" : ""
            }`}
          >
            History
          </div>
        </Link>
        <Link href="/payload">
          <div
            className={`hover:text-red-400 ${
              router.pathname === "/payload" ? "text-red-400" : ""
            }`}
          >
            Payload
          </div>
        </Link>
        <div className="p-2 flex justify-center items-center gap-2">
          <input
            type="text"
            className="font-sans text-sm p-2 text-black rounded-md"
            name="id"
            placeholder="search history by id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <Link href={`/history/${id}`}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>
        </div>
      </div>
    </header>
  );
};