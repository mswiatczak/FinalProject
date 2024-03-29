import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert, Container } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import '../App.css'
export default function Login() {
    document.title = "Login"
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()


    async function handleSubmit(e) {

        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate("/")

        } catch (err) {
            if (err.code === 'auth/user-not-found') {
                setError('User with given email doesn\'t exist')
            }
            if (err.code === 'auth/wrong-password') {
                setError('Wrong password')
            }
            if (err.code === 'auth/user-disabled') {
                setError('Your account has been disabled');
            }
        }
        setLoading(false)
    }


    return (
        <div className="background-gradient">
            <Container
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}>
                <div className="w-100 black-text" style={{ maxWidth: "500px" }}>
                    <Card>
                        <Card.Body>
                            <h2 className='text-center mb-4'>Login</h2>
                            
                            {error && <Alert variant="danger">  {error} </Alert>}

                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email" className='mt-3'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        ref={emailRef}
                                        required
                                        placeholder='Enter your email' />
                                </Form.Group>
                                <Form.Group id="password" className='mt-3'>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        ref={passwordRef}
                                        required
                                        placeholder='Enter your password' />
                                </Form.Group>
                                <Button id="btn-login" disabled={loading} className='w-100 mt-4' type="submit">Login</Button>
                            </Form>
                            <div className="w-100 text-center mt-3">
                                <Link className="text-decoration-none" to="/forgot-password">Forgot password?</Link>
                            </div>
                        </Card.Body>
                    </Card>
                    <div className="form-nav-box">
                        Need an account? <Link className="form-nav-link" to="/Signup">Sign up</Link></div>
                </div>
            </Container>
        </div>

    )
}
