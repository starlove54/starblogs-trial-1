import React from 'react'
import styles from './singlePage.module.css'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'
import Menu from '@/components/menu/Menu'
import DOMPurify from 'isomorphic-dompurify'
const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Failed')
  }
  return res.json()
}

const SinglePage = async ({ params }) => {
  const { slug } = params
  console.log(slug)
  const data = await getData(slug)

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            {data?.user?.image && (
              <div className={styles.userImageContainer}>
                <Image
                  src={data.user.image}
                  alt="user image"
                  fill
                  className={styles.avatar}
                  sizes="(max-width: 600px) 100vw, 50px"
                />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user?.name}</span>
              <span className={styles.date}>{data?.createdAt}</span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className={styles.imageContainer}>
            <Image
              src={data.img}
              alt=""
              fill
              className={styles.image}
              sizes="(max-width: 600px) 100vw, 50px"
            />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data?.desc),
            }}
          />
          <div className={styles.comment}>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}
export default SinglePage
