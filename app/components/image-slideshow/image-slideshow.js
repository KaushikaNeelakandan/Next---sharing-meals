"use client"
import classes from './image-slideshow.module.css'
import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'
import img4 from './images/4.jpg'
import img5 from './images/5.jpeg'
import React from 'react'
import Image from 'next/image'
import { useEffect } from 'react'
// const images=[
//     {image:img1,alt:"image1"},
//     {image:img2,alt:"image2"},
//     {image:img3,alt:"image3"},
//     {image:img4,alt:"image4"},
//     {image:img5,alt:"image5"},
// ]

// const images=["/images/1.jpg","/images/2.jpg","/images/3.jpg","/images/4.jpg"]
const images=[img1,img2,img3,img4,img5]
export default function ImageSlideshow() 
    {
        const [currentimg,setCurrentimg]=React.useState(0);
        
        useEffect(()=>{
            const interval=setInterval(()=>{
                setCurrentimg(i=>i<images.length-1?i+1:0);
            },3000);
            return ()=>clearInterval(interval);
        },[currentimg]);


        return(

            <Image src={images[currentimg]} alt="slideshow Image" 
                    width={500} height={500} priority
                    />
            // <div className={classes.slideshow}>
            //     {
            //         // <Image src={img2} alt="Icon image" width={200} height={200} priority></Image>
            //         // <Image src={img2} alt="slideshow Image" width={100} height={100} layout='responsive'/>
            //         // images.map( (img,index)=>(
            //         //     <Image key={index}
            //         //     src={img.image}
            //         //     className={index===currentimg? classes.active:""}
            //         //     alt={img.alt}/>
            //         // ))
            //         <Image src={images[currentimg]} alt="slideshow Image" 
            //         width={300} height={300} priority
            //         />
                
            //     }
            // </div>
        )
    }