import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';
import ImageSlideshow from './components/image-slideshow/image-slideshow.js';
export default function Home() {
  return (
    <div>
      <header className="nextlevelfood">
      
        <ImageSlideshow />
      
      <div>
      <h1 className={styles.title}>NUTRI FOODS FOR FOODIES</h1><br />
      <h3 className={styles.h3}><Link className={styles.link} href="/meals">Explore Meals</Link><br /></h3>
      <h3 className={styles.h3}><Link className={styles.link} href="/meals/share">Taste & share</Link><br /></h3>
      <h3 className={styles.h3}><Link className={styles.link} href="/community">Join the Community</Link><br /></h3>
      </div>
      </header>
      <main>
        <section className='howworks'>
          <h2>How it works</h2>
          <p>Food is the fuel that keeps us running throughout the day, and it also supports the body’s metabolic process and ensures we remain healthy. Children need to understand the importance of food to build healthy eating habits in the long term. They also need to learn that the body needs energy from healthy food to conduct day-to-day activities. </p>
        </section>
        <section className='howworks'>
          <h2>Section 2</h2>
          <p>Food is one of the most basic needs for all human beings, apart from clothes and shelter. It is necessary to give us the energy to function and maintain the bodily process that keeps us alive. To stay healthy, eating various foods that provide essential nutrition for the body is crucial. The body needs carbohydrates, proteins, fats, fiber, vitamins, and minerals to maintain all the organs functioning well. Excess junk deprives us of healthy nutrition, leading to obesity and deficiency diseases. The best diet balances different types of food and minimises junk.</p>
          </section>
      </main>
    </div>  )
}
