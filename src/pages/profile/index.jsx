import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { alignProperty } from "@mui/material/styles/cssUtils";
import { TextField } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const card = (
  <React.Fragment>
    <CardContent style={{ marginRight: "8%", marginLeft: "8%" }}>
      <h3>PERSONAL DETAILS</h3>
      <TextField
        id="outlined-basic"
        label="NAME"
        variant="outlined"
        fullWidth
        style={{ margin: "2%" }}
      />
      <TextField
        id="outlined-basic"
        label="EMAIL ADDRESS"
        variant="outlined"
        fullWidth
        style={{ margin: "2%" }}
      />
      <TextField
        id="outlined-basic"
        label="MOBILE NO"
        variant="outlined"
        fullWidth
        style={{ margin: "2%" }}
      />
      <Button
        variant="contained"
        style={{ backgroundColor: "red", marginLeft: "2%" }}
      >
        Save
      </Button>
    </CardContent>
  </React.Fragment>
);

const Profile = () => {
  return (
    <Box
      sx={{
        marginTop: "8%",
        marginRight: "15%",
        marginLeft: "15%",
        alignProperty: "center",
      }}
    >
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};

export default Profile;
