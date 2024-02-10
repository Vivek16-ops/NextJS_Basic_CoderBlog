import React from 'react'
import Navbar from '../Navbar'
import styles from '../../styles/about.module.css'

const about = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.subcontainer}>
          <h2>Introduction</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fugiat provident veritatis! Deleniti doloribus reiciendis iure consectetur quis neque magni error quisquam tenetur illo quam quasi, est cum vitae. Repellendus?</p>
          <h2>Services Offered</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur natus dicta unde, optio quisquam iusto fuga ex perspiciatis molestias facilis eos placeat laboriosam nisi nemo perferendis impedit voluptas voluptatem consequuntur.</p>
          <p>List of following Sevices</p>
          <ul><li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
            <li>Service 4</li>
            <li>Service 5</li>
            <li>Service 6</li></ul>
          <h2>Contact</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo laboriosam nam amet ex obcaecati laborum corrupti nobis reiciendis necessitatibus molestiae.</p>
        </div>
      </div>
    </>
  )
}

export default about
