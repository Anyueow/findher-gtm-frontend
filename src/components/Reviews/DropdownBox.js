import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { IoMdArrowDropdown } from "react-icons/io";
import "./reviewStyles.css";
import "./Dropdown.css";

export const DropdownBox = (props) => {
   const [questions, setQuestions] = useState(false);

  useEffect(() => {
    const shuffledQuestions = shuffleArray(props.questions);
    setQuestions(shuffledQuestions.slice(0, 6));
  }, []);

  const shuffleArray = (array) => {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  

  return (
    <div className="DropDown">
      <Form.Group className="question-grp">
        <div>
          <h5 className="px-2 py-3">Answer one of the following questions:</h5>
          <Form.Select
            style={{ backgroundColor: "#ECEDFF" }}
            className="review-five-drop"
            value={props?.value.question}
            onChange={(e) =>
                props.reponse((prevState) => ({
                  ...prevState,
                  question: e.target.value, // Update the question
                }))
              }
            required
          >
            {questions && questions.map((status, index) => (
                      <option key={index} value={status}>
                        {status}
                      </option>
                    ))}
          </Form.Select>
        </div>
        <div>
          <Form.Control
            as="textarea"
            rows={5}
            className="input-box mt-3"
            placeholder="Type answer here..."
            value={props?.value.answer}
            onChange={(e) =>
                props.reponse((prevState) => ({
                  ...prevState,
                  answer: e.target.value, // Update the answer
                }))
              }
            required
          />
        </div>
      </Form.Group>
    </div>
  );
};
