import Link from 'next/link'

const index = ({categories}) => {
    return (
        <div>
            <h1>Category List with getServerSideProps</h1>
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

export async function getServerSideProps() {
  const res = await fetch('http://apitester.ir/api/Categories')
  const categories = await res.json()
  return {
    props: { categories },
  };
}

export default index;
