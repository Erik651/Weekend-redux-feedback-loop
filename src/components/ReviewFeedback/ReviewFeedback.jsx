import React from "react";
import { useHistory } from "react-router-dom";
// import BeingSupported from "../BeingSupported/BeingSupported";
// import FeelingToday from "../FeelingToday/FeelingToday";
// import LeaveComment from "../LeaveComment/LeaveComment";
// import UnderstandingContent from "../UnderstandingContent/UnderstandingContent";
import { useSelector } from "react-redux";
import axios from "axios";



function ReviewFeedback() {

  const history = useHistory();
  const feelingToday = useSelector(store => store.feelingToday);
  const understandingContent = useSelector(store => store.understandingContent);
  const leaveComment = useSelector(store => store.leaveComment);
  const beingSupported = useSelector(store => store.beingSupported);
  const name = useSelector(store => store.name);

  const handleClick = () => {

    console.log(`adding new feedback submission`, feelingToday);

    let action = { type: 'ADD_FEEDBACK', feeling: feelingToday, name: name, understanding: understandingContent, support: beingSupported, comment: leaveComment }

    axios.post('/api/feedback', action)
    .then((response) => {
      // call function to add reviews to dom
      // add function to reset survey
      alert(' Headed to Submission Success page');
      history.push('/submissionSuccess')
})
.catch((error) => {
  console.log(error);
  alert(`Something went wrong!!`);
});
} 


//dispatch(action);


//axios.post
// const addTask = (evt) => {
//   evt.preventDefault();
//   console.log(`The add task to do is ${taskToDoTaskName}`);
//   const data = { taskName: taskToDoTaskName };
//   axios
//     .post('/api/todo', data)
//     .then((response) => {
//       fetchTask();
//       setTaskToDo('');
//     })
//     .catch((error) => {
//       console.log(error);
//       alert('Something went wrong!');
//     });
// };




 








    
    return(
      
      <>
    <section>
      <h2>Review Your Feedback</h2>
      <ul>Survey Scores and Comments</ul>
      <li>Feeling Today score: {feelingToday}</li>
      <li>Understanding Content score: {understandingContent}</li>
      <li>Feeling Supported score: {beingSupported}</li>
      <li>Feedback Comments: {leaveComment}</li>
    
      <button onClick={handleClick}>Submit</button>
    </section>
      </>
  )
}


export default ReviewFeedback;