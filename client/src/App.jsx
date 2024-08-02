import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<div>Home page</div>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/tasks' element={<div>Tasks page</div>}/>
        <Route path='/add-task' element={<div>Create task page</div>}/>
        <Route path='/tasks/:id' element={<div>Task page</div>}/>
        <Route path='/profile' element={<div>Profile page</div>}/>
      </Routes>
    </Router>
  )
}

export default App
