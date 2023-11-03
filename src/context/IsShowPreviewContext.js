import { createContext } from 'react'

export const IsShowPreviewContext = createContext({
    isShowBlock: false,
    // isShowPreviewImage: false,
    // isShowPreviewVideo: false,
    setIsShowBlock: any => {},
    // setIsShowPreviewImage: any => {},
    // setIsShowPreviewVideo: any => {},
})