### How to Use
open terminal and run:
 `npm i simple-react-slider-v1`
or
 `yarn add simple-react-slider-v1`

 next go to your component and import Slider:

 `import Slider from "simple-react-slider-v1"`

 now you may use it:

pass images

 ```
 <Slider>
    <img src='path-to-image' />
    <img src='path-to-image' />
    <img src='path-to-image' />
 </Slider>
 ```
 or React elements
 ```
 <Slider>
    <SomeElement />
    <SomeElement />
    <SomeElement />
 </Slider>
 ```
 or different elements
 ```
 <Slider>
    <Element1 />
    <Element2 />
    <Element3 />
 </Slider>
 ```
 Slider with props:
  ```
   <Slider 
   auto={false}
   width={'500px'}
   height={'400px'}
   showButtons={false}
   delay={5000}
   activeButtonColor={'blue'}>

    <img src='path-to-image' />
    <img src='path-to-image' />
    <img src='path-to-image' />
 </Slider>
 ```
 ---
## How to use slider
### Props

|  Name  |   Type   | Default |         Description          |
|--------|----------|---------|------------------------------|
|children|array|[]|Anything React can render|
|width|string|100%|Width of the slider container|
|height|string|100px|height of the slider container|
|showButtons|boolean|true|Is used to show/hide contol buttons of the slider|
|activeButtonColor|string|green|Active button color|
|delay|number|2000|Time to delay(in miliseconds) for auto slide.|
|auto|boolean|true|Auto slider|
---

## Contribute