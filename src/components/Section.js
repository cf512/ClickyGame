import React from "react";
import "../styles/Section.css";
import List from "./List";
// import url from "../../public/assets/images"

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

// By importing the Section.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  sectionStyles: {
    background: "lightgray"
  }
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Section() {
  return (
    <section style={styles.sectionStyles} className="section">
      <h2>Click on a ron to score, but don't click the same one twice!</h2>
      <List rons={rons} />
    </section>
  );
}

export default Section;
