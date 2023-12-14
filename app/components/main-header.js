
import Link from 'next/link'
import icon from "../favicon.ico"
import Image from 'next/image'
import classes from './main-header.module.css'

import Navlink from './nav-link.js'
export default function MainHeader(){
    
    return(
        <header className={classes.head}>
        <ul className={classes.nav}>
                <li className={classes.list} style={{float:"left"}}>
            <Link href="/" className={classes.link}><Image src={icon} alt="Icon image" width={70} height={70} priority></Image></Link></li>
            <li className={classes.list}>
                <Link href="/" className={classes.link}><h3>NUTRI Foods</h3>
            </Link></li>
            <li className={classes.list}>
                <Navlink href="/meals">Meals</Navlink>
            </li>
            <li className={classes.list}>
                <Navlink href="/community">Community</Navlink>
            </li>
        </ul>

        </header>
    )
}