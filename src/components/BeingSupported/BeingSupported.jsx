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
  return alert('please leave feedback comment to proceed')
}
    dispatch(action);
    alert('Headed to Comments page');
    history.push('/comment');
  };

  return (<>
    <section>
      <h2>How well are you being supported?</h2>
      <input
      required
      placeholder='Feeling 1-5'
      value={scoreSupport}
      onChange={(event) => setScoreSupport(event.target.value)}/>Support?

      <button onClick={handleClick}>Next</button>
    </section></>
  );
}
export default BeingSupported;

// https://mui.com/material-ui/react-rating/
