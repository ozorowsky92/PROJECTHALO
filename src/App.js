import './App.css';
import {Routes, Route} from 'react-router-dom'
import Dashboard from './views/Dashboard';
import Testimony from './views/Testimony';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Dashboard/>}/>
        <Route path={'/testimony'} element={<Testimony/>}/>
      </Routes>
    </div>
  );
}

export default App;
