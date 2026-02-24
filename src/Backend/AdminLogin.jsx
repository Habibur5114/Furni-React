

import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from 'axios'

export default class AdminLogin extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      loading: false,
      error: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    this.setState({ loading: true, error: '' })

    try {
      const response = await axios.post(
        'https://bader022.apphero.agency/api/login',
        {
          email: this.state.email,
          password: this.state.password,
        }
      )

      localStorage.setItem('admin_token', response.data.token)

      alert('Login Successful')

      window.location.href = '/admin/dashboard'

    } catch (error) {
      this.setState({
        error: error.response?.data?.message || 'Login failed',
        loading: false
      })
    }
  }

  render() {
    return (
      <div
        className="container d-flex align-items-center justify-content-center"
        style={{ minHeight: '100vh' }}
      >
        <div className="row justify-content-center w-100">
          <div className="col-lg-4 col-md-6 shadow p-4 bg-white rounded">

            <div className="text-center py-4">
              <h5>Softvence Delta</h5>
            </div>

            {this.state.error && (
              <div className="alert alert-danger">
                {this.state.error}
              </div>
            )}

            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>

              <Button
                variant="success"
                className="form-control mt-3"
                type="submit"
                disabled={this.state.loading}
              >
                {this.state.loading ? 'Logging in...' : 'Login'}
              </Button>
            </Form>

          </div>
        </div>
      </div>
    )
  }
}
