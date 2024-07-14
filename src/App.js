import './App.css';
import Main from './components/Main/Main'
import Projects from './components/Project/Projects'
import Contact from './components/Contact/Contact.js'
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/Projects' element={<Projects/>} />
          <Route path='/Contact' element={<Contact/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
