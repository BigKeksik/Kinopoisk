import { useEffect, useRef, useState } from 'react'
import SmallHorizontalSeriesBlock from '../SeriesBlock/SmallHorizontalSeriesBlock/SmallHorizontalSeriesBlock'
import styles from './BaseLine.module.css'

type Props = {
    label: string,
}

export default function BaseLine({label}: Props) {
    const [leftX, setLeftX] = useState(0)
    const [isHover, setIsHover] = useState(false)
    const ref = useRef<any>(null)

    function handleRightClick() {
        console.log(
            '%c Hello, world!',
            'color: red; background: white; border-radius: 10px; font-size: 30px;'
        )

        if (!!ref.current) {
            setLeftX(Math.min(ref.current.scrollWidth - window.innerWidth, ref.current.scrollLeft + ref.current.querySelectorAll('li')[0].offsetWidth * Math.round(window.innerWidth / ref.current.querySelectorAll('li')[0].offsetWidth)))

            ref.current.scrollTo({
                top: 0,
                left: Math.min(ref.current.scrollWidth - window.innerWidth, ref.current.scrollLeft + ref.current.querySelectorAll('li')[0].offsetWidth * Math.round(window.innerWidth / ref.current.querySelectorAll('li')[0].offsetWidth)),
                behavior: 'smooth'
            })
        }        
    } 
    
    function handleLeftClick() {
        if (!!ref.current) {
            setLeftX(Math.max(0, ref.current.scrollLeft - ref.current.querySelectorAll('li')[0].offsetWidth * Math.round(window.innerWidth / ref.current.querySelectorAll('li')[0].offsetWidth)))
            
            ref.current.scrollTo({
                top: 0,
                left: Math.max(0, ref.current.scrollLeft - ref.current.querySelectorAll('li')[0].offsetWidth * Math.round(window.innerWidth / ref.current.querySelectorAll('li')[0].offsetWidth)),
                behavior: 'smooth'
            })
        }
    }

    return(
        <div className={styles.container}>
            <header className={styles.header}>
                <a className={styles.subtitleLink}>
                    <h2 className={styles.subtitle}>
                        {label}
                    </h2>

                    <svg className={styles.subtitleLinkArrow} width="2rem" height="2rem" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-tid="Angle">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3 9.988 5.558 3.53l1.384-1.444 7.5 7.186.758.727-.763.722-7.5 7.091-1.374-1.453 6.737-6.37Z" fill='white'></path>
                    </svg>
                </a>
            </header>

            <div className={styles.content} onMouseOver={() => {setIsHover(true)}} onMouseOut={() => {setIsHover(false)}}>
                <ul ref={ref} className={styles.list}>
                    <li className={styles.element}>
                        <SmallHorizontalSeriesBlock 
                            image={0}
                            rating={8.2}
                            leftX={leftX}
                            isHover={isHover}
                        />
                    </li>
                    <li className={styles.element}>
                        <SmallHorizontalSeriesBlock 
                            image={0}
                            rating={7.2}
                            leftX={leftX}
                            isHover={isHover}
                        />
                    </li>
                    <li className={styles.element}>
                        <SmallHorizontalSeriesBlock 
                            image={0}
                            rating={5.2}
                            leftX={leftX}
                            isHover={isHover}
                        />
                    </li>
                    <li className={styles.element}>
                        <SmallHorizontalSeriesBlock 
                            image={0}
                            rating={3}
                            leftX={leftX}
                            isHover={isHover}
                        />
                    </li>
                    <li className={styles.element}>
                        <SmallHorizontalSeriesBlock 
                            image={0}
                            rating={7.2}
                            leftX={leftX}
                            isHover={isHover}
                        />
                    </li>
                    <li className={styles.element}>
                        <SmallHorizontalSeriesBlock 
                            image={0}
                            rating={7.2}
                            leftX={leftX}
                            isHover={isHover}
                        />
                    </li>
                    <li className={styles.element}>
                        <SmallHorizontalSeriesBlock 
                            image={0}
                            rating={7.2}
                            leftX={leftX}
                            isHover={isHover}
                        />
                    </li>
                    <li className={styles.element}>
                        <SmallHorizontalSeriesBlock 
                            image={0}
                            rating={7.2}
                            leftX={leftX}
                            isHover={isHover}
                        />
                    </li>
                    <li className={styles.element}>
                        <SmallHorizontalSeriesBlock 
                            image={0}
                            rating={7.2}
                            leftX={leftX}
                            isHover={isHover}
                        />
                    </li>
                    <li className={styles.element}>
                        <SmallHorizontalSeriesBlock 
                            image={0}
                            rating={7.2}
                            leftX={leftX}
                            isHover={isHover}
                        />
                    </li>
                    <li className={styles.element}>
                        <SmallHorizontalSeriesBlock 
                            image={0}
                            rating={7.2}
                            leftX={leftX}
                            isHover={isHover}
                        />
                    </li>
                </ul>
                {leftX > 0 &&
                    <button className={styles.buttonLeft} onClick={handleLeftClick}>
                        <svg width="17" height="36" viewBox="0 0 17 36" fill="none" xmlns="http://www.w3.org/2000/svg" data-tid="Arrow">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5001 17.9998L16.6001 3.1998L13.4001 0.799805L0.500097 17.9998L13.4001 35.1998L16.6001 32.7998L5.5001 17.9998Z" fill="white"></path>
                        </svg>
                    </button>
                }

                {leftX + window.innerWidth < ref?.current?.scrollWidth &&
                    <button className={styles.buttonRight} onClick={handleRightClick}>
                        <svg width="17" height="36" viewBox="0 0 17 36" style={{transform: 'rotate(180deg)'}} fill="none" xmlns="http://www.w3.org/2000/svg" data-tid="Arrow">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5001 17.9998L16.6001 3.1998L13.4001 0.799805L0.500097 17.9998L13.4001 35.1998L16.6001 32.7998L5.5001 17.9998Z" fill="white"></path>
                        </svg>
                    </button>
                }
            </div>
        </div>
    )
}