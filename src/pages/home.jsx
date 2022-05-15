import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";
import Button from '@mui/material/Button';

/**
* The Home function defines the content that makes up the main content of the Home page
*
* This component is attached to the /about path in router.jsx
* The function in app.jsx defines the page wrapper that this appears in along with the footer
*/

export default function Home() {
  /* We use state to set the hello string from the array https://reactjs.org/docs/hooks-state.html
     - We'll call setHello when the user clicks to change the string
  */
 
  /* The wiggle function defined in /hooks/wiggle.jsx returns the style effect and trigger function
     - We can attach this to events on elements in the page and apply the resulting style
  */

  // When the user clicks we change the header language
  return ( // '<>' needed to wrap the button
      <>
      <h1 className="title">Start Quiz!</h1>
      <Button href="/questions" variant="contained">Start</Button>
    
      <div className="instructions">
        <h2>Using this project</h2>
        <p>
          This is the CIT 384 <strong>Quiz</strong> project. Test your knowledge to see how much you really know. Log in using the{" "}
          <Link href="/signin">Sign in</Link> page, and check out README.md in the
          editor for additional detail plus next steps you can take!
        </p>
      </div>
    </>
  );
}