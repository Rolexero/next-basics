function Post(params) {
    const {post} = params
    return (
        <>
        <h2>{post.id} {post.title}</h2>
        <p>{post.body}</p>
        </>
    )

}

export default Post;


export async function getStaticPaths(){
    return {
      paths: [
        {
          params: { postid: "1" },
        },
        {
          params: { postid: "2" },
        },
        {
          params: { postid: "3" },
        },
      ],
      fallback: false,
    };
}

export async function getStaticProps (context){
    const {params} = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`);

    const data = await response.json()
    return {
        props: {
            post: data
        }
    }
}