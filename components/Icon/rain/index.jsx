import React, { PureComponent } from 'react';
import { gsap, TimelineMax, Power2, Bounce, Circ } from "gsap";
import debounce from '../../util/debounce';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { CSSPlugin } from 'gsap/CSSPlugin';

class Rain extends PureComponent {
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
    let { type } = this.props;
    if (type === "loopPlay") {
      debounce(this.startAnimation, 1500)()
      let timer = setInterval(() => {
        debounce(this.startAnimation, 1500)()
      }, 1500)
    } else {
      return;
    }
  };

  componentWillUnmount() {
    this.timer = null
  };

  startAnimation = () => {
    var tl = new TimelineMax();
    tl.from('#rain', 1, { y: -600, transformOrigin: "top", ease: Power2.easeOut })
  };

  render() {
    let { size } = this.props;
    return (
      <span
        height={size} width={size}
        onMouseEnter={debounce(this.startAnimation, 1500)}
        onClick={debounce(this.startAnimation, 1500)}
      >
        <svg enableBackground="new 0 0 512 512" height={size} viewBox="0 0 512 512" width={size} xmlns="http://www.w3.org/2000/svg">
          <g id="rain">
            <path d="m388.701 208.992 58.528-126.388 39.562 154.161-39.562 64.771c-35.772 0-64.771-28.999-64.771-64.771 0-9.94 2.242-19.356 6.243-27.773z" fill="#69b1e9" />
            <g>
              <path d="m6.243 336.852 58.528-126.388 39.562 154.161-39.562 64.771c-35.772 0-64.771-28.999-64.771-64.771 0-9.94 2.242-19.355 6.243-27.773z" fill="#69b1e9" />
              <path d="m197.472 272.922 58.528-126.388 39.562 154.161-39.562 64.771c-35.772 0-64.771-28.999-64.771-64.771 0-9.94 2.242-19.356 6.243-27.773z" fill="#69b1e9" />
              <g fill="#2681ff">
                <path d="m64.771 210.464 58.528 126.388c4.001 8.417 6.243 17.833 6.243 27.773 0 35.772-28.999 64.771-64.771 64.771z" />
                <path d="m256 146.534 58.528 126.388c4.001 8.417 6.243 17.833 6.243 27.773 0 35.772-28.999 64.771-64.771 64.771z" />
                <path d="m447.229 82.604 58.528 126.388c4.001 8.417 6.243 17.833 6.243 27.773 0 35.772-28.999 64.771-64.771 64.771z" />
              </g>
            </g>
          </g>
        </svg>
      </span >
    )
  }
}

export default Rain;