# The Click Burgundy Game
a react app that displays some different Ron Burgundy buttons that you can click to score (or lose) points

## Live Version deployed to Github Pages:

https://cf512.github.io/clickygame/

### Technical Architecture

The frontend is loaded from four different components:

```
    ├── ./src/components
    │   ├── ./src/components/Counter.js
    │   ├── ./src/components/Header.js
    │   ├── ./src/components/Navbar.js
    │   └── ./src/components/Section.js
```

The interactive part is all within `Counter.js` in a Class component:

```
class Counter extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    count: 0
  };

  // handleIncrement increments this.state.count by 1
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // handleIncrement decrements this.state.count by 1
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">Score</div>
        <div className="card-body">
          <p className="card-text">{this.state.count}</p>
        </div>

        <ul>
          <li>
            <button onClick={this.handleDecrement}>
              <img alt="upset-ron" src="(<long screenshot url>)" />
            </button>
          </li>
          {rons.map(item => (
            <li>
              <button onClick={this.handleIncrement}>
                <img key={item.id} alt={item.name} src={item.url} />
              </button>
            </li>
          ))}
        </ul>

      </div>
    );
  }
}

export default Counter;
```

### File Structure:

```
├── ./README.md
├── ./package-lock.json
├── ./package.json
├── ./public
│   ├── ./public/favicon.ico
│   ├── ./public/index.html
│   └── ./public/manifest.json
└── ./src
    ├── ./src/App.css
    ├── ./src/App.js
    ├── ./src/App.test.js
    ├── ./src/components
    │   ├── ./src/components/Counter.js
    │   ├── ./src/components/Header.js
    │   ├── ./src/components/Navbar.js
    │   └── ./src/components/Section.js
    ├── ./src/index.css
    ├── ./src/index.js
    ├── ./src/logo.svg
    ├── ./src/serviceWorker.js
    └── ./src/styles
        ├── ./src/styles/Header.css
        ├── ./src/styles/List.css
        ├── ./src/styles/Navbar.css
        └── ./src/styles/Section.css
```

### Original Assignment Notes:

For posterity, the original assignment notes can be found in [assignment.md](https://github.com/cf512/clickygame/blob/master/assignment.md).