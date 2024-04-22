import React from "react";
import { useHistory } from 'react-router-dom';


function UnderstandingContent() {
  const history = useHistory();

  const handleClick = () => {
    alert('Headed to Being Supported page');
    history.push('/beingSupported')
  }
return (
  <section>
<h2>How well are you understanding the content?</h2>
<input>Understanding?</input>

<button onClick={handleClick}>Next</button>
  </section>
)
}

export default UnderstandingContent;