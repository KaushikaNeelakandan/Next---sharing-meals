//import classes from './meal-grid.module.css'
import Link from 'next/link'
import classes from './meals-grid.module.css'
import Mealitem from './meal-item.js'
export default function Mealgrid({meals})
{
    return(
        <div>
            Meal grid page
            <ul className={classes.meals}>
                {meals.map((meal)=>(
                <li key={meal.id}>
                    <Mealitem {...meal}/>
                </li>))}
            </ul>
        </div>
    )
}