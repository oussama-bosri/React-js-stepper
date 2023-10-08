import React, { useContext } from "react";
import { LabelContext } from "../labelDataContext";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import "../styles.css";

const SenderAddress = (props) => {
  const value = useContext(LabelContext);
  const sender = value.labelInfo.sender;
  const btnDisbaled =
    sender.name.length > 0 &&
    sender.city.length > 0 &&
    sender.zipCode.length > 0 &&
    sender.state.length > 0;
  return (
    <form>
      <h4> Enter Sender Details</h4>
      <TextField
        label="Enter Full Name"
        style={{ margin: 8, width: "93%" }}
        fullWidth
        margin="normal"
        required
        onChange={value.setSenderInfo("name")}
        value={sender.name}
      />
      <TextField
        label="Enter Street Address"
        style={{ margin: 8, width: "93%" }}
        fullWidth
        margin="normal"
        required
        onChange={value.setSenderInfo("street")}
        value={sender.street}
      />

      <TextField
        required
        style={{ width: "31%" }}
        label="Enter City"
        onChange={value.setSenderInfo("city")}
        value={sender.city}
      />
      <TextField
        required
        style={{ width: "31%" }}
        label="Enter State"
        onChange={value.setSenderInfo("state")}
        value={sender.state}
      />
      <TextField
        required
        style={{ width: "31%" }}
        label="Enter ZipCode"
        type="number"
        onChange={value.setSenderInfo("zipCode")}
        value={sender.zipCode}
      />
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="text primary button group"
        style={{ marginTop: 15 }}
      >
        <Button
          disabled={!btnDisbaled}
          onClick={() => value.nextPage()}
          style={{ margin: 25 }}
        >
          Next
        </Button>
      </ButtonGroup>
    </form>
  );
};
export default SenderAddress;
