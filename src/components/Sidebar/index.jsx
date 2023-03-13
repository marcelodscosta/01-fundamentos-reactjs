import { Pencil } from 'phosphor-react';
import styles from './Sidebar.module.css';

export function Sidebar (){
    return (
        <aside className={styles.sidebar}>
            <img
            className={styles.cover} 
            src="https://images.unsplash.com/photo-1678621359905-f479e9d6258b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=50" 
            />
            
            <div className={styles.profile}>
                <img
                className={styles.avatar} 
                src="https://avatars.githubusercontent.com/u/81534727?v=4"  />
                <strong>Marcelo Costa</strong>
                <span>Web developer</span>
            </div>

            <footer>
                <a href="#">
                    <Pencil />
                    Editar seu perfil
                </a>
            </footer>

        </aside>
    );
}