import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({ key, item }) => {
  return (
    <div key={key} className={styles.container}>
      {item.img && (
        <div className={styles.imageContainer}>
          <Image
            src={item.img}
            alt=""
            fill
            className={styles.image}
            sizes="(max-width: 600px) 100vw, 50px"
          />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)} -{' '}
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
        <div
          className={styles.desc}
          dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 500) }}
        />
        <Link className={styles.link} href={`/posts/${item.slug}`}>
          Read More
        </Link>
      </div>
    </div>
  )
}
export default Card
