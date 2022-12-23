import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [id, setId] = useState("");
  return (
    <header className="flex flex-col md:flex-row bg-black p-2 text-white flex items-center text-center mb-24 z-50">
      <Image src="/images/logo.jpg" alt="logo" width={100} height={100}></Image>

      <div className="flex flex-col md:flex-row justify-around justify-between items-center text-center w-full font-bebas text-2xl">
        <Link href="/">
          <div>Home</div>
        </Link>
        <Link href="/history">
          <div>History</div>
        </Link>
        <Link href="/payload">
          <div>Payload</div>
        </Link>
        <div className="p-2 flex justify-center items-center gap-2">
          <input
            type="text"
            className="font-sans text-sm p-2 text-black rounded-md"
            name="id"
            placeholder="search history by id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
          <Link href={`/history/${id}`}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>
        </div>
      </div>
    </header>
  );
};