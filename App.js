import React from 'react';
import { Navbar,Form, Button, FormControl } from "react-bootstrap";

function LandingPage() {
  return (
    <React.Fragment>
      <Navbar bg="light" variant="light">
        <Navbar.Brand to="/">App Project</Navbar.Brand>
        <Form>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>

      <Form className="mt-5">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
      </Button>
      </Form>

    </React.Fragment>

  );
}

export default LandingPage;
