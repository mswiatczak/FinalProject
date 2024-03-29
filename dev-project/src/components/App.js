
import React, { useContext } from 'react'
import Signup from './Signup'
import Login from './Login'
import { AuthProvider } from '../contexts/AuthContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from "./Dashboard"
import PrivateRoute from './PrivateRoute'
import ForgotPassword from './ForgotPassword'
import Profile from './Profile'
import TodoPage from './TodoPage'
import Pomodoro from './Pomodoro'
import NotesPage from './NotePage'
import ProfileUpdate from './ProfileUpdate'
import { ThemeContext } from '../contexts/Theme'



function App() {
  const [{ theme }] = useContext(ThemeContext);

  return (


    <div id={theme} className="App">


      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Forgot-password" element={<ForgotPassword />} />
            <Route path="/" element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>} />
            <Route path="/Profile-update" element={
              <PrivateRoute>
                <ProfileUpdate />
              </PrivateRoute>} />
            <Route path="/Profile" element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>} />
            <Route path="/TodoPage" element={
              <PrivateRoute>
                <TodoPage />
              </PrivateRoute>} />
            <Route path="/Notes" element={
              <PrivateRoute>
                <NotesPage />
              </PrivateRoute>} />
            <Route path="/Pomodoro" element={
              <PrivateRoute>
                <Pomodoro />
              </PrivateRoute>} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>


  )
}

export default App;
