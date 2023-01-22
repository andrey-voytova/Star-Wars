import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import cn from 'classnames';

import '../index.css';
import styles from './UIVideo.module.css';

const UIVideo = ({
    src,
    playbackRate=1.0,
    classes
}) => {
    const videoRef = useRef(null);

    useEffect(() => {
        videoRef.current.playbackRate = playbackRate;
    }, []);

    return (
        <video
            loop
            autoPlay
            muted
            ref={videoRef}
            className={cn(styles.video, classes)}
        >
            <source src={src} />
        </video>
    )
}

UIVideo.propTypes = {
    src: PropTypes.string,
    playbackRate: PropTypes.number,
    classes: PropTypes.string,
}

export default UIVideo;