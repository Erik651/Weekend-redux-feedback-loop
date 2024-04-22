import React, { useState } from "react";

import { useHistory } from "react-router-dom";

function Home() {
  
const history = useHistory();


const handleClick = () => {
  
  alert('Headed to Feeling Content feedback page')
  history.push('/feeling')
}

return(<>
  <section>
<h2>Welcome to the Feedback Loop!!</h2>


<button onClick={handleClick}>Next</button>

  </section></>
);
}

export default Home;