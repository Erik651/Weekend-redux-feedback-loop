// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

// function Home() {
//   let [feedbackArray, setFeedbackArray] = useState([]);
//   const [name, setName] = useState('');

//   const history = useHistory();
//   const dispatch = useDispatch();

//   const fetchFeedbackArray = () => {
//     axios
//       .get('/api/feedback')
//       .then((response) => {
//         console.log('Feedback Array', response.data);
//         setFeedbackArray(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//         alert('Something went wrong');
//       });
//   };

//   useEffect(() => {
//     fetchFeedbackArray();
//   }, []);

//   const handleClick = (event) => {
//     alert(`Hi ${name}, your headed to Feeling Content feedback page`);

//     let action = {
//       type: 'ADD_NAME',
//       payload: name
//     };
// dispatch(action);
//     history.push('/feeling');
//   };

//   return (
//     <>
//       <section>
//         <h2>Welcome to the Feedback Loop!!</h2>
//         <h3>Please enter your name</h3>
        
// <input
// data-testid="input"
// required
// placeholder="Your Name"
// value={name}
// onChange={(event) => setName(event.target.value)}/>
// <br/>
// <br/>
//         <button data-testid="next" onClick={handleClick}>Start</button>
//         <br/>
//         <ul>
//           {
//             /* TODO: Render the list of famous people */
//             feedbackArray.map((feedback) => {
//               return (
                
//                 <li key={feedback.id}>
//                   <br/>
//                   Name: {feedback.name}
//                   <br/>
//                   How are you feeling today?{feedback.feeling}
//                   <br />
//                   How are you understanding the content? {feedback.understanding}
//                   <br />
//                   How well are you being supported? {feedback.support}
//                   <br />
//                   Your feedback comments: {feedback.comments}
//                   <br/>
//                   <br/>
//                   <br/>
//                 </li>
//               );
//             })
//           }
//         </ul>
//       </section>
//     </>
//   );
// }

// export default Home;

//feeling: feelingToday, understanding: understandingContent, support: beingSupported, comment: leaveComment
