import Link from "next/link"

function PostLists({ posts }) {
  return (     
    <>
    <h2>List of Posts</h2>
    {posts.map((post, id) => {
    return (
      <div key={id}>
        <Link href={`posts/${post.id}`} passHref>
          <h2>
            {post.id} {post.title}
          </h2>
        </Link>
        <hr />
      </div>
    );
  })}
    </>
  )
}

export default PostLists

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
  };
}
