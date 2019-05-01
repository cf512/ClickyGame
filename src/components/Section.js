import React from "react";
import "../styles/Section.css";

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
      <h2>Click on a Ron to score points.<br />But don't click on the upset Ron or you'll lose points.<br />And you stay classy, San Diego.</h2>
    </section>
  );
}

export default Section;
