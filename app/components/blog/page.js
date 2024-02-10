"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import styles from '../../styles/blog.module.css'
import Link from 'next/link'


// Step 1:Fetching data from the blogpost
// Step 2: Display and Populate them
const blog = () => {
  //Fetching data and stores it in a state
  const [blogdesc, setblogdesc] = useState([])

  //fetching data
  const fetchdata = async () => {
    let data = await fetch("http://localhost:3000/api/blogs")
    let response = await data.json()
    setblogdesc(response)
  }

  useEffect(() => {
    //Runs on every render
    fetchdata()
  });
  return (
    <>
      <Navbar />
      <div className={styles.blogcontainer}>
        <div className={styles.subcontainer}>
          <h1>All Blogs</h1>
          {
            blogdesc.map((itr) => {
              return <div key={itr.title} className={styles.blogitems}>
                <Link href={`/components/blog/${itr.title}`}><h2>{(itr.title).replaceAll('-', ' ')}
                </h2></Link>
                <p>{(itr.content).substr(0, 140)}...</p>
              </div>
            })
          }
        </div>
      </div>
    </>
  )
}

export default blog
