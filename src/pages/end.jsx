import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";
import Button from '@mui/material/Button';

export default function End() {
  /* We use state to set the hello string from the array https://reactjs.org/docs/hooks-state.html
     - We'll call setHello when the user clicks to change the string
  */
 
  /* The wiggle function defined in /hooks/wiggle.jsx returns the style effect and trigger function
     - We can attach this to events on elements in the page and apply the resulting style
  */

  // When the user clicks we change the header language
  
  
  return ( // '<>' needed to wrap the button
      <>
      <h1> Congrats on completing the quiz! </h1>

      <div className="instructions">
        <h2>If you would like to try the quiz again, please go back to the Home page or <a href="https://final-group-project-cit-384-group-1.glitch.me/">click on this link!</a></h2>
        <Button href="/questions" variant="contained">Play one more time</Button>
      </div>
    </>
  );
}
