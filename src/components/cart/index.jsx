import { Button } from "@mui/material";
import "./styles.css";
import { Col, Row, Card, Space } from "antd";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import { useNavigate } from "react-router-dom";

const Cart = (props) => {
  const navigate = useNavigate();
  const carData = props.selectedCar;

  return (
    <div>
      <Row>
        <Col
          span={12}
          style={{
            marginLeft: "66%",
            marginTop: "1%",
            position: "fixed",
          }}
        >
          <Space direction="vertical" size={16}>
            <Card
              className="cardShadow"
              style={{
                width: "135%",
                maxWidth: "135%",
                borderRadius: "0px",
              }}
            >
              <div class="imageContainer">
                <img
                  loading="lazy"
                  src={carData?.image}
                  style={{ height: "8.125rem" }}
                  alt="car Image"
                />
              </div>
              <div style={{ paddingBottom: ".625rem" }}>
                <div class="carNameContainer">
                  <div class="carNameInnerContainer">
                    <div class="carName">{`${carData?.carBrand} ${carData?.carName}`}</div>
                    <div class="carType">{carData?.carType}</div>
                  </div>
                  <Button variant="text" style={{ color: "red" }}>
                    CHANGE
                  </Button>
                </div>
              </div>
              <div class="packageOuterContainer">
                <div class="packageInnerContainer">
                  <div class="packageNameContianer">
                    <div class="packageName">
                      <span>Standard Service</span>
                      <br />
                      <span class="oilType">Mobil 5W40 Semi Synthetic</span>
                    </div>
                    <div class="priceOuterContainer">
                      <div class="priceInnerContainer">
                        <div class="priceCntr">
                          <div
                            className="priceInnerCtr"
                            style={{ display: "flex" }}
                          >
                            <div class="oldPrice">₹ 6299</div>
                            <div class="newPrice">₹ 4719</div>
                            <IconButton aria-label="delete">
                              <ClearIcon fontSize="small" />
                            </IconButton>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="_5r5lS"></div>
                </div>
              </div>
              <div className="subTotalContainer">
                <div className="subTotalInnerCntr">
                  <div className="subTotalPriceCntr">
                    {!props.checkout ? (
                      <>
                        <div class="subTotal">Subtotal (1 Items)</div>
                        <div class="finalPrice">₹ 4719</div>
                      </>
                    ) : (
                      <>
                        <div class="subTotal">You Pay</div>
                        <div
                          style={{ marginBottom: "20px" }}
                          class="finalPrice"
                        >
                          ₹ 4719
                        </div>
                      </>
                    )}
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {!props.checkout && (
                      <div class="extraCharges">Extra charges may apply</div>
                    )}
                  </div>
                </div>
              </div>
              {!props.checkout && (
                <Button
                  onClick={() => navigate("/checkout", { state: carData })}
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    margin: "20px",
                    width: "91%",
                  }}
                >
                  Checkout
                </Button>
              )}
            </Card>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default Cart;
