import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import Rating from "../../components/products/Rating";
import { CartContext } from "../CartPage/cart";
import { useHistory } from "react-router-dom";
import products from "../../api/products";

function ProductScreen({ match }) {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const { addToCart } = React.useContext(CartContext);
  // useEffect(async () => {
  //   const url = 'http://localhost:3001/products'
  //   const res = await fetch(url)
  //   const data = await res.json()
  //   // console.log(data[2])
  //   setProduct(
  //     data.find(function (p) {
  //       return p.id == match.params.id
  //     })
  //   )
  //   setLoading(false)
  // }, [])

  useEffect(() => {
    async function fetchMyApi() {
      const url = "http://localhost:3001/products";
      const res = await fetch(url);
      const data = await res.json();
      setProduct(
        data.find(function (p) {
          return p.id === match.params.id;
        })
      );
      setLoading(false);
    }
    fetchMyApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Link className="btn btn-light" to="/products">
        <i className="fas fa-long-arrow-alt-left" size="5x"></i>
      </Link>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Row>
            <Col md={6}>
              {/* fluid - it protects image go out of its own container */}
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} шарҳ`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>Нарх: {product.price}</ListGroup.Item>
                <ListGroup.Item>Изоҳ: {product.description}</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Нақд</Col>
                      <Col>
                        <strong>{product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Рассрочка</Col>
                      <Col>
                        <strong>{product.installmentPrice}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Омборда</Col>
                      <Col>
                        {product.countInStock > 0
                          ? `${product.countInStock} та бор`
                          : "Қолмаган"}
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Button
                      className="btn-block"
                      type="button"
                      // it will check if out of stock, add button will be disabled
                      disabled={product.countInStock === 0}
                      onClick={() => {
                        history.push("/cart");
                        addToCart(product);
                      }}
                    >
                      Саватчага Қўшиш
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
}

export default ProductScreen;
