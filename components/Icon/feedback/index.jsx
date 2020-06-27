import React, { PureComponent } from 'react';
import { gsap, TimelineMax, Power2, Bounce, Circ } from "gsap";
import debounce from '../../util/debounce';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { CSSPlugin } from 'gsap/CSSPlugin'

class Icon extends PureComponent {
  constructor(props) {
    super(props);
    this.timer = null
  };

  static defaultProps = {
    size: "80",
  };

  componentDidMount() {
    gsap.registerPlugin(CSSPlugin)
    gsap.registerPlugin(MotionPathPlugin);
  };

  componentWillUnmount() {
    this.timer = null
  };

  startAnimation = () => {
    var tl = new TimelineMax();
    tl.from('#feedback-say', 1, { x: -800, transformOrigin: "center" })
      .from('#feedback-points', 0.2, { opacity: 0, transformOrigin: "center" })
      .to('#feedback-points', 0.2, { opacity: 1, transformOrigin: "center" })
      .from('#feedback-points', 0.2, { opacity: 0, transformOrigin: "center" })
      .to('#feedback-points', 0.2, { opacity: 1, transformOrigin: "center" })
      .from('#feedback-heart', 1, { y: 800, transformOrigin: "center", ease: Power2.easeOut })
  };


  render() {
    let { size } = this.props;
    return (
      <span
        height={size} width={size}
        onMouseEnter={debounce(this.startAnimation, 4000)}
        onClick={debounce(this.startAnimation, 4000)}
      >
        <svg enableBackground="new 0 0 509.208 509.208" height={size}
          viewBox="0 0 509.208 509.208" width={size} xmlns="http://www.w3.org/2000/svg">
          <g>
            <g id="feedback-say">
              <path d="m405.588 2.104h-405.588v250.945h53.821v74.606l74.606-74.606h277.161z" fill="#f5f2f1" />
              <path d="m202.794 2.104h202.794v250.945h-202.794z" fill="#dbd1cc" />
            </g>
            <g id="feedback-points">
              <path d="m116.244 112.577h30v30h-30z" fill="#dbd1cc" />
              <path d="m187.794 112.577h30v30h-30z" fill="#dbd1cc" />
              <g fill="#b3a9a9">
                <path d="m202.794 112.577h15v30h-15z" />
                <path d="m259.344 112.577h30v30h-30z" />
              </g>
            </g>
            <g id="feedback-heart">
              <path d="m343.843 307.489c0-45.664-37.018-82.683-82.683-82.683s-82.683 37.018-82.683 82.683c0 22.967 9.367 43.744 24.485 58.727l140.88 140.888 69.568-140.888z" fill="#ff7c48" />
              <path d="m343.843 507.104 140.881-140.888c15.118-14.983 24.485-35.76 24.485-58.727 0-45.664-37.018-82.683-82.683-82.683-45.664 0-82.683 37.018-82.683 82.683z" fill="#ff415b" />
            </g>
          </g>
        </svg>
      </span >
    )
  }
}

export default Icon;