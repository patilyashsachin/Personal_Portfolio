import './App.css';
import Main from './components/Main/Main'
import Projects from './components/Project/Projects'
import Contact from './components/Contact/Contact.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/Projects' element={<Projects/>} />
          <Route path='/Contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
