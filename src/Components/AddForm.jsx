import React from 'react';
import * as emailjs from 'emailjs-com';
import Loader from './Loader';
import { Error } from './Error';

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'No title added',
      subtitle: 'No subtitle',
      user: 'anonymous',
      loading: false,
      error: false,
      added: false
    };
    this.formUpdate = this.formUpdate.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeSubtitle = this.handleChangeSubtitle.bind(this);
    this.finalThoughts = this.finalThoughts.bind(this);
  }

  formUpdate() {
    let templateParams = this.state;
    this.setState({
      loading: true
    });
    emailjs
      .send('gmail', 'add', templateParams, 'user_RxhvyGQEKc5Qg6UrvouN6')
      .then(
        response => {
          this.setState({
            loading: false,
            error: false,
            added: true
          });
          console.log('SUCCESS!', response.status, response.text);
          //set state to show email success
        },
        err => {
          this.setState({
            loading: false,
            error: true
          });
          //set state to show email fail
          console.log('FAILED...', err);
        }
      );
  }

  handleChangeTitle(e) {
    this.setState({
      title: e.target.name
    });
  }

  handleChangeSubtitle(e) {
    this.setState({
      subtitle: e.target.value
    });
  }

  finalThoughts(e) {
    this.setState({
      user: e.target.value
    });
  }

  render() {
    return (
      <div>
        <div className="item">
          <p>Please enter a title for your Improvement</p>
          <input onChange={this.handleChangeTitle} type="text" />
          <p>
            Please enter a subtitle to help others understand this Improvement
          </p>
          <div class="field">
            <textarea onChange={this.handleChangeSubtitle} rows="2" />
          </div>

          <p>Known or anonymous?</p>
          <div class="field">
            <textarea onChange={this.finalThoughts} rows="3" />
          </div>
          {!this.state.loading && !this.state.added && (
            <div
              class="ui submit button"
              name="knowledge"
              onClick={this.formUpdate}
            >
              Add Improvement
            </div>
          )}
          {this.state.loading && <Loader />}
          <div
            class="ui submit button"
            name="knowledge"
            onClick={() => this.props.view('Product')}
          >
            Back
          </div>
          {this.state.error && <Error />}
        </div>
      </div>
    );
  }
}

export default AddForm;
