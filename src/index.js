import React from 'react';
import ReactEasel from './renderer';
import { Rectangle } from './elements';

const Canvas = () => <>
    <Rectangle x="100" y="100" width="100" height="100" color="red" />
    <Rectangle x="225" y="125" width="50" height="50" color="red" />
</>;

ReactEasel.render(<Canvas />, 'canvas');
