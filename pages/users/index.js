import Link from 'next/link'

const index = ({users}) => {
    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map(item => 
                    <li key={item.id}>
                        <Link href={`/users/${item.username}`}>{item.name}</Link>
                          |  
                        <Link href={`/users/${item.id}/albums`}>Albums</Link>
                    </li>
                    )}
            </ul>
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
    return {
      props: {
        users,
      },
      revalidate:1
    }
  }

export default index;
