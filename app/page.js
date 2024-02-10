'use client'
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import styles from "./page.module.css";
import Image from 'next/image';
import Link from 'next/link'

export default function Home() {
  const [blogs, setblogs] = useState([])

  //Fetcing data
  const fetchData = async () => {
    let data = await fetch("http://localhost:3000/api/blogs")
    let response = await data.json()
    setblogs(response)
    console.log("Fetching data")
    console.log(blogs)
  }

  //Runs at every redering 
  useEffect(() => {
    fetchData()
  });
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.mainheading}>Hunting Coders</h1>
        <Image className={styles.image}
          src="/home.jpg"
          width={237}
          height={158}
          priority={true}
          alt="Picture of the author"
        />
        <p className={styles.description}>A blog for Hunting coder by a Hunting Coder</p>
        <div className={styles.blogcontainer}>
          <div className={styles.subcontainer}>
            <h1>Popular Blogs</h1>
            {
              blogs.map((items) => {
                return <div key={items.title} className={styles.blogitems}>
                  <Link href={`/components/blog/${items.title}`}><h2>{(items.title).replaceAll('-', ' ')}</h2></Link>
                  <p>{(items.content).substr(0, 38)}...</p>
                </div>
              })
            }
          </div>
        </div>
      </main>
    </>
  );
}
