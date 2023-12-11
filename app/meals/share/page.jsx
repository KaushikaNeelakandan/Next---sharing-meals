import React from 'react'
import classes from './page.module.css'
import Imagepicker from './imagepicker.js'
// app\components\meals\image-picker.js
// import Mealgrid from '../components/meals/meals-grid.js'
export default function Sharemealpage(){
  return(
    <div>
    <h1 className={classes.h1}>Share your Favorite meal</h1>
      <main>
        <form className={classes.form}>
          <div>
            <p className={classes.row}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </p>
              <label htmlFor="title">Title</label>
              <input type="text" id="title" name="title" required />

              <label htmlFor="summary">Short Summary</label>
              <input type="text" id="summary" name="summary" required />

              <label htmlFor="instructions">Instructions</label>
              <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
              ></textarea>
              <Imagepicker />
              IMAGE PICKER 
              <button className={classes.button} type="submit">Share Meal</button>

          </div>
        </form>
      </main>
    </div>
  )
}