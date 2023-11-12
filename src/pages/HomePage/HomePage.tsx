import { AnimatePresence, motion } from 'framer-motion'
import BaseLine from '../../UI/BaseLine/BaseLine'
import BigBlackButton from '../../UI/Button/BigBlackButton/BigBlackButton'
import OrangeButton from '../../UI/Button/OrangeButton/OrangeButton'
import SmallBlackButton from '../../UI/Button/SmallBlackButton/SmallBlackButton'
import Header from '../../UI/Header/Header'
import SmallBlockSection from '../../UI/Section/SmallBlockSection/SmallBlockSection'
import SmallHorizontalSeriesBlock from '../../UI/SeriesBlock/SmallHorizontalSeriesBlock/SmallHorizontalSeriesBlock'
import styles from './HomePage.module.css'
import { useEffect, useState } from 'react'

export default function HomePage() {
    const [isShowTrailer, setIsShowTrailer] = useState(false)
    const [isShowSecondTitleImage, setIsShowSecondTitleImage] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsShowTrailer(true)
        }, 3000)

        return () => {
            clearTimeout(timeout)
        }
    }, [])

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (isShowTrailer) {
                setIsShowSecondTitleImage(true)
            }
        }, 3000)
    }, [isShowTrailer])

    return (
        <div className={styles.container}>
            <Header/>

            <div className={styles.heading}>
                <div className={styles.backgroundImage} />

                <AnimatePresence>
                    {isShowTrailer &&
                        <motion.div 
                            key={'trailer'}
                            className={styles.backgroundVideo} 
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}   
                            exit={{opacity: 0}} 
                            transition={{
                                duration: .2,
                            }}
                        >
                            <video src={require('../../video/trailer1.mp4')} className={styles.video} autoPlay muted onEnded={() => {setIsShowTrailer(false); setIsShowSecondTitleImage(false)}}/>
                        </motion.div>
                    }
                </AnimatePresence>
                

                <div className={styles.backgroundGradient} />
                
                {!isShowSecondTitleImage &&
                <div className={styles.trailerInfoBlock}>
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{
                            duration: .4,
                            delay: .5
                        }}
                        
                        className={styles.infoBlock}
                    >
                        <motion.div
                            initial={{y: -20}}
                            animate={{y: 0}}
                            transition={{
                                duration: .4,
                                delay: .5
                            }}
                            className={styles.titleBlock}
                        >
                            <img src={require('../../images/title.webp')} className={styles.titleImage} />
                            
                        </motion.div>

                        <motion.div 
                            initial={{y: 20}}
                            animate={{y: 0}}
                            transition={{
                                duration: .4,
                                delay: .5
                            }}
                            className={styles.descriptionBlock}
                        >
                            <p className={styles.description}>
                                Как нерду стать автором мультика на стриминге? Убойное интервью с Егором Лоскутовым и Димой Сыендуком
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
                }
                

                {isShowSecondTitleImage &&
                    <motion.div 
                        className={styles.secondTitleBlock}   
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{
                            duration: .2,
                        }}
                    >
                        <img src={require('../../images/title.webp')} style={{width: 400}} />
                    </motion.div>
                }
                

                <motion.div 
                    className={styles.buttonBlock}
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{
                        duration: .2,
                        delay: 1.5,
                    }}
                >
                    <OrangeButton
                        label='Смотреть сериал'
                        onClick={() => {console.log(123)}}
                    />
                    
                    <BigBlackButton>
                        <p>
                            О сериале
                        </p>
                    </BigBlackButton>

                    <SmallBlackButton onClick={() => console.log('кликнул')}>
                        <svg width="36px" height="36px" viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" data-tid="Bookmark">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M28.05 13.5V9.3h4.575V5.7H28.05V1.125h-3.6V5.7h-4.2v3.6h4.2v4.2h3.6ZM11.475 5.625h4.275v3.6h-4.275v16.353l4.868-2.524 1.657-.86 1.657.86 4.868 2.524V18h3.6v13.5l-3.6-1.867L18 26.25l-6.525 3.383-3.6 1.867V5.625h3.6Z"></path>
                        </svg>
                    </SmallBlackButton>
                    
                    <SmallBlackButton>
                        <svg width="2.4rem" height="2.4rem" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" data-tid="Forbidden">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6 12a7.6 7.6 0 1 1-15.2 0 7.6 7.6 0 0 1 15.2 0Zm2.4 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM7.5 13.8h9v-3.6h-9v3.6Z"></path>
                        </svg>
                    </SmallBlackButton>
                </motion.div>
            </div>

            <div className={styles.content}> 
                {/* <div className={styles.continueBlock}>
                    <SmallHorizontalSeriesBlock 
                        image={1}
                        rating={7.2}
                    />
                    <SmallHorizontalSeriesBlock 
                        image={0}
                        rating={8.8}
                    />
                    <SmallHorizontalSeriesBlock 
                        image={0}
                        rating={8.8}
                    />
                    <SmallHorizontalSeriesBlock 
                        image={0}
                        rating={8.8}
                    />
                </div> */}

                {/* <BaseLine
                    label='Рекомендуем сериалы'
                /> */}

                <SmallBlockSection />
                <SmallBlockSection />
            </div>

            <footer className={styles.footerContainer} data-tid="Footer">
                <div className={styles.footerContent}>
                    <p className={styles.text}>
                        Footer
                    </p>
                </div>
            </footer>
            
        </div>
    )
}