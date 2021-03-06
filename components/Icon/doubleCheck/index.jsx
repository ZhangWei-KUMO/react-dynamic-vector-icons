import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { gsap, TimelineMax, Power2, Bounce } from "gsap";
import debounce from '../../util/debounce';
import { CSSPlugin } from 'gsap/CSSPlugin'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

class Icon extends PureComponent {
  constructor(props) {
    super(props);
    this.timer = null
  };

  static defaultProps = {
    size: "80",
  };

  startAnimation = () => {
    var tl = new TimelineMax();
    tl.from('#double-check-once', 0.5, { y: 300, transformOrigin: "top", ease: Bounce.easeOut })
      .from('#double-check-twice', 0.5, { y: 300, transformOrigin: "top", ease: Bounce.easeOut })
  };

  componentDidMount() {
    gsap.registerPlugin(CSSPlugin)
    gsap.registerPlugin(MotionPathPlugin);
    let { type } = this.props;
    if (type === "loopPlay") {
      debounce(this.startAnimation, 3000)()
      let timer = setInterval(() => {
        debounce(this.startAnimation, 3000)()
      }, 3000)
    } else {
      return;
    }
  };

  componentWillUnmount() {
    this.timer = null
  };

  render() {
    let { size } = this.props;
    return (
      <span
        height={size} width={size}
        onMouseEnter={debounce(this.startAnimation, 3000)}
      >
        <svg id="Capa_8" enableBackground="new 0 0 512 512" height={size} width={size}
          viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <g>
            <g id="double-check-paper">
              <path d="m2.774 58.312h362.982v185.735h-362.982z" fill="#dbd1cc" />
              <path d="m184.265 58.312h181.491v185.735h-181.491z" fill="#b3a9a9" />
            </g>
            <g id="double-check-cover">
              <path d="m2.774 58.312 181.491 75.087 73.594-75.087-73.594-58.312h-181.491z" fill="#f5f2f1" />
              <path d="m184.265 133.399 181.49-75.087v-58.312h-181.49z" fill="#dbd1cc" />
            </g>
            <path id="double-check-once" d="m509.226 266.755-48.047-48.047-48.045 48.045-71.524 61.524-77.629 87.629-107.261-107.261-48.047 48.047 49.216 59.216 58.048 48.048 48.044 48.044z" fill="#2681ff" />
            <path id="double-check-twice" d="m413.136 266.755-48.047-48.047-197.199 197.198-107.261-107.261-48.047 48.047 155.308 155.308z" fill="#69b1e9" />
          </g>
        </svg>
      </span >
    )
  }
}

export default Icon;