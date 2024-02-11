'use client'
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import styles from "./page.module.css";
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [blogs, setblogs] = useState([])

  //Fetcing data
  const fetchData = async () => {
    let data = await fetch("http://localhost:3000/api/blogs")
    let response = await data.json()
    setblogs(response)
  }

  //Runs at every redering 
  useEffect(() => {
    fetchData()
  });
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Image className={styles.image}
          src="/home.jpg"
          width={75}
          height={70}
          priority={true}
          alt="Picture of the author"
        />
        <h1 className={styles.mainheading}>&lt;Hunting Coders/&gt;</h1>
        <p className={styles.description}>A blog for Hunting coder by a Hunting Coder</p>
        <div className={styles.blogcontainer}>
          <div className={styles.subcontainer}>
            <h1>Popular Blogs</h1>
            {
              blogs.map((items) => {
                return <div key={items.title} className={styles.blogitems}>
                  <Link href={`/components/blog/${items.title}`}><h2>{(items.title).replaceAll('-', ' ')}</h2></Link>
                  <p>{(items.metadesc).substr(0, 38)}...</p>
                  <button className={styles.btn}>Read More</button>
                </div>
              })
            }
          </div>
        </div>
      </main>
    </>
  );
}
