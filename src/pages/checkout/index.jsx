import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
import Cart from "../../components/cart";
import { useLocation } from "react-router-dom";

const Checkout = (props) => {
  const location = useLocation();
  const steps = [
    {
      label: "Account",
      description: `For each ad campaign that you create, you can control how much
                  you're willing to spend on clicks and conversions, which networks
                  and geographical locations you want your ads to show on, and more.`,
    },
    {
      label: "Select Date and Time of Service :",
      description:
        "An ad group contains one or more ads which target a shared set of keywords.",
    },
    {
      label: "Payment",
      description: `Try out different ad text to see what brings in the most customers,
                  and learn how to enhance your ads using features like ad extensions.
                  If you run into any problems with your ads, find out how to tell if
                  they're running and how to resolve approval issues.`,
    },
  ];

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      bottom: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      width: 3,
      border: 0,
      backgroundColor:
        theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
      borderRadius: 1,
    },
  }));

  const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    ...(ownerState.active && {
      backgroundImage:
        "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
      boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    }),
    ...(ownerState.completed && {
      backgroundImage:
        "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    }),
  }));

  function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
      1: <PersonIcon />,
      2: <AccessTimeFilledIcon />,
      3: <CurrencyRupeeIcon />,
    };

    return (
      <ColorlibStepIconRoot
        ownerState={{ completed, active }}
        className={className}
      >
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  }

  ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
  };

  return (
    <div style={{ margin: "3%" }}>
      <Box sx={{ maxWidth: 600 }}>
        <Cart selectedCar={location.state} checkout={true} />
        <Stepper
          activeStep={activeStep}
          orientation="vertical"
          connector={<ColorlibConnector />}
        >
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                StepIconComponent={ColorlibStepIcon}
                optional={
                  index === 2 ? (
                    <h4>Select a payment method and place Order:</h4>
                  ) : null
                }
              >
                {step.label}
              </StepLabel>
              <StepContent>
                {index === 0 && (
                  <div>
                    <h3>
                      To place an order, log in to your existing account or sign
                      up.
                    </h3>
                    <TextField
                      id="outlined-basic"
                      label="Phone Number"
                      variant="outlined"
                      fullWidth
                    />
                  </div>
                )}
                {index === 1 && (
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <StaticDateTimePicker
                      orientation="landscape"
                      disablePast={true}
                    />
                  </LocalizationProvider>
                )}
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      style={{ backgroundColor: "red", width: "50%" }}
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 2 }}
                    >
                      {index === steps.length - 1 ? "Place Order" : "Continue"}
                    </Button>
                    {index === 2 && (
                      <>
                        <Button
                          style={{ color: "red" }}
                          onClick={handleBack}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          Back
                        </Button>
                      </>
                    )}
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )}
      </Box>
    </div>
  );
};

export default Checkout;
