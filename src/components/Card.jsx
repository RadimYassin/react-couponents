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

Card.Title=function CardTitle({ classes, children, ...restProps }){
  return  (
    <Title  className={classNames('card_title', classes)} {...restProps}>
      {children}
    </Title>
  )
}
Card.Text=function CardText({ classes, children, ...restProps }){
  return  (
    <Text  className={classNames('card_text', classes)} {...restProps}>
      {children}
    </Text>
  )
}

Card.Btn=function CardBtn({ classes, children, ...restProps }){
  return  (
    <Button  className={classNames('card_btn', classes)} {...restProps}>
      {children}
    </Button>
  )
}

Card.Img=function CardImg({ classes, alt,src, ...restProps }){
  return  (
     <Image
       src={src}
       alt={alt}
       className={classNames("card_img",classes)}
       {...restProps}
     
     />
  )
}
