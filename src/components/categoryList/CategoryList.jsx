'use client'
import React, { useEffect, useState } from 'react'
import styles from './categoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'

// const getData = async () => {
//   const res = await fetch('http://localhost:3000/api/categories', {
//     cache: 'no-store',
//   })
//   if (!res.ok) {
//     throw new Error('Failed')
//   }
//   return res.json()
// }

const CategoryList = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch data using useEffect hook
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/categories', {
          cache: 'no-store',
        })
        if (!res.ok) {
          throw new Error('Failed to fetch categories')
        }
        const result = await res.json()
        // Check if result is an array
        if (Array.isArray(result)) {
          setData(result)
        } else {
          throw new Error('API response is not an array')
        }
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    getData()
  }, [])

  // Render loading state
  if (loading) {
    return <p>Loading...</p>
  }

  // Render error state
  if (error) {
    return <p>Error: {error}</p>
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            href="/blog?cat=style"
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
