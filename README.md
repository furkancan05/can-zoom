# react-zoom-image

## Overview

A custom component for React JS developers that you can zoom images during hover mouse on, zoom twice when clicked image and undo zoom when clicked again. Written with React only, no external dependencies required.

## Demo

[Demo usage](https://google.com)

## Usage

Basic usage example

```js
import ZoomImage from "can-zoom";

export default function App() {
  return (
    <div className="app">
      // Just import package, set arguments and done!
      <ZoomImage
        width={500}
        height={500}
        scale={2}
        maxScale={6}
        imagePath="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
      />
    </div>
  );
}
```

## Arguments

| Argument        | Type   | Description                                                                            |
| --------------- | ------ | -------------------------------------------------------------------------------------- |
| scale           | number | Zoom multiplier                                                                        |
| maxScale        | number | Zoom multiplier on click                                                               |
| width           | number | Width limit of component                                                               |
| height          | number | Height limit of component                                                              |
| backgroundColor | string | Background color of container. Supports all color types provided that they are strings |
| imagePath       | string | Source url of image                                                                    |
| objectFit       | string | Set image positioned inside container                                                  |
| cursor          | string | Set cursor type                                                                        |
| borderStyle     | string | Type of border                                                                         |
| borderWidth     | number | Width value of border                                                                  |
| borderColor     | string | Color of border. Supports all color types provided that they are strings               |
| borderRadius    | string | Rounded value of border. "25%", "30px" ect                                             |

### Created by

This component created by Furkan Can. I hope you have fun while using this and get all your other stuffs done with ease.
