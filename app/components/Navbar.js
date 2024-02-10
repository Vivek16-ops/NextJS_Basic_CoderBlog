import React from 'react'
import styles from '../styles/navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <ul>
        <Link href="/"><li>Home</li></Link>
        <Link href="/components/about"><li>About</li></Link>
        <Link href="/components/blog"><li>Blog</li></Link>
        <Link href="/components/contact"><li>Contact</li></Link>
      </ul>
    </div>
  )
}

export default Navbar
