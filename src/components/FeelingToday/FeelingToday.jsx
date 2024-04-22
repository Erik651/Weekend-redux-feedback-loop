import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function FeelingToday() {
  const [scoreFeeling, setScoreFeeling] = useState('');
const history = useHistory();
const dispatch = useDispatch();

const handleClick = (event) => {
  console.log(`adding feeling score`, { scoreFeeling });

  let action = {
    payload: { scoreFeeling: scoreFeeling}
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
value={scoreFeeling}
onChange={(event) => setScore(event.target.value)}/>
Feeling? 

<button onClick={handleClick}>Next</button>

  </section>
);
}

export default FeelingToday;