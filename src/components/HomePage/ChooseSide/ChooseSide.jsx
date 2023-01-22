import React from 'react'
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEUTRAL } from '../../../context/ThemeProvider'
import styles from './ChooseSide.module.css'
import imgLight from './img/3.jpg'
import imgDark from './img/2.jpg'
import imgNeutral from './img/1.jpg'
import ChooseSideItem from '../ChooseSideItem/ChooseSideItem'


const ChooseSide = () => {
    
  const elements = [
    {
      theme: THEME_LIGHT,
      text:"Light Side",
      img: imgLight,
      classes: styles.item__light
    },
    {
      theme:THEME_DARK,
      text:"Dark Side",
      img: imgDark,
      classes: styles.item__dark
    },
    {
      theme: THEME_NEUTRAL,
      text:"Han Solo",
      img: imgNeutral,
      classes: styles.item__neutral
    },
  ]

  return (
    <div className={styles.container}>
      {elements.map(({theme, text, img, classes }) =>(
        <ChooseSideItem
          key={theme}
          theme={theme}
          text={text}
          img={img}
          classes={classes}
        />
      ))}
    </div>
  )
}

export default ChooseSide