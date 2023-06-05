import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Alert } from 'react-bootstrap';

function PurchaseLiveSuccessful() {
  return (
    <Container className="text-center">
      <Row className="my-4">
        <Col md={{ span: 6, offset: 3 }}>
          <Alert variant="success">
            <Alert.Heading>Ticket Purchase Successful!</Alert.Heading>
            <p>Thank you for purchasing the ticket.</p>
            <hr />
            <div className="d-flex justify-content-end">
              <Link to="/dashboard" className="btn btn-success">
                Back to Dashboard
              </Link>
            </div>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}

export default PurchaseLiveSuccessful;
