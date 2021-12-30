import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddUser from './AddUser';
import './App.css';
import EditUser from './EditUser';
import Home from './Home';

function App() {

return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/add' element={<AddUser />} />
          <Route path='/edit/:id' element={<EditUser />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;