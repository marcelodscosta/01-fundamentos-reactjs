import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import styles from './Comment.module.css';

export function Comment({ content, deleteComment }) {

    const [like, setLike] = useState(0);

    const handleLike = () => {
        setLike((state) => {
            return state + 1;
        });
    }

    const handleDeleteComment = () => {
        deleteComment(content)
    }

    return (
        <div className={styles.comment}>
            <img src="https://avatars.githubusercontent.com/u/81534727?v=4" />

            <div className={styles.commentBox}>

                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Marcelo Costa</strong>
                            <time title='13 de março as 8:13' dateTime='2023-03-13 '>Cerca de 1h atrás</time>

                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLike}>
                        <ThumbsUp />
                        {`Aplaudir - `} <span>{like}</span>
                    </button>
                </footer>
            </div>

        </div>
    );
}