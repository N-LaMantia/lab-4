//imports 
import { useState, useEffect } from 'react';
import './topicPick.css';

//MATH SUBJECTS --------------------------------------------------------------

function CalculusQuiz() {
    const [quizData, setQuizData] = useState(null);
    const [selected, setSelected] = useState({ questionIndex: null, option: null });

    useEffect(() => {
        try {
            fetch('/api/quiz/calculus')
                .then(res => res.json())
                .then(data => setQuizData(data))
        }
        catch {
            console.log("Something went wrong. Not fetching.")
        }
    }, []);
    // Helper to render a question with options and answer (function inside function!)
    // qIdx = question index
    // q = question object
    const renderQuestion = (q, qIdx) => (
        <div key={qIdx}>
            <h3>{q.question}</h3>

            {q.options.map((option, idx) => (
                <div list-style-type="none" key={idx}>
                    <button key={idx} onClick={() => setSelected({ questionIndex: qIdx, option })}>
                        {option}
                    </button>
                </div>
            ))}

            {selected.questionIndex === qIdx && (
                <div className="selected-answer">
                    <h3>Your selected answer: {selected.option}</h3>
                    <h3>Correct answer: {q.answer}</h3>
                </div>
            )}
        </div>
    );

    return (
        <div className="calc-quiz-container">
            <h3>{quizData ? quizData.title : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? quizData.quizMessage : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? `Number of Questions: ${quizData.questions.length}` : 'Loading...'}</h3>
            <br />
            <hr />
            {quizData
                ? quizData.questions.map((q, qIdx) => renderQuestion(q, qIdx))
                : 'Loading...'}
            <br />
        </div>
    );

}


function AlgebraQuiz() {
    const [quizData, setQuizData] = useState(null);
    const [selected, setSelected] = useState({ questionIndex: null, option: null });

    useEffect(() => {
        try {
            fetch('/api/quiz/algebra')
                .then(res => res.json())
                .then(data => setQuizData(data))
        }
        catch {
            console.log("Something went wrong. Not fetching.")
        }
    }, []);

    const renderQuestion = (q, qIdx) => (
        <div key={qIdx}>
            <h3>{q.question}</h3>

            {q.options.map((option, idx) => (
                <div list-style-type="none" key={idx}>
                    <button key={idx} onClick={() => setSelected({ questionIndex: qIdx, option })}>
                        {option}
                    </button>
                </div>
            ))}

            {selected.questionIndex === qIdx && (
                <div className="selected-answer">
                    <h3>Your selected answer: {selected.option}</h3>
                    <h3>Correct answer: {q.answer}</h3>
                </div>
            )}
        </div>
    );



    return (
        <div className="algebra-quiz-container">
            <h3>{quizData ? quizData.title : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? quizData.quizMessage : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? `Number of Questions: ${quizData.questions.length}` : 'Loading...'}</h3>
            <br />
            <hr />
            {quizData
                ? quizData.questions.map((q, qIdx) => renderQuestion(q, qIdx))
                : 'Loading...'}
            <br />
        </div>
    );
}

function GeometryQuiz() {

    const [quizData, setQuizData] = useState(null);
    const [selected, setSelected] = useState({ questionIndex: null, option: null });

    useEffect(() => {
        try {
            fetch('/api/quiz/geometry')
                .then(res => res.json())
                .then(data => setQuizData(data))
        }
        catch {
            console.log("Something went wrong. Not fetching.")
        }
    }, []);

    const renderQuestion = (q, qIdx) => (
        <div key={qIdx}>
            <h3>{q.question}</h3>

            {q.options.map((option, idx) => (
                <div list-style-type="none" key={idx}>
                    <button key={idx} onClick={() => setSelected({ questionIndex: qIdx, option })}>
                        {option}
                    </button>
                </div>
            ))}

            {selected.questionIndex === qIdx && (
                <div className="selected-answer">
                    <h3>Your selected answer: {selected.option}</h3>
                    <h3>Correct answer: {q.answer}</h3>
                </div>
            )}
        </div>
    );

    return (
        <div className="geometry-quiz-container">
            <h3>{quizData ? quizData.title : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? quizData.quizMessage : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? `Number of Questions: ${quizData.questions.length}` : 'Loading...'}</h3>
            <br />
            <hr />
            {quizData
                ? quizData.questions.map((q, qIdx) => renderQuestion(q, qIdx))
                : 'Loading...'}
            <br />
        </div>
    )
}

export { CalculusQuiz };
export { AlgebraQuiz };
export { GeometryQuiz };

//HISTORY SUBJECTS -------------------------------------------------------------
function CanadaHistoryQuiz() {
    const [quizData, setQuizData] = useState(null);
    const [selected, setSelected] = useState({ questionIndex: null, option: null });

    useEffect(() => {
        try {
            fetch('/api/quiz/canada')
                .then(res => res.json())
                .then(data => setQuizData(data))
        }
        catch {
            console.log("Something went wrong. Not fetching.")
        }
    }, []);


    const renderQuestion = (q, qIdx) => (
        <div key={qIdx}>
            <h3>{q.question}</h3>

            {q.options.map((option, idx) => (
                <div list-style-type="none" key={idx}>
                    <button key={idx} onClick={() => setSelected({ questionIndex: qIdx, option })}>
                        {option}
                    </button>
                </div>
            ))}

            {selected.questionIndex === qIdx && (
                <div className="selected-answer">
                    <h3>Your selected answer: {selected.option}</h3>
                    <h3>Correct answer: {q.answer}</h3>
                </div>
            )}
        </div>
    );

    return (
        <div className="canada-quiz-container">
            <h3>{quizData ? quizData.title : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? quizData.quizMessage : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? `Number of Questions: ${quizData.questions.length}` : 'Loading...'}</h3>
            <br />
            <hr />
            {quizData
                ? quizData.questions.map((q, qIdx) => renderQuestion(q, qIdx))
                : 'Loading...'}
            <br />
        </div>
    )
}

function UsaHistoryQuiz() {
    const [quizData, setQuizData] = useState(null);
    const [selected, setSelected] = useState({ questionIndex: null, option: null });

    useEffect(() => {
        try {
            fetch('/api/quiz/us')
                .then(res => res.json())
                .then(data => setQuizData(data))
        }
        catch {
            console.log("Something went wrong. Not fetching.")
        }
    }, []);

    const renderQuestion = (q, qIdx) => (
        <div key={qIdx}>
            <h3>{q.question}</h3>

            {q.options.map((option, idx) => (
                <div list-style-type="none" key={idx}>
                    <button key={idx} onClick={() => setSelected({ questionIndex: qIdx, option })}>
                        {option}
                    </button>
                </div>
            ))}

            {selected.questionIndex === qIdx && (
                <div className="selected-answer">
                    <h3>Your selected answer: {selected.option}</h3>
                    <h3>Correct answer: {q.answer}</h3>
                </div>
            )}
        </div>
    );
    return (
        <div className="USA-quiz-container">
            <h3>{quizData ? quizData.title : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? quizData.quizMessage : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? `Number of Questions: ${quizData.questions.length}` : 'Loading...'}</h3>
            <br />
            <hr />
            {quizData
                ? quizData.questions.map((q, qIdx) => renderQuestion(q, qIdx))
                : 'Loading...'}
            <br />
        </div>
    )
}
function JapanHistoryQuiz() {

    const [quizData, setQuizData] = useState(null);
    const [selected, setSelected] = useState({ questionIndex: null, option: null });

    useEffect(() => {
        try {
            fetch('/api/quiz/japan')
                .then(res => res.json())
                .then(data => setQuizData(data))
        }
        catch {
            console.log("Something went wrong. Not fetching.")
        }
    }, []);

    const renderQuestion = (q, qIdx) => (
        <div key={qIdx}>
            <h3>{q.question}</h3>

            {q.options.map((option, idx) => (
                <div list-style-type="none" key={idx}>
                    <button key={idx} onClick={() => setSelected({ questionIndex: qIdx, option })}>
                        {option}
                    </button>
                </div>
            ))}

            {selected.questionIndex === qIdx && (
                <div className="selected-answer">
                    <h3>Your selected answer: {selected.option}</h3>
                    <h3>Correct answer: {q.answer}</h3>
                </div>
            )}
        </div>
    );
    return (
        <div className="japan-quiz-container">
            <h3>{quizData ? quizData.title : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? quizData.quizMessage : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? `Number of Questions: ${quizData.questions.length}` : 'Loading...'}</h3>
            <br />
            <hr />
            {quizData
                ? quizData.questions.map((q, qIdx) => renderQuestion(q, qIdx))
                : 'Loading...'}
            <br />
        </div>
    )
}
export { CanadaHistoryQuiz };
export { UsaHistoryQuiz };
export { JapanHistoryQuiz };

//SCIENCE SUBJECTS -------------------------------------------------------------
function PhysicsQuiz() {

    const [quizData, setQuizData] = useState(null);
    const [selected, setSelected] = useState({ questionIndex: null, option: null });

    useEffect(() => {
        try {
            fetch('/api/quiz/physics')
                .then(res => res.json())
                .then(data => setQuizData(data))
        }
        catch {
            console.log("Something went wrong. Not fetching.")
        }
    }, []);

    const renderQuestion = (q, qIdx) => (
        <div key={qIdx}>
            <h3>{q.question}</h3>

            {q.options.map((option, idx) => (
                <div list-style-type="none" key={idx}>
                    <button key={idx} onClick={() => setSelected({ questionIndex: qIdx, option })}>
                        {option}
                    </button>
                </div>
            ))}

            {selected.questionIndex === qIdx && (
                <div className="selected-answer">
                    <h3>Your selected answer: {selected.option}</h3>
                    <h3>Correct answer: {q.answer}</h3>
                </div>
            )}
        </div>
    );

    return (
        <div className="physics-quiz-container">
            <h3>{quizData ? quizData.title : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? quizData.quizMessage : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? `Number of Questions: ${quizData.questions.length}` : 'Loading...'}</h3>
            <br />
            <hr />
            {quizData
                ? quizData.questions.map((q, qIdx) => renderQuestion(q, qIdx))
                : 'Loading...'}
            <br />
        </div>
    )
}

function ChemistryQuiz() {
    const [quizData, setQuizData] = useState(null);
    const [selected, setSelected] = useState({ questionIndex: null, option: null });

    useEffect(() => {
        try {
            fetch('/api/quiz/chemistry')
                .then(res => res.json())
                .then(data => setQuizData(data))
        }
        catch {
            console.log("Something went wrong. Not fetching.")
        }
    }, []);

    const renderQuestion = (q, qIdx) => (
        <div key={qIdx}>
            <h3>{q.question}</h3>

            {q.options.map((option, idx) => (
                <div list-style-type="none" key={idx}>
                    <button key={idx} onClick={() => setSelected({ questionIndex: qIdx, option })}>
                        {option}
                    </button>
                </div>
            ))}

            {selected.questionIndex === qIdx && (
                <div className="selected-answer">
                    <h3>Your selected answer: {selected.option}</h3>
                    <h3>Correct answer: {q.answer}</h3>
                </div>
            )}
        </div>
    );

    return (
        <div className="chemistry-quiz-container">
            <h3>{quizData ? quizData.title : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? quizData.quizMessage : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? `Number of Questions: ${quizData.questions.length}` : 'Loading...'}</h3>
            <br />
            <hr />
            {quizData
                ? quizData.questions.map((q, qIdx) => renderQuestion(q, qIdx))
                : 'Loading...'}
            <br />
        </div>
    )
}
function BiologyQuiz() {
    const [quizData, setQuizData] = useState(null);
    const [selected, setSelected] = useState({ questionIndex: null, option: null });

    useEffect(() => {
        try {
            fetch('/api/quiz/biology')
                .then(res => res.json())
                .then(data => setQuizData(data))
        }
        catch {
            console.log("Something went wrong. Not fetching.")
        }
    }, []);

    const renderQuestion = (q, qIdx) => (
        <div key={qIdx}>
            <h3>{q.question}</h3>

            {q.options.map((option, idx) => (
                <div list-style-type="none" key={idx}>
                    <button key={idx} onClick={() => setSelected({ questionIndex: qIdx, option })}>
                        {option}
                    </button>
                </div>
            ))}

            {selected.questionIndex === qIdx && (
                <div className="selected-answer">
                    <h3>Your selected answer: {selected.option}</h3>
                    <h3>Correct answer: {q.answer}</h3>
                </div>
            )}
        </div>
    );

    return (
        <div className="biology-quiz-container">
            <h3>{quizData ? quizData.title : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? quizData.quizMessage : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? `Number of Questions: ${quizData.questions.length}` : 'Loading...'}</h3>
            <br />
            <hr />
            {quizData
                ? quizData.questions.map((q, qIdx) => renderQuestion(q, qIdx))
                : 'Loading...'}
            <br />
        </div>
    )
}

export { PhysicsQuiz };
export { ChemistryQuiz };
export { BiologyQuiz };

//LITERATURE SUBJECTS ----------------------------------------------------------
function PoetryQuiz() {
    const [quizData, setQuizData] = useState(null);
    const [selected, setSelected] = useState({ questionIndex: null, option: null });

    useEffect(() => {
        try {
            fetch('/api/quiz/poetry')
                .then(res => res.json())
                .then(data => setQuizData(data))
        }
        catch {
            console.log("Something went wrong. Not fetching.")
        }
    }, []);

    const renderQuestion = (q, qIdx) => (
        <div key={qIdx}>
            <h3>{q.question}</h3>

            {q.options.map((option, idx) => (
                <div list-style-type="none" key={idx}>
                    <button key={idx} onClick={() => setSelected({ questionIndex: qIdx, option })}>
                        {option}
                    </button>
                </div>
            ))}

            {selected.questionIndex === qIdx && (
                <div className="selected-answer">
                    <h3>Your selected answer: {selected.option}</h3>
                    <h3>Correct answer: {q.answer}</h3>
                </div>
            )}
        </div>
    );

    return (
        <div className="poetry-quiz-container">
            <h3>{quizData ? quizData.title : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? quizData.quizMessage : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? `Number of Questions: ${quizData.questions.length}` : 'Loading...'}</h3>
            <br />
            <hr />
            {quizData
                ? quizData.questions.map((q, qIdx) => renderQuestion(q, qIdx))
                : 'Loading...'}
            <br />
        </div>
    )
}

function NovelQuiz() {

    const [quizData, setQuizData] = useState(null);
    const [selected, setSelected] = useState({ questionIndex: null, option: null });

    useEffect(() => {
        try {
            fetch('/api/quiz/novels')
                .then(res => res.json())
                .then(data => setQuizData(data))
        }
        catch {
            console.log("Something went wrong. Not fetching.")
        }
    }, []);

    const renderQuestion = (q, qIdx) => (
        <div key={qIdx}>
            <h3>{q.question}</h3>

            {q.options.map((option, idx) => (
                <div list-style-type="none" key={idx}>
                    <button key={idx} onClick={() => setSelected({ questionIndex: qIdx, option })}>
                        {option}
                    </button>
                </div>
            ))}

            {selected.questionIndex === qIdx && (
                <div className="selected-answer">
                    <h3>Your selected answer: {selected.option}</h3>
                    <h3>Correct answer: {q.answer}</h3>
                </div>
            )}
        </div>
    );

    return (
        <div className="novels-quiz-container">
            <h3>{quizData ? quizData.title : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? quizData.quizMessage : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? `Number of Questions: ${quizData.questions.length}` : 'Loading...'}</h3>
            <br />
            <hr />
            {quizData
                ? quizData.questions.map((q, qIdx) => renderQuestion(q, qIdx))
                : 'Loading...'}
            <br />
        </div>
    )
}

function PlayQuiz() {
    const [quizData, setQuizData] = useState(null);
    const [selected, setSelected] = useState({ questionIndex: null, option: null });

    useEffect(() => {
        try {
            fetch('/api/quiz/plays')
                .then(res => res.json())
                .then(data => setQuizData(data))
        }
        catch {
            console.log("Something went wrong. Not fetching.")
        }
    }, []);

    const renderQuestion = (q, qIdx) => (
        <div key={qIdx}>
            <h3>{q.question}</h3>

            {q.options.map((option, idx) => (
                <div list-style-type="none" key={idx}>
                    <button key={idx} onClick={() => setSelected({ questionIndex: qIdx, option })}>
                        {option}
                    </button>
                </div>
            ))}

            {selected.questionIndex === qIdx && (
                <div className="selected-answer">
                    <h3>Your selected answer: {selected.option}</h3>
                    <h3>Correct answer: {q.answer}</h3>
                </div>
            )}
        </div>
    );

    return (
        <div className="plays-quiz-container">
            <h3>{quizData ? quizData.title : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? quizData.quizMessage : 'Loading...'}</h3>
            <br />
            <h3>{quizData ? `Number of Questions: ${quizData.questions.length}` : 'Loading...'}</h3>
            <br />
            <hr />
            {quizData
                ? quizData.questions.map((q, qIdx) => renderQuestion(q, qIdx))
                : 'Loading...'}
            <br />
        </div>
    )
}
export { PoetryQuiz };
export { NovelQuiz };
export { PlayQuiz };