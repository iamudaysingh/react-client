import React from 'react';
import { styleForFooter } from './style';

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <footer style={styleForFooter.base}> Successive technologies &copy; </footer>
      </>
    );
  }
}

export default Footer;
