import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Question from './pages/Question'
import Ask from './pages/Ask'
import Navigation from './pages/Navigation';

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/question" element={<Question />} />
        <Route exact path='/ask' component={Ask} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;