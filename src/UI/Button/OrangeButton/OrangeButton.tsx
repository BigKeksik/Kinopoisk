import styles from './OrangeButton.module.css'

type Props = {
    label: string,
    onClick: () => any
}

export default function OrangeButton({label, onClick}: Props) {
    return(
        <div className={styles.container}>
            <div className={styles.button} onClick={onClick}>
                <div className={styles.textContainer}>
                    <p className={styles.text}>
                        {label}
                    </p>
                </div>                
            </div>
        </div>
    )
}