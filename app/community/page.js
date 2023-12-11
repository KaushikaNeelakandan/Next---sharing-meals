import React from 'react'
import img1 from '../components/image-slideshow/images/6.jpg'
import img2 from '../components/image-slideshow/images/7.jpg'
import Image from 'next/image'
import classes from './page.module.css'
export default function communitypage() {
  return (
    <div className={classes.passion} >
      <header>
        <h1>One shared passion: Food</h1>
        <p>Join our community and share your favorite recipes</p>
      </header>
      <main>
        <h2>Community perks</h2>
        <ul>
          <li>
          <Image src={img1} alt="food image" width={70} height={70}  priority/>
            <p>Find new Friends</p>
          </li>
          <li>
          <Image src={img2} alt="food image" width={70} height={70}  priority/>
            <p>Participate in exclusive events</p>
          </li>
        </ul> 
      </main>
    </div>
  )
}

