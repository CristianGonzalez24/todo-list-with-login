import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<div>Home page</div>}/>
        <Route path='/login' element={<div>Login page</div>}/>
        <Route path='/register' element={<div>Register page</div>}/>
        <Route path='/tasks' element={<div>Tasks page</div>}/>
        <Route path='/add-task' element={<div>Create task page</div>}/>
        <Route path='/tasks/:id' element={<div>Task page</div>}/>
        <Route path='/profile' element={<div>Profile page</div>}/>
      </Routes>
    </Router>
  )
}

export default App
