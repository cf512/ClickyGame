import React from "react";
import "../styles/List.css";

const rons = [
  {
    id: 1,
    url: "https://content.screencast.com/users/ConnorConnorF/folders/Snagit/media/0a1dd196-f079-4a98-ac37-b21b1059e5c4/ron1.png",
  },
  {
    id: 2,
    url: "https://content.screencast.com/users/ConnorConnorF/folders/Snagit/media/a21677fe-3386-4bdf-9e2c-cb5d47c8c43a/ron2.png",
  },
  {
    id: 3,
    url: "https://content.screencast.com/users/ConnorConnorF/folders/Snagit/media/a17ef3ea-9adf-4b68-833f-00b9670e6bf9/ron6.png",
  },
  {
    id: 4,
    url: "https://content.screencast.com/users/ConnorConnorF/folders/Snagit/media/06a1a659-18bd-48dc-a508-a925ea82bddc/ron5.png",
  },
  {
    id: 5,
    url: "https://content.screencast.com/users/ConnorConnorF/folders/Snagit/media/29b96fbe-5d6b-4edf-8181-74e086df2cad/ron4.png",
  },
  {
    id: 6,
    url: "https://content.screencast.com/users/ConnorConnorF/folders/Snagit/media/ce075896-dd8e-4840-884c-518bd4a22d07/ron3.png",
  }
];

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    count: 0
  };

  // handleIncrement increments this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">Score</div>
        <div className="card-body">
          <p className="card-text">{this.state.count}</p>
        </div>
        {rons.map(item => (
          <div className="card">
            <div className="img-container">
              <button onClick={this.handleIncrement}>
                <img key={item.id} alt={item.name} src={item.url} />
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Counter;
