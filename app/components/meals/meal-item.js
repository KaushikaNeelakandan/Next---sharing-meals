import Link from 'next/link'
import Image from 'next/image'
import classes from "./meal-item.module.css"
export default function Mealitem({title,slug,image,summary,creator}){
    return(
        <article className={classes.meal}>
            <header>
                <Image src={image} alt={title} width={80} height={80} priority />
                <div>
                    <h2>{title}</h2>
                    <p>{creator}</p>
                </div>
            </header>
            <div>
                <p>{summary}</p>
            </div>
            <div>
                <Link className={classes.link} href={`/meals/${slug}`}>View Details</Link>
            </div>
        </article>
    )
}