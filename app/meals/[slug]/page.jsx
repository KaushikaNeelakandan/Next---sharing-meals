import React from 'react'
import {getmeal} from "@/lib/meals"
import Image from "next/image"
import {notFound} from 'next/navigation'
export default function MealDetailspage({params})
{
  const meal=getmeal(params.slug)
  if(!meal)
  {
    notFound();
  }
  meal.instructions=meal.instructions.replace(/\n/g,'<br />')
  return(
    <div style={{margin:50}}>
      <header>
        <Image src={meal.image} alt={meal.title} width={200} height={200} priority/>
        <h1>{meal.title}</h1>
        <p>Created by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a></p>
        <p>{meal.summary}</p>
      </header>
      <main>
        <p dangerouslySetInnerHTML={{
          __html:meal.instructions,
        }}></p>
      </main>
    </div>
  )
}