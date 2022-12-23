import Image from "next/image";
import { Details } from "./Details";
import { Stats } from "./Stats";

export const Payload = ({ currentPosts }) => {
  return (
    <>
      <div className="w-full flex flex-col">
        {currentPosts.map((post) => (
          <Stats
            key={post.payload_id}
            id={post.payload_id}
            nationality={post.nationality}
            manufacturer={post.manufacturer}
            type={post.payload_type}
            mass_kg={post.payload_mass_kg}
            mass_lbs={post.payload_mass_lbs}
            orbit={post.orbit}
            customers={post.customers}
          />
        ))}
      </div>
    </>
  );
};