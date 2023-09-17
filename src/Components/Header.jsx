import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FaShoppingCart } from "react-icons/fa";

const Header = ({count}) => {

  // Take the total count
  const totalCount = Object.values(count).reduce(
    (total, count) => total + count,
    0
  );

  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Uni Resto Cafe</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
              My Orders
          </Navbar.Text>
          <Navbar.Text>
            <div className="cart-icon ms-3">
  
                <FaShoppingCart />
                {totalCount > 0 && (
                  <div className="item-count-badge">{totalCount}</div>
                )}

            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
