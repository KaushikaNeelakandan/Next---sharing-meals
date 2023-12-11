'use client' 
import {useRef, useState} from 'react'
import classes from "./image-picker.module.css"
import Image from "next/image"
export default function Imagepicker({label,name}){
    const [pickedimg,setPickedimg]=useState()
    const imageinput=useRef();
    function handleclick(){
        imageinput.current.click()
    }
    function handleImagechange(event)
    {
        const file=event.target.files[0];
        if(!file)
        return;
    const fileReader=new FileReader();
    fileReader.onload=()=>{
        setPickedimg(fileReader.result)
    }
    fileReader.readAsDataURL(file)
    }
    return(
        <div>
            <label htmlFor={name}>{label}</label>
            <div className={classes.hidden}>
                <div>
                    {!pickedimg && <p>No image picked yet</p>}
                    {pickedimg && <Image src={pickedimg} alt="image selected" width={70} height={70} priority />}
                </div>
                <input className={classes.input}
                type="file"
                id={name}
                accept="image/png,image/jpeg"
                name={name}
                ref={imageinput}
                onChange={handleImagechange} />
                <button className={classes.button} type="button" onClick={handleclick}>Pick an image</button>
            </div>
        </div>
    )
}