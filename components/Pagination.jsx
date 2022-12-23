export const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  console.log("posts per page: " + postsPerPage);
  console.log("total posts: " + totalPosts);

  //get total number of pages for page navigator
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="hidden md:block text-white">
      <ul className="flex">
        {pageNumbers.map((pageNo) => (
          <li key={pageNo} className="rounded-md bg-gray-800 mx-1 p-4 text-xs">
            <a href="#" className="page-link" onClick={() => paginate(pageNo)}>
              {pageNo}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};