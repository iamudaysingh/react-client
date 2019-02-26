import React, { Component } from 'react';
import * as yup from 'yup';
import TextField from '../../components/TextField';
import SelectField from '../../components/SelectField/SelectField';
import RadioField from '../../components/RadioField/RadioField';
import Button from '../../components/Button/Button';
import {
  cricketOptions,
  footBallOptions,
  sportsArray,
  Cricket,
  Football,
} from '../../configs/constants';

class InputDemo extends Component {
  checkoutNameSchema = yup.object().shape({
    name: yup
      .string()
      .min(3)
      .required()
      .max(255),

    sport: yup.string().required(),

    radioValue: yup.string().required(),
  });

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      sport: '',
      cricket: '',
      football: '',
      errorOccured: {
        name: '',
        sport: '',
        radioValue: '',
      },
      radioValue: '',
      isTouched: {
        name: false,
        sport: false,
        radioValue: false,
      },
      hasError: {
        name: false,
        sport: false,
        radioValue: false,
      },
    };
  }

  selectHandler = field => (event) => {
    console.log('completed', field);
    const { errorOccured, isTouched } = this.state;
    this.setState({
      [field]: event.target.value,
      errorOccured: { ...errorOccured, [field]: '' },
      isTouched: { ...isTouched, [field]: true },
    });
  };

  selectEventHandler = field => () => {
    const {
      name, sport, errorOccured, radioValue, hasError,
    } = this.state;
    this.checkoutNameSchema
      .validate({ name, sport, radioValue }, { abortEarly: false })
      .then((valid) => {
        console.log('I am valid', valid);
        this.setState({
          errorOccured: { ...errorOccured, [field]: '' },
          hasError: { ...hasError, [field]: false },
        });
      })
      .catch((error) => {
        this.errorHandler(field, error);
      });
  };

  errorHandler = (field, error) => {
    console.log(field, '=================', error);
    const { errorOccured, hasError } = this.state;
    error.inner.forEach((element) => {
      console.log('msg', element.message);
      if (element.path === field) {
        this.setState({
          errorOccured: { ...errorOccured, [field]: element.message },
          hasError: { ...hasError, [field]: true },
        });
      }
    });
  };

  forErrors = () => {
    const { hasError, isTouched } = this.state;
    const obj = Object.values(hasError);
    const objForTouched = Object.values(isTouched);
    let i;
    for (i = 0; i < obj.length; i += 1) {
      if (obj[i]) return false;
    }
    for (i = 0; i < objForTouched.length; i += 1) {
      if (!objForTouched[i]) return false;
    }
    return true;
  };

  render() {
    const { name, sport, errorOccured } = this.state;
    console.log('state', this.state);
    console.log('errorOccured', errorOccured);
    let result;
    if (sport === Cricket) {
      result = cricketOptions;
    } else if (sport === Football) {
      result = footBallOptions;
    }
    return (
      <>
        <p>Name</p>
        <TextField
          value={name}
          error={errorOccured.name}
          onChange={this.selectHandler('name')}
          onBlur={this.selectEventHandler('name')}
        />
        <p>Choose a game</p>
        <SelectField
          onChange={this.selectHandler('sport')}
          options={sportsArray}
          onBlur={this.selectEventHandler('sport')}
          error={errorOccured.sport}
        />
        {result ? <p>What is your role ?</p> : ''}
        {sport ? (
          <RadioField
            options={result}
            onChange={this.selectHandler('radioValue')}
            onBlur={this.selectEventHandler('radioValue')}
            error={errorOccured.radioValue}
          />
        ) : (
          ''
        )}

        {
          <div>
            <Button value="Cancel" />
            {this.forErrors() ? (
              <Button
                value="Submit"
                style={{ backgroundColor: '#20b520', color: 'white' }}
              />
            ) : (
              <Button value="Submit" disabled />
            )}
          </div>
        }
      </>
    );
  }
}

export default InputDemo;
