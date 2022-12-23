import Image from "next/image";
import { Details } from "./Details";

export const History = ({ currentPosts }) => {
  return (
    <>
      <div className="w-full flex flex-col">
        {currentPosts.map((post) => (
          <Details
            key={post.title}
            title={post.title}
            date={post.event_date_utc}
            number={post.flight_number}
            details={post.details}
            link={post.links.wikipedia}
            article={post.links.article}
          />
        ))}
      </div>
    </>
  );
};