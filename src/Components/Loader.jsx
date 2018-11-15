import React from 'react';
import { css } from 'react-emotion';
// First way to import
import { BeatLoader } from 'react-spinners';
// Another way to import

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  render() {
    return (
      <div className="sweet-loading">
        <BeatLoader
          className={override}
          sizeUnit={'px'}
          size={10}
          color={'#123abc'}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default Loader;
