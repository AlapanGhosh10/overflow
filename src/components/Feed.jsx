import { useState, useEffect } from "react";
import Question from "./Question"
import db from '../data.json'

function Feed() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        // Simulate fetching JSON data asynchronously (you can replace this with real API calls)
        // Here, we are using setTimeout to simulate an asynchronous fetch.
        setTimeout(() => {
        setQuestions(db.questions);
        }, 1000); // Simulating a 1-second delay for demonstration purposes
    }, []);

    return (
        <>
            {questions.map((question) => (
                <div className="q-block" key={question.id}>
                    <Question question={question} />
                </div>
            ))}
        </>
    )
}

export default Feed;