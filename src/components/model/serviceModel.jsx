import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import "./serviceModel.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function ServiceModel(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [oil, setOil] = React.useState(null);
  const pkgDetails = props.servicePkg;
  const OilData = [
    {
      oilId: "engine-oil-0",
      oilType: "Synthetic Oil",
      oilName: "Mobil 5W40",
      details: "Exceptional Performance Boost & More Fuel Economy",
      price: "0",
      checked: true,
    },
    {
      oilId: "engine-oil-1",
      oilType: "Fully Synthetic",
      oilName: "Mobil1 0W40",
      details: "Best for Daily Commutes & Engine Protection",
      price: "2600",
      checked: false,
    },
  ];

  return (
    <div>
      <Button
        variant="outlined"
        style={{
          color: "red",
          borderColor: "red",
        }}
        onClick={handleOpen}
      >
        <AddIcon /> Add to cart
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <div style={style}>
            <div className="header">
              <div className="subHeader">
                <div className="MdlTitle">{pkgDetails?.serviceType}</div>
                <CloseIcon className="closeBtn" onClick={handleClose} />
              </div>
              <div className="selectOil">Select Engine oil</div>
              <div className="modelOuterContainer">
                <div className="modelInnerContainer">
                  <div className="sections">
                    <div>
                      <div className="mdlTile">RECOMMENDED</div>
                    </div>

                    <div className="oilContainer">
                      {OilData.map((item) => (
                        <div className="semiOil">
                          <label className="oilTitleContainer">
                            <div className="semiContainer">
                              <div className="oilTitle">{item.oilType}</div>
                              <div className="oilName">{item.oilName}</div>
                              <div
                                style={{
                                  textAlign: "left",
                                  marginTop: "5px",
                                }}
                              >
                                {item.details}
                              </div>
                            </div>
                            <div className="oilPrice">
                              <div className="mdlPrice">₹{item.price}</div>
                              <div>
                                <div style={{ marginTop: "-1px" }}>
                                  <input
                                    type="radio"
                                    name="engine-oil-0"
                                    id={item?.oilId}
                                    value={item.oilType}
                                    defaultChecked={!oil ? item.checked : false}
                                    onChange={(e) => setOil(e.target.value)}
                                  />
                                </div>
                              </div>
                            </div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="priceContainer">
                <div className="price">{`Total Rs. ${
                  oil === "Fully Synthetic"
                    ? Number(pkgDetails?.newPrice) + Number(OilData[1].price)
                    : pkgDetails?.newPrice
                }`}</div>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "red",
                  }}
                  onClick={handleClose}
                >
                  <AddIcon /> Add
                </Button>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
