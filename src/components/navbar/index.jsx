import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Drawer, Modal } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { AppBar, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const navigation = useNavigate();
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <AppBar
      position="static"
      style={{
        backgroundImage: 'url("/images/Background-01.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: "none", md: "flex" },
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to={"/"}>
              <img
                src="/Images/Logo-01.png"
                alt="Your Image"
                height={30}
                style={{
                  marginBottom: "0.5rem",
                  display: { xs: "none", md: "flex" },
                }}
              />
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 15,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img
              src="/Images/Logo-01.png"
              alt="Your Image"
              height={30}
              style={{ marginBottom: "0.5rem" }}
            />
          </Typography>

          <Button
            onClick={showModal}
            style={{ color: "black", fontWeight: 20, marginLeft: "1%" }}
          >
            {" "}
            <DownOutlined />
            Ghaziabad
          </Button>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>

          <Button
            variant="contained"
            onClick={() => navigation("/signin")}
            sx={{
              mb: 0,
              mr: 3,
              cursor: "pointer",
              background: "#ff3e3e",
              borderRadius: "0px",
            }}
          >
            Login
          </Button>
        </Toolbar>
      </Container>
      <Modal
        title="Location"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>We are currently available in Ghaziabad only</p>
      </Modal>

      <Drawer title="Login" onClose={onClose} open={open}>
        <h3>Enter your phone number to continue</h3>
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          fullWidth
        />
        <Button
          style={{ marginTop: "20px", backgroundColor: "red" }}
          variant="contained"
          fullWidth
        >
          Continue
        </Button>
      </Drawer>
    </AppBar>
  );
}
export default Navbar;
