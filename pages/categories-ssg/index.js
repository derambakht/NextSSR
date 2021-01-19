import Link from 'next/link'

const index = ({categories}) => {
    return (
        <div>
            <h1>Category List</h1>
            <ul>
                {categories.map(item => 
                    <li key={item.id}>
                      {item.categoryId}-{item.categoryName}
                    </li>
                    )}
            </ul>
        </div>
    )
}

export async function getStaticProps() {
  const res = await fetch('http://apitester.ir/api/Categories')
  const categories = await res.json()
  return {
    props: { categories },
    revalidate: 1, // In seconds
  };
}

export default index;
