import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

const DishesList = ({ dishes, count, setCount }) => {

  const updateDishCount = (productId, newCount) => {

    //Not to reduce count below zero
    newCount = Math.max(newCount, 0);

    const newDishCount = { ...count };
    newDishCount[productId] = newCount;
    setCount(newDishCount);

  };

  return (
    <Container>
      {dishes.map((dish) =>
        dish.map((item) => (
          <div key={item.dish_id}>
            <Row>
              <Col xs={9} md={11}>
                <Row>
                  <Col xs={"auto"} className="p-0 type-icon">
                    {item.dish_Type == 2 && (
                      <Image src="images/veg.png" fluid />
                    )}
                    {item.dish_Type == 1 && (
                      <Image src="images/non-veg.png" fluid />
                    )}
                  </Col>
                  <Col className="product-desc-col">
                    <h5>{item.dish_name}</h5>
                    <div className="d-flex justify-content-between">
                      <div>
                        <p>
                          <strong>
                            {item.dish_currency} {item.dish_price}
                          </strong>
                        </p>
                      </div>
                      <div>
                        <p>
                          <strong>{item.dish_calories} calories</strong>
                        </p>
                      </div>
                    </div>
                    <p className="product-desc pb-1">{item.dish_description}</p>

                    {item.dish_Availability ? (
                    <div className="d-flex align-items-center justify-content-between button-container">
                      <button
                        className="count-button"
                        onClick={() =>
                          updateDishCount(
                            item.dish_id,
                            (count[item.dish_id] || 0) - 1
                          )
                        }
                      >
                        -
                      </button>
                      <span>{count[item.dish_id] || 0}</span>
                      <button
                        className="count-button"
                        onClick={() =>
                          updateDishCount(
                            item.dish_id,
                            (count[item.dish_id] || 0) + 1
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                    ):(
                        <p className="text-danger">Not available</p>
                    )}

                    {item.addonCat.length>0 && <p className="text-danger">Customisation available</p>}
                  </Col>
                </Row>
              </Col>
              <Col xs={3} md={1}>
                <div className="d-flex align-items-center image-div">
                  <Image className="product-img" src={item.dish_image}></Image>
                </div>
              </Col>
            </Row>
            <hr />
          </div>
        ))
      )}
    </Container>
  );
};

export default DishesList;
