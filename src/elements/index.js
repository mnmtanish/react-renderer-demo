import React from 'react';

export const Rectangle = props => (
    <shape
        render={(shape) => {
            shape.graphics.clear();
            shape.graphics.beginFill(props.color);
            shape.graphics.drawRect(props.x, props.y, props.width, props.height);
        }}
    />
);
