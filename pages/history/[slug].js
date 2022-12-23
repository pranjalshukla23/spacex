import { Details } from "../../components/Details";

export default function Slug({ post }) {
  return (
    <Details
      key={post.title}
      title={post.title}
      date={post.event_date_utc}
      number={post.flight_number}
      details={post.details}
      link={post.links.wikipedia}
      article={post.links.article}
    />
  );
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const res = await fetch(`https://api.spacexdata.com/v3/history/${slug}`);

  const data = await res.json();

  console.log(data);
  return {
    // Passed to the page component as props
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const res = await fetch("https://api.spacexdata.com/v3/history");

  const data = await res.json();

  const paths = data.map((history) => ({
    params: {
      slug: history.id.toString(),
    },
  }));

  // console.log(paths);

  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  };
}