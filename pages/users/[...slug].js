import React from 'react'

const Albums = ({albums}) => {
    return (
        <div>
            <h1>User Albums</h1>
            <p>
                data json format : {JSON.stringify(albums)} 
            </p>
        </div>
    )
}

export async function getStaticPaths({params}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const users = await res.json()

    const paths = users.map((info) => `/users/${info.id}/albums`)
    return { paths, fallback: false }
}


export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.slug[0]}/albums`)
    const result = await res.json()
    return {
        props: {
            albums: result,
        },
    }
}


export default Albums;