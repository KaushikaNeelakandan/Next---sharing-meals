'use client'
import { useFormState } from 'react-dom'
import React from 'react'
import classes from './page.module.css'
import Imagepicker from './imagepicker.js'
import {sharemeal } from '@/lib/actions'
import Mealformsubmit from "./meal-form-submit.js"
//Mealformsubmit
export default function Sharemealpage(){
   const [state,formAction]=useFormState(sharemeal,{message:null}); 
   
   return(
    <div>
    <h1 className={classes.h1}>Share your Favorite meal</h1>
      <main>
        <form className={classes.form} action={formAction}>
          <div>
            <p className={classes.row}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </p>
              <label htmlFor="title">Title</label>
              <input type="text" id="title" name="title"  />

              <label htmlFor="summary">Short Summary</label>
              <input type="text" id="summary" name="summary"  />

              <label htmlFor="instructions">Instructions</label>
              <textarea
              id="instructions"
              name="instructions"
              rows="10"
              
              ></textarea>
              <Imagepicker label="your image" name="image" />
               
              {state.message && <p>{state.message}</p>}
              <p>
              <Mealformsubmit />
              </p>

          </div>
        </form>
      </main>
    </div>
  )
}