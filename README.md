### Example 1

```jsx
const Canvas = () => (
    <Rectangle x="100" y="100" width="100" height="100" color="red" />
);
```

### Example 2

```jsx
class Canvas extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = { x: 100, t: Date.now() };
        this.animate();
    }

    animate() {
        requestAnimationFrame(() => {
            const d = Math.PI * (Date.now() - this.state.t) / 1000;
            const x = 200 + 100 * Math.sin(d);
            this.setState({ x });
            this.animate();
        });
    }

    render() {
        const x = this.state.x;
        return <Rectangle x={x} y={100} width={100} height={100} color="red" />;
    }
}
```
