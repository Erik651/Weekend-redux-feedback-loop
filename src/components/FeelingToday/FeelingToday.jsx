import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function FeelingToday() {
  const [score, setScore] = useState('');
const history = useHistory();
const dispatch = useDispatch();

const handleClick = (event) => {
  console.log(`adding feeling score`, { score });

  let action = {
    payload: { score: score}
  };

  dispatch(action);

  alert('Headed to Understanding Content feedback page')
  history.push('/understanding')
}

return(
  <section>
<h2>How are you feeling today?</h2>
<input
required
placeholder="Feeling 1-5"
value={score}
onChange={(event) => setScore(event.target.value)}/>
Feeling? 

<button onClick={handleClick}>Next</button>

  </section>
);
}

export default FeelingToday;