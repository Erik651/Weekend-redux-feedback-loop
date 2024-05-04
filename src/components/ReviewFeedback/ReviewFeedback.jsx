import React from 'react';
import { useHistory } from 'react-router-dom';
// import BeingSupported from "../BeingSupported/BeingSupported";
// import FeelingToday from "../FeelingToday/FeelingToday";
// import LeaveComment from "../LeaveComment/LeaveComment";
// import UnderstandingContent from "../UnderstandingContent/UnderstandingContent";
import { useSelector } from 'react-redux';
import axios from 'axios';

function ReviewFeedback() {
  const history = useHistory();
  const feelingToday = useSelector((store) => store.feelingToday);
  const understandingContent = useSelector(
    (store) => store.understandingContent
  );
  const leaveComment = useSelector((store) => store.leaveComment);
  const beingSupported = useSelector((store) => store.beingSupported);
  // const name = useSelector((store) => store.name);

  const handleClick = () => {
    console.log(`adding new feedback submission`, feelingToday);

    const action = {
      feeling: feelingToday,
      understanding: understandingContent,
      support: beingSupported,
      comments: leaveComment
    };
    axios
      .post('/api/feedback', action)
      .then((response) => {
        // call function to add reviews to dom
        // add function to reset survey
        alert(' Headed to Submission Success page');
        history.push('/submissionSuccess');
      })
      .catch((error) => {
        console.log(error);
        alert(`Something went wrong!!`);
      });
  };
  const feelingEdit = () => {
    console.log('editing button');
    history.push('/');
    alert('Proceed to edit "Feeling Today" score');
  };

  const understandingEdit = () => {
    history.push('/understanding');
    alert('Proceed to edit "Understanding Content" score');
  };

  const supportedEdit = () => {
    history.push('/support')
  };

  const commentEdit = () => {
    history.push('/comment')
  };

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

  return (
    <>
      <section>
        <h2>Review Your Feedback</h2>
        <ul>Survey Scores and Comments</ul>
        <li>
          Feeling Today score: {feelingToday}
          <button onClick={feelingEdit}>Edit</button>
        </li>
        <li>
          Understanding Content score: {understandingContent}{' '}
          <button onClick={understandingEdit}>Edit</button>
        </li>
        <li>
          Feeling Supported score: {beingSupported}{' '}
          <button onClick={supportedEdit}>Edit</button>
        </li>
        <li>
          Feedback Comments: {leaveComment}{' '}
          <button onClick={commentEdit}>Edit</button>
        </li>

        <button data-testid="next" onClick={handleClick}>Submit</button>
      </section>
    </>
  );
}

export default ReviewFeedback;
