import React from 'react';

export const Rectangle = props => (
    <shape
        render={g => {
            g.clear();
            g.beginFill(props.color);
            g.drawRect(props.x, props.y, props.width, props.height);
        }}
    />
);
