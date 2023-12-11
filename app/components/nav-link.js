'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classes from './nav-link.module.css'
export default function Navlink({href,children})
{
    const path=usePathname();
    return(
        
                <Link href={href} className={path.startsWith(href)?classes.active:classes.link}><h3>{children}</h3>
                </Link>
    )
}