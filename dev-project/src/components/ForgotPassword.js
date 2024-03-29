import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert, Container } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'

export default function ForgotPassword() {
    document.title = "Forgot my password"
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    

    async function handleSubmit(e) {

        e.preventDefault()

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further information')
        } catch (err){
            
            if (err.code ==="auth/invalid-email"){
                setError('Email is in wrong format')
            }
            if (err.code ==="auth/user-not-found"){
                setError('There are not user with given e-mail')
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
                            <h2 className='text-center mb-4'>Password Reset</h2>
                            <p className='text-center'>Enter your email and we will send you a link to reset your password.</p>
                            {error && <Alert variant="danger">{error}</Alert>}
                            {message && <Alert variant="success">{message}</Alert>}

                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Control type="email" ref={emailRef} required placeholder='Email' />
                                </Form.Group>
                                <Button id="btn-forgot" disabled={loading} className='w-100 mt-4' type="submit">Reset</Button>
                            </Form>
                            <div className="w-100  text-center mt-2">
                                <Link to="/login" className='text-decoration-none'>Take me back</Link>
                            </div>
                        </Card.Body>
                    </Card>

                </div>
            </Container>

        </div>
    )
}
