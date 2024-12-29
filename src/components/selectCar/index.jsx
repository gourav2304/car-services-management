import "./styles.css";
import { Col, Row, Card, Space } from "antd";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import Cart from "../cart";

const carBrands = [
  {
    name: "Maruti Suzuki",
    imageUrl:
      "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-9.jpeg",
    id: 1,
  },
  {
    name: "Hyundai",
    imageUrl:
      "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-7.jpeg",
    id: 2,
  },
  {
    name: "Honda",
    imageUrl:
      "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-6.jpeg",
    id: 3,
  },
  {
    name: "Tata",
    imageUrl:
      "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-14.jpeg",
    id: 4,
  },
  {
    name: "Ford",
    imageUrl:
      "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-5.jpeg",
    id: 5,
  },
  {
    name: "Volkswagen",
    imageUrl:
      "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-16.jpeg",
    id: 6,
  },
  {
    name: "Mahindra",
    imageUrl:
      "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-8.jpeg",
    id: 7,
  },
  {
    name: "Renault",
    imageUrl:
      "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-12.jpeg",
    id: 8,
  },
  {
    name: "Chevrolet",
    imageUrl:
      "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-1.jpeg",
    id: 9,
  },
];

const carName = [
  {
    name: "Verna",
    imageUrl:
      "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-7-model-174.jpeg",
    id: 1,
  },
  {
    name: "Elantra",
    imageUrl:
      "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-7-model-138.jpeg",
    id: 2,
  },
  {
    name: "Xcent",
    imageUrl:
      "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-7-model-183.jpeg",
    id: 3,
  },
  {
    name: "Creta",
    imageUrl:
      "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-7-model-135.jpeg",
    id: 4,
  },
  {
    name: "Venue",
    imageUrl:
      "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-7-model-513.jpeg",
    id: 5,
  },
  {
    name: "Tucson",
    imageUrl:
      "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-7-model-173.jpeg",
    id: 6,
  },
  {
    name: "i10",
    imageUrl:
      "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-7-model-152.jpeg",
    id: 7,
  },
  {
    name: "i20",
    imageUrl:
      "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-7-model-154.jpeg",
    id: 7,
  },
];

const carType = [
  {
    name: "Petrol",
    imageUrl:
      "https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/fuel_type/PETROL.svg",
    id: 1,
  },
  {
    name: "Diesel",
    imageUrl:
      "https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/fuel_type/DIESEL.svg",
    id: 2,
  },
  {
    name: "CNG",
    imageUrl:
      "https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/fuel_type/CNG.svg",
    id: 3,
  },
];

const SelectCar = () => {
  const [selectCar, setSelectCar] = useState([]);
  const [pickedBrand, setPickedBrand] = useState(null);
  const [pickedCar, setPickedCar] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    setSelectCar(carBrands);
  }, []);

  return selectedCar ? (
    <Cart selectedCar={selectedCar} />
  ) : (
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
                padding: "24px",
              }}
            >
              <div
                style={{
                  height: "100%",
                  display: "grid",
                  gridTemplateRows: "min-content min-content auto",
                }}
              >
                <Typography fontWeight={"50px"}>Select Manufacturer</Typography>
                <div className="searchBox">
                  <SearchIcon />
                  <input
                    className="searchBoxInput"
                    placeholder="Search Brands"
                  ></input>
                </div>
                <div className="container">
                  <div className="brandGrid">
                    {selectCar.map((data) => (
                      <a style={{ textDecoration: "none" }}>
                        <div
                          key={data.id}
                          className="brandLogoContainer"
                          style={{ marginBottom: "0px" }}
                        >
                          <img
                            placeholderimage="/addons/2eb32392.png"
                            loading="lazy"
                            src={data.imageUrl}
                            className="brandImage"
                            alt="Maruti Suzuki"
                            onClick={() => {
                              return pickedBrand && pickedCar
                                ? setSelectedCar({
                                    carBrand: pickedBrand,
                                    carName: pickedCar.name,
                                    carType: data.name,
                                    image: pickedCar.image,
                                  })
                                : pickedBrand
                                ? (setSelectCar(carType),
                                  setPickedCar({
                                    name: data.name,
                                    image: data.imageUrl,
                                  }))
                                : (setSelectCar(carName),
                                  setPickedBrand(data.name));
                            }}
                          />
                          <div className="brandName">{data.name}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default SelectCar;
