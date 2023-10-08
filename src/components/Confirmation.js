import React, { useState, useEffect, useContext } from "react";
import { LabelContext } from "../labelDataContext";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import InputAdornment from "@material-ui/core/InputAdornment";
import "../styles.css";
import { upper } from "../common/normalijation";

const Confirmation = () => {
  const value = useContext(LabelContext);
  const [shippingCoast, setshippingCoast] = useState(0);

  useEffect(() => {
    const weight = value.labelInfo.weight;
    const shippingOption = value.labelInfo.shippingOption;

    const shippingRate = 0.4,
      shippingCost = weight * shippingRate * (shippingOption === "1" ? 1 : 1.5);

    const shippingTotal = shippingCost.toFixed(2);
    setshippingCoast(shippingTotal);
  }, []);
  console.log(shippingCoast, "shippingCoast");
  console.log(value, "value");
  return (
    <>
      <h6> Sender Details</h6>
      <div className="child">
        <TextField
          style={{ margin: 8, width: "93%" }}
          fullWidth
          value={upper(value.labelInfo.sender.name)}
          InputProps={{
            readOnly: true
          }}
        />
        <TextField
          label="Street Address"
          fullWidth
          margin="normal"
          value={upper(value.labelInfo.sender.street)}
          style={{ margin: 8, width: "93%" }}
          InputProps={{
            readOnly: true
          }}
        />

        <TextField
          required
          style={{ width: "31%", margin: 1 }}
          label="City"
          value={upper(value.labelInfo.sender.city)}
          InputProps={{
            readOnly: true
          }}
        />
        <TextField
          required
          style={{ width: "31%", margin: 1 }}
          label="State"
          value={upper(value.labelInfo.sender.state)}
          InputProps={{
            readOnly: true
          }}
        />
        <TextField
          required
          style={{ width: "31%", margin: 1 }}
          label="ZipCode"
          value={value.labelInfo.sender.zipCode}
          InputProps={{
            readOnly: true
          }}
        />
      </div>
      <h6> Recevier Details</h6>
      <div className="child">
        <TextField
          style={{ margin: 8, width: "93%" }}
          fullWidth
          value={upper(value.labelInfo.recevier.name)}
          InputProps={{
            readOnly: true
          }}
        />
        <TextField
          style={{ margin: 8, width: "93%" }}
          label="Street Address"
          fullWidth
          margin="normal"
          value={upper(value.labelInfo.recevier.street)}
          InputProps={{
            readOnly: true
          }}
        />

        <TextField
          required
          style={{ width: "31%", margin: 1 }}
          label="City"
          value={upper(value.labelInfo.recevier.city)}
          InputProps={{
            readOnly: true
          }}
        />
        <TextField
          required
          style={{ width: "31%", margin: 1 }}
          label="State"
          value={upper(value.labelInfo.recevier.state)}
          InputProps={{
            readOnly: true
          }}
        />
        <TextField
          required
          style={{ width: "31%", margin: 1 }}
          label="ZipCode"
          value={value.labelInfo.recevier.zipCode}
          InputProps={{
            readOnly: true
          }}
        />
      </div>
      <h6> weight</h6>
      <div className="child">
        <TextField
          id="standard-full-width"
          style={{ margin: 8, width: "93%" }}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">lbs:</InputAdornment>
            ),
            readOnly: true
          }}
          value={value.labelInfo.weight}
        />
      </div>
      <h6> Slected Shipping option</h6>
      <div className="child">
        <TextField
          id="standard-full-width"
          style={{ margin: 8, width: "93%" }}
          fullWidth
          value={value.labelInfo.shippingOption === "1" ? "GROUND" : "PRIOROTY"}
          InputProps={{
            readOnly: true
          }}
        />
      </div>
      <h6>Total shipping Coast</h6>
      <div className="child">
        <TextField
          id="standard-full-width"
          style={{ margin: 8, width: "93%" }}
          fullWidth
          value={shippingCoast}
          ed
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
            readOnly: true
          }}
        />
      </div>
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="text primary button group"
        style={{ marginTop: 15 }}
      >
        <Button onClick={() => value.prevPage()} style={{ margin: 25 }}>
          Previous
        </Button>
        <Button onClick={() => value.nextPage()} style={{ margin: 25 }}>
          Confirm
        </Button>
      </ButtonGroup>
    </>
  );
};
export default Confirmation;
