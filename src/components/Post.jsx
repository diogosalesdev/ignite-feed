import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/diogosalesdev.png" />
                    <div className={styles.authorInfo}>
                        <strong>Diogo Sales</strong>
                        <span>Web Developer</span>
                    </div>

                    <time title='03 de maio de 2022 às 18:28' dateTime='2022-06-03 18:28:35'>Publicado há 1h</time>
                </div>
            </header>

            <div className={styles.content}>
                <p>
                    <p>Fala galeraa 👋</p>
                    <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                    <p>👉 <a href="">jane.design/doctorcare</a></p>
                    <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
                </p>
            </div>
        </article>
    )
}