import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch } from 'react-redux';

function BeingSupported() {
  const [score, setScore] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    console.log(`adding support score`, { score });

    let action = {
      payload: { score: score }
    };

    dispatch(action);
    alert('Headed to Comments page');
    history.push('/comments');
  };

  return (
    <section>
      <h2>How well are you being supported?</h2>
      <input
      required
      placeholder='Feeling 1-5'
      value={score}
      onChange={(event) => setScore(event.target.value)}/>Support?

      <button onClick={handleClick}>Next</button>
    </section>
  );
}
export default BeingSupported;

// https://mui.com/material-ui/react-rating/
