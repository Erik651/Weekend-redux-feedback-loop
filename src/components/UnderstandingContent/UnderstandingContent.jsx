import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";

function UnderstandingContent() {
  const [scoreUnderstanding, setScoreUnderstanding] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = (event) => {
    console.log(`adding understanding score`, { scoreUnderstanding });

    let action = {
      type: 'ADD_UNDERSTANDING_SCORE',
      payload: scoreUnderstanding 
    };
    if (scoreUnderstanding === ''){
      return alert('please add score value between 1-5 to proceed')
    }
    if (scoreUnderstanding > 5) {
      return alert(`${scoreUnderstanding} ?, Oh, Ok, Big Brain!! please leave a value between 1-5.`)
    }
    if (scoreUnderstanding < 1) {
      return alert(`${scoreUnderstanding}? The singularity, cool, but Please leave a value between 1-5.`)
    }
    dispatch(action);

    alert('Headed to Being Supported page');
    console.log('history', history)
    history.push('/support')
  }
return (<>
  <section>

<h2>How well are you understanding the content?</h2>
<input
data-testid="input"
required
placeholder="Understanding 1-5"
value={scoreUnderstanding}
onChange={(event) => setScoreUnderstanding(event.target.value)}/>Understanding?

<button  data-testid="next" onClick={handleClick}>Next</button>
  </section>
  </>
)
}

export default UnderstandingContent;