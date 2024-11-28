
import Image from 'next/image';
import styles from './singlePage.module.css'
import Menu from '@/components/Menu/Menu';
import Comments from '@/components/comments/Comments';

const SinglePage =() =>{
    return(
        <div className={styles.container}>
            <div className={styles.container}>
                <div className={styles.container}> 
                    <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing el</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}> John Doe</span>
                            <span className={styles.date}> 01.01.2024</span>

                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.discription}>
                    <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, <h2>quam nisi magni ea laborum inventore volupta</h2>tum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
                    </p>
                    <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
                    </p>
                    <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
                    </p>
                    <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
                    </p>
                    </div>
                    <div className={styles.comment}>
                        <Comments/>
                    </div>
                </div>
                <Menu/>
            </div>
        </div>
    )
}
export default SinglePage;