import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";

const ShopCard = ({shopProduct}) => {
  return (
    <>
      <Col lg={3} md={4} sm={6} xs={6} >
        <Card style={{ width: "100%", height: "100%" }}>
          <Card.Img variant="top" src={shopProduct.image} />
          <Card.Body>
            <Card.Title>{shopProduct.title}</Card.Title>
            <Card.Text>{shopProduct.description}</Card.Text>
            <NavLink className="btn btn-primary" to={`/product/${shopProduct.id}`}>
              More info
            </NavLink>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ShopCard;
