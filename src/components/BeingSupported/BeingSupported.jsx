import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function BeingSupported() {

  const history = useHistory();

  const handleClick = () => {
    alert('Headed to Comments page');
    history.push('/leaveComments')
  }


  return ( <section>
<h2>How well are you being supported?</h2>
<input>Support?</input>

<button onClick={handleClick}>Next</button>
  </section>)
}
export default BeingSupported;









// https://mui.com/material-ui/react-rating/