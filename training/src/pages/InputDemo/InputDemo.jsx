import React, { Component } from 'react';
import TextField from '../../components/TextField';
import SelectField from '../../components/SelectField/SelectField';
import RadioField from '../../components/RadioField/RadioField';
import {
  cricketOptions,
  footBallOptions,
  sportsArray,
  Cricket,
  Football,
} from '../../configs/constants';

class InputDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      sport: '',
      cricket: '',
      football: '',
    };
  }

  sportsChangeHandler = (event) => {
    this.setState({
      sport: event.target.value,
    });
  };

  selectHandler = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  radioHandler = (event) => {
    const { sport, ...rest } = this.state;
    console.log(rest);
    if (sport === Cricket) {
      this.setState({
        cricket: event.target.value,
      });
    } else if (sport === Football) {
      this.setState({
        football: event.target.value,
      });
    }
  };

  render() {
    const { name, sport } = this.state;
    console.log(this.state);
    let result;
    if (sport === Cricket) {
      result = cricketOptions;
    } else if (sport === Football) {
      result = footBallOptions;
    }
    return (
      <>
        <p>Name</p>
        <TextField value={name} onChange={this.selectHandler} />
        <p>Choose a game</p>
        <SelectField
          onChange={this.sportsChangeHandler}
          options={sportsArray}
        />

        {sport ? (
          <RadioField options={result} onChange={this.radioHandler} />
        ) : (
          ''
        )}
      </>
    );
  }
}
export default InputDemo;
