import { useState } from 'react'
import './App.css'
import { CalculusQuiz } from './topicPick.jsx';
import { AlgebraQuiz } from './topicPick.jsx';
import { GeometryQuiz } from './topicPick.jsx';
import { CanadaHistoryQuiz } from './topicPick.jsx';
import { UsaHistoryQuiz } from './topicPick.jsx';
import { JapanHistoryQuiz } from './topicPick.jsx';
import { PhysicsQuiz } from './topicPick.jsx';
import { ChemistryQuiz } from './topicPick.jsx';
import { BiologyQuiz } from './topicPick.jsx';
import { PoetryQuiz } from './topicPick.jsx';
import { NovelQuiz } from './topicPick.jsx';
import { PlayQuiz } from './topicPick.jsx';


function App() {
  //state variables to track which topic buttons have been clicked 
  const [viewMathTopics, setViewMathTopics] = useState(false)
  const [viewHistoryTopics, setViewHistoryTopics] = useState(false)
  const [viewScienceTopics, setViewScienceTopics] = useState(false)
  const [viewLiteratureTopics, setViewLiteratureTopics] = useState(false)

  //state variables to track which specific topic buttons have been clicked
  const [viewCalculusQuiz, setViewCalculusQuiz] = useState(false)
  const [viewAlgebraQuiz, setViewAlgebraQuiz] = useState(false)
  const [viewGeometryQuiz, setViewGeometryQuiz] = useState(false)

  const [viewCanadaHistoryQuiz, setViewCanadaHistoryQuiz] = useState(false)
  const [viewUSAHistoryQuiz, setViewUSAHistoryQuiz] = useState(false)
  const [viewJapanHistoryQuiz, setViewJapanHistoryQuiz] = useState(false)

  const [viewPhysicsQuiz, setViewPhysicsQuiz] = useState(false)
  const [viewChemistryQuiz, setViewChemistryQuiz] = useState(false)
  const [viewBiologyQuiz, setViewBiologyQuiz] = useState(false)

  const [viewPoetryQuiz, setViewPoetryQuiz] = useState(false)
  const [viewNovelQuiz, setViewNovelQuiz] = useState(false)
  const [viewPlayQuiz, setViewPlayQuiz] = useState(false)



  //functions to handle general button clicks 
  function handleMathClick() {
    setViewMathTopics(true);
    setViewHistoryTopics(false);
    setViewScienceTopics(false);
    setViewLiteratureTopics(false);
  }

  function handleHistoryClick() {
    setViewHistoryTopics(true);
    setViewMathTopics(false);
    setViewScienceTopics(false);
    setViewLiteratureTopics(false);
  }

  function handleScienceClick() {
    setViewScienceTopics(true);
    setViewMathTopics(false);
    setViewHistoryTopics(false);
    setViewLiteratureTopics(false);
  }

  function handleLiteratureClick() {
    setViewLiteratureTopics(true);
    setViewMathTopics(false);
    setViewHistoryTopics(false);
    setViewScienceTopics(false);
  }

  //functions to handle specific topic button clicks
  function handleCalculusClick() {
    setViewCalculusQuiz(true);
    setViewAlgebraQuiz(false);
    setViewGeometryQuiz(false);
  }

  function handleAlgebraClick() {
    setViewAlgebraQuiz(true);
    setViewCalculusQuiz(false);
    setViewGeometryQuiz(false);
  }

  function handleGeometryClick() {
    setViewGeometryQuiz(true);
    setViewCalculusQuiz(false);
    setViewAlgebraQuiz(false);
  }

  function handleCanadaHistoryClick() {
    setViewCanadaHistoryQuiz(true);
    setViewUSAHistoryQuiz(false);
    setViewJapanHistoryQuiz(false);
  }

  function handleUSAHistoryClick() {
    setViewUSAHistoryQuiz(true);
    setViewCanadaHistoryQuiz(false);
    setViewJapanHistoryQuiz(false);
  }

  function handleJapanHistoryClick() {
    setViewJapanHistoryQuiz(true);
    setViewCanadaHistoryQuiz(false);
    setViewUSAHistoryQuiz(false);
  }

  function handlePhysicsClick() {
    setViewPhysicsQuiz(true);
    setViewChemistryQuiz(false);
    setViewBiologyQuiz(false);
  }

  function handleChemistryClick() {
    setViewChemistryQuiz(true);
    setViewPhysicsQuiz(false);
    setViewBiologyQuiz(false);
  }

  function handleBiologyClick() {
    setViewBiologyQuiz(true);
    setViewPhysicsQuiz(false);
    setViewChemistryQuiz(false);
  }

  function handlePoetryClick() {
    setViewPoetryQuiz(true);
    setViewNovelQuiz(false);
    setViewPlayQuiz(false);
  }

  function handleNovelClick() {
    setViewPoetryQuiz(false);
    setViewNovelQuiz(true);
    setViewPlayQuiz(false);
  }

  function handlePlayClick() {
    setViewPlayQuiz(true);
    setViewPoetryQuiz(false);
    setViewNovelQuiz(false);
  }

  //RETURN STATEMENT ----------------------------------------------------
  return (
    <>
      <h1 className="page-title">Welcome to Quick Quizzes!</h1>
      <br></br>
      <br></br>
      <div className="topic-container">
        <button className="math-button" onClick={handleMathClick}>Math</button>
        <button className="history-button" onClick={handleHistoryClick}>History</button>
        <button className="science-button" onClick={handleScienceClick}>Science</button>
        <button className="literature-button" onClick={handleLiteratureClick}>Literature</button>
      </div >
      {viewMathTopics && (
        <>
          <h1 className="math-title">Math Topics</h1>
          <br></br>
          <br></br>
          <div className="math-topic-container">

            <button className="Calculus Quiz" onClick={handleCalculusClick}>Calculus</button>

            <button className="Algebra Quiz" onClick={handleAlgebraClick}>Algebra</button>

            <button className="Geometry Quiz" onClick={handleGeometryClick}>Geometry</button>
          </div >
          {viewCalculusQuiz && <CalculusQuiz />}
          {viewAlgebraQuiz && <AlgebraQuiz />}
          {viewGeometryQuiz && <GeometryQuiz />}
        </>
      )}
      {viewHistoryTopics && (
        <>
          <h1 className="history-title">History Topics</h1>
          <br></br>
          <br></br>
          <div className="history-topic-container">
            <button className="Canada History Quiz" onClick={handleCanadaHistoryClick}>Canadian History</button>
            <button className="USA History Quiz" onClick={handleUSAHistoryClick}>USA History</button>
            <button className="Japan History Quiz" onClick={handleJapanHistoryClick}>Japan History</button>
          </div >
          {viewCanadaHistoryQuiz && <CanadaHistoryQuiz />}
          {viewUSAHistoryQuiz && <UsaHistoryQuiz />}
          {viewJapanHistoryQuiz && <JapanHistoryQuiz />}
        </>
      )}
      {viewScienceTopics && (
        <>
          <h1 className="science-title">Science Topics</h1>
          <br></br>
          <br></br>
          <div className="science-topic-container">
            <button className="Physics Quiz" onClick={handlePhysicsClick}>Physics</button>
            <button className="Chemistry Quiz" onClick={handleChemistryClick}>Chemistry</button>
            <button className="Biology Quiz" onClick={handleBiologyClick}>Biology</button>
          </div >
          {viewPhysicsQuiz && <PhysicsQuiz />}
          {viewChemistryQuiz && <ChemistryQuiz />}
          {viewBiologyQuiz && <BiologyQuiz />}
        </>
      )}
      {viewLiteratureTopics && (
        <>
          <h1 className="literature-title">Literature Topics</h1>
          <br></br>
          <br></br>
          <div className="literature-topic-container">
            <button className="Poetry Quiz" onClick={handlePoetryClick}>Poetry</button>
            <button className="Novel Quiz" onClick={handleNovelClick}>Novels</button>
            <button className="Play Quiz" onClick={handlePlayClick}>Plays</button>
          </div >
          {viewPoetryQuiz && <PoetryQuiz />}
          {viewNovelQuiz && <NovelQuiz />}
          {viewPlayQuiz && <PlayQuiz />}
        </>
      )}
    </> //return end tag
  )
}

export default App
