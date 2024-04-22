import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function BeingSupported() {
  const [scoreSupport, setScoreSupport] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    console.log(`adding support score`, { scoreSupport });

    let action = {
      type: 'ADD_SUPPORTED_SCORE',
      payload: { scoreSupport: scoreSupport }
    };

    dispatch(action);
    alert('Headed to Comments page');
    history.push('/comments');
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
