import { useState } from "react";
import { Col, Row, Card, Space, Form, Input, Button } from "antd";
import Typography from "@mui/material/Typography";
import { StarFilled } from "@ant-design/icons";
import "./styles.css";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Link } from "react-router-dom";

const Menus = () => {
  const menu = [
    { id: 1, name: "Periodic Services", imageUrl: "Periodic Services.png" },
    { id: 2, name: "Batteries", imageUrl: "Batteries.svg" },
    { id: 3, name: "Tyres & Wheel Care", imageUrl: "Tyres & Wheel Care.svg" },
    { id: 4, name: "Denting & Painting", imageUrl: "Denting & Painting.png" },
    { id: 5, name: "Car Spa & Cleaning", imageUrl: "Car Spa & Cleaning.png" },
    { id: 6, name: "Car Inspections", imageUrl: "Car Inspections.png" },
    {
      id: 7,
      name: "Windshields & Lights",
      imageUrl: "Windshields & Lights.png",
    },
    {
      id: 8,
      name: "Suspension & Fitments",
      imageUrl: "Suspension & Fitment.png",
    },
    { id: 9, name: "Clutch & Body Parts", imageUrl: "Clutch & Body Parts.png" },
    { id: 10, name: "Insurance Claims", imageUrl: "Insurance Claims.svg" },
  ];

  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          color: "black",
          padding: "30px",
          paddingRight: "40%",
        }}
      >
        <hr
          style={{
            height: "3px",
            background: "red",
            marginTop: "10px",
            marginBottom: "10px",
            marginRight: "85%",
          }}
        />
        <h2>Car Services Available In Ghaziabad</h2>
        <br></br>
        <p>
          Get discounted professional periodic car service and repair, wheel
          care, cashless insurance claim and much more in the Silicon Valley of
          India; Ghaziabad.
        </p>
        <div className="row">
          {menu.map((element) => (
            <div className="column" key={element.id}>
              <Link
                to={"/services"}
                style={{
                  textDecoration: "none",
                  color: "#FFF",
                  justifySelf: "center",
                }}
              >
                <div className="menu">
                  <div className="items">
                    <img
                      src={`/Menu/${element.imageUrl}`}
                      width={100}
                      height={100}
                      alt="Picture of the author"
                    />
                    <span style={{ color: "black" }}>{element.name}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <hr
          style={{
            height: "3px",
            background: "red",
            marginTop: "50px",
            marginBottom: "30px",
            marginRight: "85%",
          }}
        />
        <div className="miles">
          <a href="#" style={{ textDecoration: "none", color: "#FFF" }}>
            <img src="/Images/miles.png" alt="miles" className="milesImage" />
          </a>
        </div>
        <hr
          style={{
            height: "3px",
            background: "red",
            marginTop: "50px",
            marginBottom: "30px",
            marginRight: "85%",
          }}
        />
        <h2>Curated Custom Services</h2>
        <br />
        <div className="curated">
          <div
            className="curatedGrid"
            style={{ gridTemplateColumns: "repeat(14, 1fr)", display: "grid" }}
          >
            <a
              href="#"
              className="curatedAnchor"
              style={{ textDecoration: "none", color: "rgb(255, 255, 255)" }}
            >
              <img
                src="https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/battery_image_for_curated_section_large/liveguard-battery-140.png"
                alt=""
                className="curatedImage"
              />
              <div className="curatedName">
                <div className="curatedTitle">Batteries</div>
              </div>
            </a>

            {/* temp */}

            <a
              href="#"
              className="curatedAnchor"
              style={{ textDecoration: "none", color: "rgb(255, 255, 255)" }}
            >
              <img
                src="https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/car_parts_icons/brakes_2/xxhdpi.png"
                alt=""
                className="curatedImage"
              />
              <div className="curatedName">
                <div className="curatedTitle">Brakes</div>
              </div>
            </a>

            <a
              href="#"
              className="curatedAnchor"
              style={{ textDecoration: "none", color: "rgb(255, 255, 255)" }}
            >
              <img
                src="https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/car_parts_icons/ac_parts_2/xxhdpi.png"
                alt=""
                className="curatedImage"
              />
              <div className="curatedName">
                <div className="curatedTitle">AC Parts</div>
              </div>
            </a>
            <a
              href="#"
              className="curatedAnchor"
              style={{ textDecoration: "none", color: "rgb(255, 255, 255)" }}
            >
              <img
                src="https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/car_parts_icons/clutch_2/xxhdpi.png"
                alt=""
                className="curatedImage"
              />
              <div className="curatedName">
                <div className="curatedTitle">Clutch</div>
              </div>
            </a>
          </div>
        </div>
        <hr
          style={{
            height: "3px",
            background: "red",
            marginTop: "50px",
            marginBottom: "30px",
            marginRight: "85%",
          }}
        />
        <h2>Get Summer Ready With Auto Retails</h2>
        <br />
        <div className="getReady">
          <div
            style={{
              alignItems: "inherit",
              marginTop: "10px",
            }}
          >
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "rgb(255, 255, 255)",
                marginRight: "10px",
              }}
            >
              <img
                className="getReadyImage"
                src="https://gomechprod.blob.core.windows.net/retail-carousel/indianewperformance_banner1prob00.jpg%3Fv%3D1708602764.48734?version=1708602765.251454"
              />
            </a>
            {/* <div className="getReadyName">
              <div className="getReadyTitle">Front Bumper Paint</div>
            </div> */}

            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "rgb(255, 255, 255)",
                marginRight: "10px",
              }}
            >
              <img
                className="getReadyImage"
                src="https://gomechprod.blob.core.windows.net/retail-carousel/indianewperformance_banner1prob01.jpg%3Fv%3D1708602493.489522?version=1708602494.186614"
              />
            </a>
            {/* <div className="getReadyName">
              <div className="getReadyTitle">Front Bumper Paint</div>
            </div> */}
            <a
              href="#"
              style={{ textDecoration: "none", color: "rgb(255, 255, 255)" }}
            >
              <img
                className="getReadyImage"
                src="https://gomechprod.blob.core.windows.net/retail-carousel/indianewperformance_banner1prob02.jpg%3Fv%3D1708666321.121104?version=1708666321.92245"
              />
            </a>
          </div>
        </div>
        <hr
          style={{
            height: "3px",
            background: "red",
            marginTop: "50px",
            marginBottom: "30px",
            marginRight: "85%",
          }}
        />
        <h2> Choose the Workshop Near You</h2>
        <p>Schedule a Pickup Today!</p>
      </div>
    </>
  );
};

const HomePage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [car, setCar] = useState("");
  const handleLogin = () => {
    // Handle login logic here
    console.log("Logging in with:", username, password);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: 'url("/images/Background-01.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "90vh",
        }}
      >
        <div>
          <Row>
            <Col span={12}>
              {" "}
              <img
                src="/Images/Dashboard-01.png"
                alt="Your Image"
                width={"100%"}
                style={{ marginBottom: "0.5rem" }}
              />
            </Col>
            <Col
              span={12}
              style={{ marginLeft: "68%", marginTop: "2%", position: "fixed" }}
            >
              <Space direction="vertical" size={16}>
                <Card
                  className="cardShadow"
                  style={{
                    padding: "24px",
                    width: "107%",
                    borderRadius: "0px",
                  }}
                >
                  <div style={{ marginLeft: "6%" }}>
                    {" "}
                    <Typography
                      variant="h6"
                      noWrap
                      component="a"
                      sx={{
                        mr: 2,
                        display: { xs: "none", md: "flex" },
                        fontWeight: 700,
                        color: "inherit",
                        textDecoration: "none",
                        fontSize: "25px",
                        marginBottom: "-12px",
                      }}
                    >
                      Experience The Best
                    </Typography>
                    <Typography
                      variant="h6"
                      noWrap
                      component="a"
                      sx={{
                        fontSize: "25px",
                        mr: 2,
                        display: { xs: "none", md: "flex" },
                        fontWeight: 700,
                        // letterSpacing: ".3rem",
                        color: "inherit",
                        textDecoration: "none",
                        marginBottom: "-12px",
                      }}
                    >
                      Car Services in
                    </Typography>
                    <Typography
                      variant="h6"
                      noWrap
                      component="a"
                      sx={{
                        fontSize: "25px",
                        mr: 2,
                        display: { xs: "none", md: "flex" },
                        fontWeight: 700,
                        // letterSpacing: ".3rem",
                        color: "inherit",
                        textDecoration: "none",
                      }}
                    >
                      Ghaziabad
                    </Typography>
                  </div>

                  <Form onFinish={handleLogin}>
                    <Typography
                      variant="h6"
                      noWrap
                      component="a"
                      sx={{
                        fontSize: "16px",
                        mr: 2,
                        display: { xs: "none", md: "flex" },
                        fontWeight: 300,
                        // letterSpacing: ".3rem",
                        color: "inherit",
                        textDecoration: "none",
                        mt: "5%",
                        ml: "21px",
                        mb: "2px",
                      }}
                    >
                      Get instant quotes for your car service
                    </Typography>
                    <Typography
                      variant="h6"
                      noWrap
                      component="a"
                      className="Landingform"
                    >
                      <Box
                        style={{
                          height: "25px",
                          marginTop: "6px",
                          borderRadius: "0px",
                          width: "87%",
                          marginLeft: "20px",
                        }}
                      >
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            LOCATION
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={location}
                            label="Age"
                            onChange={(e) => {
                              setLocation(e.target.value);
                            }}
                          >
                            <MenuItem value={10}>Ghaziabad</MenuItem>
                            <MenuItem value={20}>Delhi</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                      <Box
                        style={{
                          height: "25px",
                          marginTop: "6px",
                          borderRadius: "0px",
                          width: "87%",
                          marginLeft: "20px",
                          marginTop: "40px",
                          marginBottom: "40px",
                        }}
                      >
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            SELECT YOUR CAR
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={car}
                            label="Age"
                            onChange={(e) => {
                              setCar(e.target.value);
                            }}
                          >
                            <MenuItem value={10}>Hyundai Verna</MenuItem>
                            <MenuItem value={20}>Tata Harrier</MenuItem>
                            <MenuItem value={30}>KIA Saltos</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Typography>
                    <Typography
                      variant="h6"
                      noWrap
                      component="a"
                      className="Landingform"
                    >
                      {/* <span>SELECT YOUR CAR</span>
                      <DownOutlined /> */}
                    </Typography>
                    <Form.Item name="username">
                      <Input
                        style={{
                          height: "47px",
                          marginTop: "6px",
                          borderRadius: "0px",
                          width: "87%",
                          marginLeft: "20px",
                        }}
                        placeholder="ENTER MOBILE NUMBER"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </Form.Item>

                    <Form.Item>
                      <Button
                        htmlType="submit"
                        style={{
                          width: "88%",
                          backgroundColor: "#ff5858",
                          color: "#fff",
                          marginLeft: "19px",
                          borderRadius: "0px",
                          height: "48px",
                        }}
                      >
                        Book now for exclusive offers
                      </Button>
                    </Form.Item>
                  </Form>

                  <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    sx={{
                      fontSize: "16px",
                      display: { xs: "none", md: "flex" },
                      fontWeight: 400,
                      color: "inherit",
                      textAlign: "center",
                      textDecoration: "underline",
                      ml: "21%",
                    }}
                    style={{ textAlign: "center" }}
                  >
                    Browse Service Without Login
                  </Typography>
                  <div style={{ marginTop: "8%" }}>
                    <Row>
                      <Col span={12}>
                        <Typography
                          variant="h6"
                          noWrap
                          component="a"
                          sx={{
                            fontSize: "12px",
                            display: { xs: "none", md: "flex" },
                            fontWeight: 400,
                            color: "inherit",
                            textAlign: "center",
                            ml: "21%",
                          }}
                          style={{ textAlign: "center" }}
                        >
                          <div
                            style={{
                              fontSize: "21px",
                              color: "#008000",
                              marginRight: "10px",
                            }}
                          >
                            <StarFilled />
                          </div>{" "}
                          <span
                            style={{
                              fontSize: "21px",
                              marginRight: "10px",
                              color: "#008000",
                            }}
                          >
                            {" "}
                            4.7/5
                          </span>
                        </Typography>
                        <Typography
                          variant="h6"
                          noWrap
                          component="a"
                          sx={{
                            fontSize: "10px",
                            display: { xs: "none", md: "flex" },
                            fontWeight: 300,
                            color: "inherit",
                            textAlign: "center",
                            ml: "21%",
                          }}
                          style={{ textAlign: "center" }}
                        >
                          Based on 150000+
                        </Typography>
                        <Typography
                          variant="h6"
                          noWrap
                          component="a"
                          sx={{
                            fontSize: "10px",
                            display: { xs: "none", md: "flex" },
                            fontWeight: 300,
                            color: "inherit",
                            textAlign: "center",
                            ml: "30%",
                          }}
                          style={{ textAlign: "center" }}
                        >
                          Reviews
                        </Typography>
                      </Col>
                      <Col span={12}>
                        <Typography
                          variant="h6"
                          noWrap
                          component="a"
                          style={{
                            fontSize: "19px",
                            marginRight: "10px",
                            marginLeft: "21%",
                            color: "inherit",
                          }}
                        >
                          10 Lacks +
                        </Typography>
                        <Typography
                          variant="h6"
                          noWrap
                          component="a"
                          sx={{
                            fontSize: "10px",
                            display: { xs: "none", md: "flex" },
                            fontWeight: 300,
                            color: "inherit",
                            textAlign: "center",
                            ml: "24%",
                          }}
                          style={{ textAlign: "center" }}
                        >
                          Happy
                        </Typography>
                        <Typography
                          variant="h6"
                          noWrap
                          component="a"
                          sx={{
                            fontSize: "10px",
                            display: { xs: "none", md: "flex" },
                            fontWeight: 300,
                            color: "inherit",
                            textAlign: "center",
                            ml: "21%",
                          }}
                          style={{ textAlign: "center" }}
                        >
                          Customer
                        </Typography>
                      </Col>
                    </Row>
                  </div>
                </Card>
              </Space>
            </Col>
          </Row>
        </div>
      </div>
      <Menus />
    </>
  );
};

export default HomePage;
