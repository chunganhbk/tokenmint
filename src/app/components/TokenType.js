import React from 'react';
import { FormControl, FormLabel, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';

class TokenType extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: "erc20"
    };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">Token Type</FormLabel>
        <RadioGroup
          aria-label="tokenType"
          name="tokenType"
          //className={classes.group}
          value={this.state.value}
          onChange={this.handleChange}
        >
          <FormControlLabel
            value="erc20"
            control={<Radio color="primary" />}
            label="ERC20"
            labelPlacement="start"
          />
          <FormControlLabel
            value="erc223"
            control={<Radio color="primary" />}
            label="ERC223"
            labelPlacement="start"
          />
        </RadioGroup>
      </FormControl>
    );
  }
}

export default TokenType;
