import styles from './Post.module.css';

export function Post (){
    return (
        
        <article className={styles.Post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/marcelodscosta.png" />
                    <div className={styles.authorInfo}>
                        <strong>Marcelo Costa</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='11 de maio de 2022' dateTime='2022-05-11 08:13:30'>Publicado a 1h</time>
            </header>

        <div className={styles.content}>
            <p>Fala galeraa 👋</p>

            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

            <p>👉 jane.design/doctorcare</p>

            <p>#novoprojeto #nlw #rocketseat</p>
        </div>
        </article>
    );
}