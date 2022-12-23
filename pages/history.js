import { History } from "../components/History";
import Head from "next/head";
import { Details } from "../components/Details";
import Image from "next/image";
import { useState } from "react";
import { Pagination } from "../components/Pagination";

export default function HistoryPage({ historyData }) {
  //state to store all the posts for
  const [posts, setPosts] = useState(historyData);

  //state to store the current page
  const [currentPage, setCurrentPage] = useState(1);

  //state to store number of posts to be displayed per page
  const [postsPerPage, setPostsPerPage] = useState(1);

  //get the index of last post to be displayed on the current page
  const indexOfLastPost = postsPerPage * currentPage;

  //get the index of first post to be displayed on the current page
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  //get the posts between the starting index and ending index to be
  // displayed on the page
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //method to change page number
  const paginate = (pageNo) => {
    setCurrentPage(pageNo);
  };

  console.log("current posts", currentPosts);
  return (
    <div className=" h-full flex flex-col justify-center items-center text-white gap-8 ">
      <Head>
        <title>History</title>
      </Head>
      <History currentPosts={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export async function getStaticProps(context) {
  console.log("hitting");
  const res = await fetch("https://api.spacexdata.com/v3/history");

  const data = await res.json();

  //console.log(data);

  return {
    props: {
      historyData: data,
    },
  };
}