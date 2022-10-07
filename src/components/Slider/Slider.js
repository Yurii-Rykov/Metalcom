import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import images from 'images/slider';
import s from './Slider.module.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const slider = () => (
    <AutoplaySlider
        play={false}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={3000}
        bullets={false}
        mobileTouch={true}
        className={s.slider}
    >
        <div data-src={images.img2} className={s.img}>
            <p>This is info for first slider</p>
        </div>
        <div data-src={images.img1} className={s.img}>
            <p>This is info for second slider</p>
        </div>
        <div data-src={images.img6} className={s.img}>
            <p>This is info for third slider</p>
        </div>
    </AutoplaySlider>
);

export default slider;
