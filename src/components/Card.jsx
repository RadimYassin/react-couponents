import React from 'react';
import classNames from 'classnames';
import { Container, Body, Title, Text, Image, Button } from './styles/Card';

export function Card({ classes, children, ...restProps }) {
  return (
    <Container className={classNames('card', classes)} {...restProps}>
      {children}
    </Container>
  );
}


Card.Body =function CardBody({ classes, children, ...restProps }){
  return (
    <Body className={classNames('card_body', classes)} {...restProps}>
      {children}
    </Body>
  )
}