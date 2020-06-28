# React Dynamic Vector Icons

Dynamic icons for your React project.

<img src="https://test-1253763202.cos.ap-shanghai.myqcloud.com/products/pic.gif"/>

## Install

```bash
npm run install react-dynamic-vector-icons
# or
yarn add react-dynamic-vector-icons
```
## Usage 

```js
import { CheckBoard,DoubleCheck } from 'react-dynamic-vector-icons';

export default () =>(
  <div>
      <CheckBoard />
      <DoubleCheck size="90" type="loopPlay"/>
  </div>
)
```

## Properties

Any Text property and the following:

| Name | type   | Description      | Default |
| :--- | :----- | :--------------- | :------ |
| size | String | Size of the icon | `"80"`  |

## Icon categories

* CheckBoard
* DoubleCheck
* Finance
* Feedback
* GuideBoarder
* Icecream
* Industry
* Navigator
* Rain
* Thermometer
* Tools
* Wifi

## Support Some SSR Frames

Maybe you could use some SSR React Frames,such as `next.js`,you can import it as follows:

```js
const GuideBoarder = dynamic(() => import("react-dynamic-vector-icons").then((mod) => mod.GuideBoarder), { ssr: false });
```
## License

This project is licenced under the MIT License.
