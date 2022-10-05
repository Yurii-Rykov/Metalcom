import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css'
import s from './Slider.module.css'

const AutoplaySlider = withAutoplay(AwesomeSlider);

const slider = () => (
  <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={3000}
    bullets={false}
    mobileTouch={true}
    className={s.slider}
  >
    <div data-src="/path/to/image-0.png" ><p>This is info for first slider</p></div>
    <div data-src="/path/to/image-1.png" ><p>This is info for second slider</p></div>
    <div data-src="/path/to/image-2.jpg" ><p>This is info for third slider</p></div>
  </AutoplaySlider>
);

export default slider;