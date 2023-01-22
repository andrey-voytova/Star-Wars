import React, { useEffect, useState } from 'react';
import loaderBlack from './img/loaderBlack.svg';
import loaderWhite from './img/loaderWhite.svg';
import loaderBlue from './img/loaderBlue.svg';

import cn from 'classnames'
import styles from './UILoading.module.css';

const UILoading = ({
    theme = 'white',
    isShadow = true,
    classes
  }) => {

    const [loaderIcon, setLoaderIcon] = useState('')

    useEffect(() =>{
      switch (theme) {
        case 'black': setLoaderIcon(loaderBlack); break;
        case 'blue': setLoaderIcon(loaderBlue); break;
        case 'white': setLoaderIcon(loaderWhite); break;
        
        default: setLoaderIcon(loaderWhite);
      }
    },[])

  return (

    <img className={cn(styles.loader,isShadow && styles.shadow, classes)} src={loaderIcon} alt="loader" />

  )
}

export default UILoading
//44 50