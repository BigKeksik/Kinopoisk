import styles from './Header.module.css'

export default function Header() {
    return(
        <div className={styles.container}>
            <div className={styles.contextMenu}>
                <img src={require('../../images/burger.svg').default} className={styles.burger} />

                <img src={require('../../images/logo.svg').default} className={styles.logo} />
            </div>

            <div className={styles.buttonBlock}>
                <nav>
                    <ul className={styles.navMenu}>
                        <li className={styles.button}>
                            <p className={styles.buttonText}>
                                Главное
                            </p>
                        </li>

                        <li className={styles.button}>
                            <p className={styles.buttonText}>
                                Магазин
                            </p>
                        </li>

                        <li className={styles.button}>
                            <p className={styles.buttonText}>
                                Моё
                            </p>
                        </li>

                        <li className={styles.button}>
                            <p className={styles.buttonText}>
                                Подписки
                            </p>
                        </li>

                        <li className={styles.button}>
                            <p className={styles.buttonText}>
                                Каналы
                            </p>
                        </li>

                        <li className={styles.button}>
                            <p className={styles.buttonText}>
                                Спорт
                            </p>
                        </li>
                    </ul>
                </nav>

                <svg width="2.4rem" height="2.4rem" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" className={styles.search} data-tid="Search">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4 11a5.9 5.9 0 1 1-11.8 0 5.9 5.9 0 0 1 11.8 0Zm-1.044 6.977a8.5 8.5 0 1 1 2.121-2.121l4.084 4.083-2.122 2.122-4.083-4.084Z"/>
                </svg>
            </div>

            <div className={styles.profileBlock}>
                <div className={styles.tvBlock}>
                    <svg width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.computer} >
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22 4H2v11.5h20V4ZM7 19.95h10v-2.4H7v2.4Z"/>
                    </svg>

                    <p className={styles.text}>
                        Установить на ТВ
                    </p>
                </div>

                <div className={styles.childrenBlock}>
                    <div className={styles.childrenImage}/>

                    <p className={styles.text}>
                        Дети
                    </p>
                </div>

                <div className={styles.profileContainer}>
                    <div className={styles.profileImage}>

                    </div>
                </div>
            </div>
        </div>
    )
}