import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function FeelingToday() {
  const [scoreFeeling, setScoreFeeling] = useState('');
 
const history = useHistory();
const dispatch = useDispatch();

const handleClick = (event) => {
  console.log(`adding feeling score`, { scoreFeeling });

  let action = {
    type: 'ADD_FEELING_SCORE',
    payload: scoreFeeling
  };
if (scoreFeeling === ''){
  return alert('please add score value between 1-5 to proceed')
}
if (scoreFeeling > 5) {
  return alert(`${scoreFeeling} ?, That's too much Bob!!! Please leave a value between 1-5.`)
}
if (scoreFeeling < 1) {
  return alert(`${scoreFeeling}? You're not dead yet!!! Please leave a value between 1-5.`)
}
  dispatch(action);

  alert('Headed to Understanding Content feedback page')
  history.push('/understanding')
}

return(<>
  <section>
<h2>How are you feeling today?</h2>
<input
required
placeholder="Feeling 1-5"
value={scoreFeeling}
onChange={(event) => setScoreFeeling(event.target.value)}/>
Feeling? 

<button onClick={handleClick}>Next</button>

  </section></>
);
}

export default FeelingToday;