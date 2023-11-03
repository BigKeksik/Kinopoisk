import styles from './BigBlackButton.module.css'

export default function BigBlackButton({children}: any) {
    return(
        <div className={styles.container}>
            <div className={styles.button}>
                <div>
                    { children }
                </div>                
            </div>
        </div>
    )
}