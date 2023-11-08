import { useContext, useEffect, useState } from 'react'
import BaseLine from '../../BaseLine/BaseLine'
import BigBlackButton from '../../Button/BigBlackButton/BigBlackButton'
import OrangeButton from '../../Button/OrangeButton/OrangeButton'
import SmallBlackButton from '../../Button/SmallBlackButton/SmallBlackButton'
import styles from './SmallBlockSection.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { IsShowPreviewContext } from '../../../context/IsShowPreviewContext'

export default function SmallBlockSection() {
    const [isShowImage, setIsShowImage] = useState(true)
    const [isShowVideo, setIsShowVideo] = useState(false)
    const [isShowBlock, setIsShowBlock] = useState(false)
    const [isShowPreview, setIsShowPreview] = useState(false)
    const [isPreviewOpen, setIsPreviewOpen] = useState(false)
    const [isMuteSound, setIsMuteSound] = useState(true)
    const show = useContext(IsShowPreviewContext)

    useEffect(() => {
        console.log(isShowImage)
        if (isShowBlock) {
            setIsPreviewOpen(true)
        }
        
        const imageTimeout = setTimeout(() => {
            if (isShowBlock) {
                setIsShowImage(false)
            }
        }, 2000)

        const videoTimeout = setTimeout(() => {
            if (isShowBlock) {
                setIsShowVideo(true)
            }
        }, 4000)

        return () => {
            clearTimeout(imageTimeout)
            clearTimeout(videoTimeout)
        }
    }, [isShowBlock])

    useEffect(() => {
        if (!isShowVideo) {
            setTimeout(() => {
                setIsShowImage(true)
            }, 1000)
        }
    }, [isShowVideo])

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isShowPreview) {
                setIsShowBlock(false)
            }
        }, 500)

        return () => {
            clearTimeout(timeout)
        }
    }, [isShowPreview])

    const handleClose = () => {
        setIsPreviewOpen(false)
        setIsShowPreview(false)
        setIsShowVideo(false)
        setIsShowImage(true)
    }

    const handleAnimation = () => {
        if(isPreviewOpen) {
            setIsShowPreview(true)
        }
    }

    return(
        <IsShowPreviewContext.Provider value={{isShowBlock, setIsShowBlock}} >
            <section className={styles.container}>
                <BaseLine
                    label='Рекомендуем сериалы'
                />

                <AnimatePresence>
                    { isShowBlock &&
                    <motion.div
                        key={'test'}
                        initial={{ height: 0 }}
                        animate={{ height: 660 }}
                        exit={{height: 0}}
                        transition={{
                            duration: .5,
                            delay: 0,
                        }}
                        onAnimationComplete={handleAnimation}
                    >
                        { isShowPreview &&            
                        <motion.div 
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{
                                duration: .5,
                                delay: 0   
                            }}
                            className={styles.previewContainer}
                        >
                            <div className={styles.background}>
                                {/* <div className={styles.backgroundColor} /> */}

                                <div className={styles.backgroundGradient} />

                                <div className={[styles.backgroundImage, !isShowImage ? styles.opacity_0 : styles.opacity_1].join(' ')} >
                                    <img src={require('../../../images/2016x1134.webp')} className={styles.image} />
                                </div>

                                <div className={styles.backgroundVideo}>
                                    <div className={[styles.setVideo, isShowVideo ? styles.opacity_1: styles.opacity_0].join(' ')} >
                                        <video className={styles.video} src={require('../../../video/video3.mp4')} autoPlay muted={isMuteSound ? true : false} onEnded={() => setIsShowVideo(false)} />

                                        <div className={styles.muteButton}>
                                            <SmallBlackButton onClick={() => {setIsMuteSound(!isMuteSound)}}>
                                                {isMuteSound && 
                                                    <svg width="2.4rem" height="2.4rem" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-label="Включить звук" data-tid="VolumeMuted">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 8.5 12.5 4v16L6 15.5H2.5v-7H6Zm10.393 7.493 2.296-2.296 2.296 2.296 1.698-1.697L20.386 12l2.297-2.296-1.698-1.697-2.296 2.296-2.296-2.296-1.697 1.697L16.992 12l-2.296 2.296 1.697 1.697Z" fill="#fff"></path>
                                                    </svg>
                                                }
                                                
                                                {!isMuteSound && 
                                                    <svg width="2.4rem" height="2.4rem" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-label="Выключить звук" data-tid="VolumeUnmuted">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24 12a11 11 0 0 1-4.219 8.672l-1.583-1.81A8.605 8.605 0 0 0 21.6 12c0-2.8-1.335-5.287-3.402-6.861l1.583-1.81A11 11 0 0 1 24 12Zm-4.722 0a6.288 6.288 0 0 1-2.614 5.108l-1.592-1.819a3.893 3.893 0 0 0 1.806-3.288c0-1.383-.72-2.597-1.806-3.289l1.592-1.82a6.288 6.288 0 0 1 2.614 5.109ZM6 8.5 12.5 4v16L6 15.5H2.5v-7H6Z" fill="#fff"></path>
                                                    </svg>
                                                }
                                                
                                            </SmallBlackButton>
                                        </div>
                                        
                                    </div>

                                    <div className={styles.noneVideo} />
                                    
                                </div>
                            </div>

                            <div className={styles.previewContent}>
                                <div className={styles.previewButtonBlock}>
                                    <button className={[styles.previewButton, styles.previewActiveButton].join(' ')} >
                                        <p className={styles.textButton}>
                                            О сериале
                                        </p>
                                    </button>

                                    <button className={[styles.previewButton, styles.previewInactiveButton].join(' ')} >
                                        <p className={styles.textButton}>
                                            Сезоны и серии
                                        </p>
                                    </button>

                                    <button className={[styles.previewButton, styles.previewInactiveButton].join(' ')} >
                                        <p className={styles.textButton}>
                                            Детали
                                        </p>
                                    </button>
                                </div>
                                
                                <div className={styles.previewInfoBlock}>
                                    <div className={styles.previewImageBlock}>
                                        <img className={styles.previewImage} src={require('../../../images/960x540.webp')}/>
                                    </div>

                                    <div className={styles.previewShortInfoBlock}>
                                        <div className={styles.previewShortInfoFirstBlock}>
                                            <p className={styles.ratingText}>
                                                {'5.9'}
                                            </p>
                                            
                                            <p className={styles.text}>
                                                {'141K'}
                                            </p>

                                            <p className={styles.text}>
                                                {'с 2007, комедия, семейный'}
                                            </p>

                                            <p className={styles.text}>
                                                {'20 сезонов'}
                                            </p>

                                            <p className={styles.text}>
                                                {'Россия'}
                                            </p>

                                            <p className={styles.text}>
                                                {'18+'}
                                            </p>
                                        </div>
                                        
                                        <div className={styles.previewShortInfoAudioBlock}>
                                            <div className={styles.voiceImage}>
                                                <svg width="1.75rem" height="1.33rem" viewBox="0 0 25 19" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-label="Аудиодорожки" data-tid="Audio">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24 9.5a11 11 0 0 1-4.219 8.67l-1.583-1.81A8.605 8.605 0 0 0 21.6 9.5c0-2.8-1.335-5.287-3.402-6.861l1.583-1.81A11 11 0 0 1 24 9.5Zm-4.722 0a6.288 6.288 0 0 1-2.614 5.107l-1.592-1.819A3.893 3.893 0 0 0 16.878 9.5c0-1.383-.72-2.597-1.806-3.289l1.592-1.82A6.288 6.288 0 0 1 19.278 9.5ZM6 6l6.5-4.5v16L6 13H2.5V6H6Z" fill="#fff" fill-opacity=".6"></path>
                                                </svg>
                                            </div>

                                            <p className={styles.text}>
                                                {'Rus'}
                                            </p>
                                        </div>
                                    </div>

                                    

                                    <div className={styles.previewDescriptionBlock}>
                                        <p className={styles.previewDescription}>
                                            Семейный психотерапевт в одиночку воспитывает пять дочерей. Оригинальный российский ситком
                                        </p>
                                    </div>

                                    <div className={styles.previewInfoButtonBlock}>
                                        <OrangeButton
                                            label='Смотреть онлайн'
                                            onClick={() => console.log('test')}
                                        />

                                        <BigBlackButton>
                                            <p>
                                                Трейлер
                                            </p>
                                        </BigBlackButton>

                                        <SmallBlackButton>
                                            <svg width="36px" height="36px" viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" data-tid="Bookmark">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M28.05 13.5V9.3h4.575V5.7H28.05V1.125h-3.6V5.7h-4.2v3.6h4.2v4.2h3.6ZM11.475 5.625h4.275v3.6h-4.275v16.353l4.868-2.524 1.657-.86 1.657.86 4.868 2.524V18h3.6v13.5l-3.6-1.867L18 26.25l-6.525 3.383-3.6 1.867V5.625h3.6Z"></path>
                                            </svg>
                                        </SmallBlackButton>
                                        
                                        <SmallBlackButton>
                                            <svg width="2.4rem" height="2.4rem" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" data-tid="DotsHorizontal">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12ZM19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z"></path>
                                            </svg>
                                        </SmallBlackButton>
                                    </div>
                                </div>
                            </div>

                            <button className={styles.previewCloseButton} onClick={handleClose}>
                                <svg width="2.4rem" height="2.4rem" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" className={styles.closeButtonGraphic} data-tid="SliderDownClose">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.303 11.999 4.15 5.847 5.848 4.15 12 10.302 18.15 4.15l1.697 1.697L13.697 12l6.151 6.151-1.697 1.697L12 13.696l-6.152 6.151-1.697-1.697L10.303 12Z"></path>
                                </svg>
                            </button>                
                        </motion.div>}
                    </motion.div> }
                </AnimatePresence>
            </section>
        </IsShowPreviewContext.Provider>
    )
}