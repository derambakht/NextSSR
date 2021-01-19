import React from 'react'
import Link from 'next/link'

const Post = ({post}) => {
    return (
        <div>
            <h1>Post Details : {post.title}</h1>
            <p>
                {post.body}
            </p>
            <Link href="/posts">back to</Link>
        </div>
    )
}

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
  
    const paths = posts.map((post) => `/posts/${post.id}`)
    return { paths, fallback: false }
  }

  export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const post = await res.json()
  
    return { props: { post } }
  }
  


export default Post;