import Image from "next/image"
import styles from "./card.module.css"
import Link from "next/link";

const Card =() => {
    return(
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                < Image src="/p1.jpeg" alt=""fill/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
            <span className={styles.date}> 11.2.2003</span>
            <span className={styles.category}> CULTURE</span>
            </div>
            <Link href="/">
                <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h1>
            </Link>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Enim necessitatibus similique aspernatur obcaecati veritatis. 
                Aperiam cum porro sequi, totam minima consequuntur, aspernatur 
                deleniti vero repellendus dorales.</p>
            <Link href="/">Read more</Link>
            </div>
            
            </div>
        
    );
};
export default Card;