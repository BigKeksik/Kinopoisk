import styles from './SmallBlackButton.module.css'

export default function SmallBlackButton({children, ...props}: any) {
    return(
        <div className={styles.container} {...props}>
            <div className={styles.button}>
                <div className={styles.children}>
                    {children}
                </div>
            </div>
        </div>
    )
}