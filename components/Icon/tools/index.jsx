import React, { PureComponent } from 'react';
import { gsap, TimelineMax } from "gsap";
import debounce from '../../util/debounce';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

class Tools extends PureComponent {
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
    tl.to('#tool', 0.2, { rotation: 30, transformOrigin: "center" })
      .to('#tool', 0.2, { rotation: 0, transformOrigin: "center" })

  };

  render() {
    let { size } = this.props;
    return (
      <span
        height={size} width={size}
        onMouseEnter={debounce(this.startAnimation, 1500)}
      >
        <svg enableBackground="new 0 0 512 512" height={size} width={size} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <g id="tool">
            <g>
              <g>
                <path d="m0 447.616 427.893-427.894 64.386 64.386-427.894 427.892z" fill="#ce7000" />
              </g>
            </g>
            <path d="m-40.329 259.196h605.132v45.525h-605.132z" fill="#823c08" transform="matrix(.707 -.707 .707 .707 -122.568 268.013)" />
            <path d="m511.996 367.155c.336-77.836-21.304-139.587-70.364-204.83l-91.956-91.955c-65.244-49.06-126.995-70.7-204.832-70.365 49.222 40.613 86.149 78.106 135.129 124.973l107.051 107.05c46.868 48.98 84.361 85.906 124.972 135.127z" fill="#f9ecd7" />
            <path d="m395.656 116.348-62.155 62.155 53.524 53.524c46.867 48.981 84.36 85.906 124.971 135.128.336-77.836-21.304-139.587-70.364-204.83z" fill="#f5d7b0" />
            <path d="m511.996 367.156v-.001z" fill="#f9ecd7" />
            <path d="m441.632 162.325 5.854-33.423-64.388-64.388-33.421 5.855-69.703 54.608-9.059 51.724 64.388 64.388 51.722-9.062z" fill="#f9b700" />
            <path d="m447.486 128.902-32.192-32.192-112.185 112.185 32.194 32.194 51.722-9.062 54.607-69.703z" fill="#f49d14" />
          </g>
          <path d="m512 161.33h-.001z" fill="#ce7000" />
        </svg>
      </span >
    )
  }
}

export default Tools;