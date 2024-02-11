'use client'
import React, { useEffect } from 'react'
import styles from '../styles/navbar.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const Navbar = () => {
  const pathname = usePathname()
  return (
    <div className={styles.Navbar}>
      <ul>
        <Link href="/"><li className={pathname==='/'?styles.active:""}>Home</li></Link>
        <Link href="/components/about"><li className={pathname==='/components/about'?styles.active:""}>About</li></Link>
        <Link href="/components/blog"><li className={pathname==='/components/blog'?styles.active:""}>Blog</li></Link>
        <Link href="/components/contact"><li className={pathname==='/components/contact'?styles.active:""}>Contact</li></Link>
      </ul>
    </div>
  )
}

export default Navbar
