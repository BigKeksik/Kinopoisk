import styles from './SmallBlackButton.module.css'

export default function SmallBlackButton({children}: any) {
    return(
        <div className={styles.container}>
            <div className={styles.button}>
                <div className={styles.children}>
                    {children}
                </div>
            </div>
        </div>
    )
}