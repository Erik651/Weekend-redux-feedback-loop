import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch } from 'react-redux';

function BeingSupported() {
  const [scoreSupport, setScoreSupport] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    console.log(`adding support score`, { scoreSupport });

    let action = {
      payload: { scoreSupport: scoreSupport }
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
      value={scoreSupport}
      onChange={(event) => setScore(event.target.value)}/>Support?

      <button onClick={handleClick}>Next</button>
    </section>
  );
}
export default BeingSupported;

// https://mui.com/material-ui/react-rating/
