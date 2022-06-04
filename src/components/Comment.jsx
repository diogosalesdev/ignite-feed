import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/diogosalesdev.png" alt="" />

            <div className={styles.commentBox}>
                <div className={commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diogo Sales</strong>
                            <time title='03 de maio de 2022 às 18:28' dateTime='2022-06-03 18:28:35'>Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}