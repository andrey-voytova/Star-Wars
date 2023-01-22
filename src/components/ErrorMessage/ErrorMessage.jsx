import React from 'react'
import UIVideo from '../UI/UIVideo/UIVideo'
import styles from './ErrorMessage.module.css'
import myVideo from './video/han-solo.mp4'

const ErrorMessage = () => {
  return (
    <>
      <p className={styles.text}>
          The dark side of the force has won.<br/>
          We cannot display data.<br/>
          Come back when we fix everything. 
      </p>
     
      <UIVideo
        src={myVideo}
        classes={styles.video}
        playbackRate={1}
      />
    </>
  )
}
export default ErrorMessage
