import Link from 'next/link'

const Blog = ({posts}) => {
    return (
        <div>
            <h1>Blog</h1>
            <ul>
            {posts.map(item => 
              <li key={item.id}><Link href={`/posts/${item.id}`}>{item.title}</Link></li>)}
            </ul>
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
    return {
      props: {
        posts,
      },
    }
  }

export default Blog;