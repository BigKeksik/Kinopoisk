import { useContext, useEffect, useRef, useState } from 'react'
import styles from './SmallHorizontalSeriesBlock.module.css'
import { IsShowPreviewContext } from '../../../context/IsShowPreviewContext'

type Props = { 
    image: number,
    rating: number,
    leftX: number,
    isHover: boolean,
}

export default function SmallHorizontalSeriesBlock({image, rating, leftX, isHover}: Props) {
    const { setIsShowBlock } = useContext(IsShowPreviewContext)
    const [isLoading, setIsLoading] = useState(false)
    const ref = useRef<any>(null)

    useEffect(() => {
        if (!!ref.current) {
            setIsLoading(true)
        }
    }, [ref.current])

    const getOpacity = () => {
        if (!isHover) {
            return styles.opacity_1
        }
        
        if (!isLoading) {
            return styles.opacity_0
        }

        if (ref.current.offsetLeft + ref.current.offsetWidth < leftX + window.innerWidth && ref.current.offsetLeft > leftX) {
            return styles.opacity_1
        }

        return styles.opacity_4
    }

    const getRatingBlock = () => {
        if (rating > 8.1) {
            return styles.greatRating
        }

        if (rating >= 7) {
            return styles.goodRating
        }

        if (rating >= 5) {
            return styles.defaultRating
        }

        return styles.badRating
    }

    const handleClick = () => {
        setIsShowBlock(true)
    }

    return (
        <div ref={ref} className={[styles.container, getOpacity()].join(' ')} onClick={handleClick}>
            <div className={styles.content} >
                <img src={image === 1 ? require('../../../images/375x234.webp') : require('../../../images/375x234 1.webp')} className={styles.image} />
            
                <div className={[styles.ratingBlock, getRatingBlock()].join(' ')}>
                    {rating > 8.1 &&
                        <div className={styles.leftWreath} />
                    }

                    <p className={styles.ratingText}>
                        {rating.toFixed(1)}
                    </p>

                    {rating > 8.1 &&
                        <div className={styles.rightWreath} />
                    }
                </div>
            </div>
        </div>
    )
}