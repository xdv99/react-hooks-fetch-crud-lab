import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, handleDeleteQues, handleUpdateQues }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((ques) => (
          <QuestionItem
            key={ques.id}
            question={ques}
            onDelete={handleDeleteQues}
            onUpdate={handleUpdateQues}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
