import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function BeingSupported() {
  const [scoreSupport, setScoreSupport] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (event) => {
    console.log(`adding support score`, { scoreSupport });

    let action = {
      type: 'ADD_SUPPORTED_SCORE',
      payload: scoreSupport 
    };
    if (scoreSupport === ''){
      return alert('please add score value between 1-5 to proceed')
    }
    if (scoreSupport > 5) {
      return alert(`${scoreSupport} ?, Wow!! That's flattering, but please leave a value between 1-5.`)
    }
    if (scoreSupport < 1) {
      return alert(`${scoreSupport}? Zero? Really?? Come on? Serious? Please leave a value between 1-5.`)
    }
    dispatch(action);
    alert('Headed to Comments page');
    history.push('/comment');
  };

  return (<>
    <section>
      <h2>How well are you being supported?</h2>
      <input
      data-testid="input"
      required
      placeholder='Feeling 1-5'
      value={scoreSupport}
      onChange={(event) => setScoreSupport(event.target.value)}/>Support?

      <button data-testid="next" onClick={handleClick}>Next</button>
    </section></>
  );
}
export default BeingSupported;

// https://mui.com/material-ui/react-rating/
