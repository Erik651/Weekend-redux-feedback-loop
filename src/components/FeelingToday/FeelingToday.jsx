import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function FeelingToday() {
const history = useHistory();

const handleClick = () => {
  alert('Headed to Understanding Content feedback page')
  history.push('/understandingContent')
}

return(
  <section>
<h2>How are you feeling today?</h2>
<input>Feeling?</input>

<button onClick={handleClick}>Next</button>

  </section>
)
}

export default FeelingToday;