import React, { Component } from 'react';
import { Button, Form, Col } from 'react-bootstrap';
export default class Emp1 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (

            <Form>
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Ticket Id :</Form.Label>
                    <Form.Control as="select">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
  </Button>
            </Form>


        )
    }
}