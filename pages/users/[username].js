import Link from 'next/link'
const UserInfo = ({ user }) => {
    return (
        <div>
            <h1>User Info</h1>
            <p>
               user json : {JSON.stringify(user)}
            </p>
            <h2>Full Name :{user.name}</h2>
            <h3>User Name :{user.username}</h3>
            <h3>Email :{user.email}</h3>
            <hr />
            <Link href="/users">back to list</Link>
        </div>
    )
}

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()

    const paths = users.map((user) => `/users/${user.username}`)
    return { paths, fallback: false }
}


export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users?username=${params.username}`)
    const result = await res.json()
    return {
        props: {
            user: result[0],
        },
    }
}

export default UserInfo;