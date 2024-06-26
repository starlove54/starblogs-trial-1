import React from 'react'
import styles from './cardList.module.css'
import Pagination from '../pagination/Pagination'
import Card from '../card/Card'

const getData = async (page, cat) => {
  const res = await fetch(
    `http://starblogs-trial.in/api/posts?page=${page}&cat=${cat || ''}`,
    {
      cache: 'no-store',
    }
  )
  if (!res.ok) {
    throw new Error('Failed')
  }
  return res.json()
}

const CardList = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat)
  const POSTS_PER_PAGE = 2
  const hasPrevious = POSTS_PER_PAGE * (page - 1) > 0
  const hasNext = POSTS_PER_PAGE * (page - 1) + POSTS_PER_PAGE < count
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
      <Pagination hasPrevious={hasPrevious} hasNext={hasNext} page={page} />
    </div>
  )
}

export default CardList
