'use client'
import { useFormStatus } from "react-dom"
import classes from './page.module.css'
export default function Mealformsubmit(){
    const {pending}=useFormStatus();
    return(
         <button disabled={pending} className={classes.button}>
            {pending?'submitting...':'share meal'}
         </button>
    )
}