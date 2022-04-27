import React from 'react'
import {Card, Container, Button} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import  {Link, useNavigate} from 'react-router-dom'
import NavbarMain from './NavbarMain'
export default function Profile() {

    const {currentUser, logout} =  useAuth()
    const navigate = useNavigate()
    document.title = "Profile"

   async function  handleLogout() {

        await logout()
        navigate("/login")
    }
  return (
    <>
    <NavbarMain/>
  <Container
      className="d-flex align-items-center justify-content-center"
      style={{minHeight: "100vh"}}>
          <div className="w-100" style={{maxWidth: "400px"}}>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Profile</h2>
                    <strong>Email: </strong>{currentUser.email}
                    <Link to="/Profile-update" className="btn btn-primary w-100 mt-3">Update profile</Link>
                    <div className="w-100 text-center mt-4">
                    <Button type="link" onClick={handleLogout} style={{backgroundColor: "red", borderColor: "red"}}>Log out</Button>

                    </div>

                </Card.Body>
            </Card>
          </div>
          </Container>
    </>
  )
}
/*
*/