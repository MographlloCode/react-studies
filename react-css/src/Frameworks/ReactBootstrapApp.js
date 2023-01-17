import React from 'react';
import { Card } from 'react-bootstrap';

const ReactBootstrapApp = () => {
  return (
    <Card bg="dark" text="white" className="m-5">
      <Card.Header>Notebook</Card.Header>
      <Card.Body>
        <Card.Title>Titulo Interno</Card.Title>
        <Card.Text>Esse é o textinhooo</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ReactBootstrapApp;
