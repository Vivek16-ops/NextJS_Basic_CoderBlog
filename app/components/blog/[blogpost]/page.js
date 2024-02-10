'use client'
import { usePathname } from 'next/navigation'
import Navbar from '../../Navbar';
import styles from '../../../styles/blogpost.module.css'
import { useState, useEffect } from 'react';


//Step 1:Fetching the data as per a slug
//Step 2:Display and populate them in a page
export default function blogpost() {
    // Creating custom slug which gives url queries 
    const pathname = usePathname()
    const slug = pathname.split('/blog/')[1].replaceAll('%20', ' ')
    const [Filedetail, setFiledetail] = useState({ title: "", content: "", author: "" })

    // Fetching data from API 
    const fetchData = async () => {
        let data = await fetch(`http://localhost:3000/api/getblogs?query=${slug}`)
        let response = await data.json()
        const { title, content, author } = response
        setFiledetail({ title: title, content: content, author: author })
    }

    useEffect(() => {
        //Runs on every render
        fetchData()
    });

    function createMarkup(content) {
        return { __html: content };
    }

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <h2>{(Filedetail.title).replaceAll('-', ' ')}</h2>
                {<p dangerouslySetInnerHTML={createMarkup(Filedetail.content)}></p>}
                <br />
                <span>Author: {Filedetail.author}</span>
            </div>
        </>
    );
}