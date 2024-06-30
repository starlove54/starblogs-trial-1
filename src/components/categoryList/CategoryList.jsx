import React from 'react'
import styles from './categoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'

const getData = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/categories', {
      cache: 'no-store',
    })
    if (!res.ok) {
      throw new Error('Failed to fetch categories')
    }
    const data = await res.json()
    if (!Array.isArray(data)) {
      throw new Error('API did not return an array')
    }
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    return []
  }
}
const CategoryList = async () => {
  const data = await getData()
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryList
