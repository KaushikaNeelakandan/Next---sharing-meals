//'use client'
import React,{ Suspense } from 'react'
import Link from 'next/link'
import classes from './page.module.css'
import Mealgrid from '../components/meals/meals-grid.js'
import { getMeals } from '@/lib/meals'
//import Loading from "../loading.js"
async function Fetchmeals(){
  const meals=await getMeals();
  return <Mealgrid meals={meals} />
}

export default function Mealspage() {
  return (
    <div>
      <header>
        <h1>Delicious meals, created <span className={classes.highlight}>by You</span></h1>
        <p>Choose your favorite recipe and cook it yourself.Its easy and fun</p>
        <p><Link href="/meals/share" className={classes.link}>Share your Favorite recipe</Link></p>
      </header>
      <main>
        <Suspense fallback={<p className={classes.loading}>loading...</p>}>
          <Fetchmeals />
        </Suspense>
      </main>
    </div>
  )
}

