import { History } from "../components/History";
import Head from "next/head";
import { Details } from "../components/Details";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Pagination } from "../components/Pagination";
import { Payload } from "../components/Payload";
import {
  addPosts,
  addPostsPerPage,
  addCurrentPage,
  fetchPosts,
  fetchPayload,
} from "../features/postSlice";
import { useDispatch, useSelector } from "react-redux";
import Hotjar from "../components/Hotjar";

export default function HistoryPage() {
  //useDispatch hook is used to call a thunk function or an action
  const dispatch = useDispatch();

  //call a reducer
  dispatch(addPostsPerPage(10));

  ////call a reducer
  //dispatch(addPosts(historyData));

  //useSelector hook is used to access state defined in redux
  //useSelector takes reducer name defined in store as argument
  const { payload, currentPage, postsPerPage } = useSelector(
    (store) => store.post
  );

  //get the index of last post to be displayed on the current page
  const indexOfLastPost = postsPerPage * currentPage;

  //get the index of first post to be displayed on the current page
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  //get the posts between the starting index and ending index to be
  // displayed on the page
  const currentPosts = payload.slice(indexOfFirstPost, indexOfLastPost);

  //method to change page number
  const paginate = (pageNo) => {
    dispatch(addCurrentPage(pageNo));
  };

  useEffect(() => {
    //call thunk function
    dispatch(fetchPayload());
  }, []);

  console.log("current posts", currentPosts);
  return (
    <div className='h-full flex flex-col justify-center items-center text-white gap-8 z-10'>
      <Head>
        <title>Payload</title>
        <Hotjar />
      </Head>
      <Payload currentPosts={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={payload.length}
        paginate={paginate}
      />
    </div>
  );
}

//export async function getStaticProps(context) {
//  console.log("hitting");
//  const res = await fetch("https://api.spacexdata.com/v3/payloads");
//
//  const data = await res.json();
//
//  //console.log(data);
//
//  return {
//    props: {
//      historyData: data,
//    },
//  };
//}
