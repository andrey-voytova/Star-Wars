import React from 'react'
import styles from './ChooseSideItem.module.css'
import PropTypes from 'prop-types'  
import { useTheme } from '../../../context/ThemeProvider'
import cn from 'classnames'

const ChooseSideItem = ({theme, text, img, classes}) => {
    const isTheme = useTheme()
  return (
    <div 
        className={cn(styles.item, classes)}
        onClick={() => isTheme.change(theme)}
        >
        <img className={styles.item__img} src={img} alt={text} />
        <span className={styles.item__header}>{text}</span>
    </div>
  )
}

export default ChooseSideItem
ChooseSideItem.propTypes = {
    onClick: PropTypes.string,
    classes: PropTypes.string,
    text: PropTypes.string,
    img: PropTypes.string,
}
