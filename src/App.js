// const TextExpander = () => {
//     return <div>
//         <p>
//             that's what god feels like
//         </p>
//     </div>
// }

// export default  TextExpander

import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div>
      <TextExpander className="box-1">
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className="box" buttonColor="red">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  children,
  className,
  expanded = false,
  collapseButtonText = "show less",
  collapsedNumWords = 10,
  buttonColor = 'pinkgit ',

  expandButtonText = "show more",
}) {
  const [textCollapsed, setTextCollapsed] = useState(expanded);
// const [expand, setExpand] = useState(false);

  const handleButtonClick = () => {
    setTextCollapsed(!textCollapsed)
    // expanded = !expanded
    // setExpand(!expand) 

  }
  const buttonStyle = {
    background: 'none',
    border:'none',
    font:'inherit',
    cursor:'pointer',
    color:buttonColor,
    marginLeft:'5px'
}
//   const collapsed = "i am collapsed"
  const defaultText = textCollapsed?  children.split(" ").slice(0, collapsedNumWords).join(" ") + '...' : children

  return (
    <div className={className}>
      {defaultText}
      <button onClick={handleButtonClick} style={buttonStyle}>{textCollapsed? expandButtonText: collapseButtonText}</button>

    </div>
  );
}
