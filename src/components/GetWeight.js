import React, { useContext } from "react";
import { LabelContext } from "../labelDataContext";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import InputAdornment from "@material-ui/core/InputAdornment";
import "../styles.css";

const GetWeight = (props) => {
  const value = useContext(LabelContext);
  const weight = value.labelInfo.weight;
  const btnDisbaled = weight.length > 0;
  return (
    <form>
      <h4> Enter Weight Details</h4>

      <TextField
        id="standard-full-width"
        label="Enter Weight **Numbers Only"
        style={{ margin: 8 }}
        fullWidth
        margin="normal"
        type="number"
        required
        className="form"
        onChange={value.handleChange("weight")}
        value={weight}
        InputProps={{
          startAdornment: <InputAdornment position="start">lbs:</InputAdornment>
        }}
      />

      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="text primary button group"
        style={{ marginTop: 15 }}
      >
        <Button onClick={() => value.prevPage()} style={{ margin: 25 }}>
          Previous
        </Button>
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
export default GetWeight;
