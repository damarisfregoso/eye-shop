import { Component } from 'react';
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const {name, email, password} = this.state;
      const formData = {name, email, password};
      // The promise returned by the signUp service
      // method will resolve to the user object included
      // in the payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      this.props.setUser(user);
      this.props.navigate('/');
    } catch {
      // An error occurred
      // Probably due to a duplicate email
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div className='content-center'>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label htmlFor="Name">Name</label>
            <input type="text" name="name" id="Name" placeholder="Name" value={this.state.name} onChange={this.handleChange} required />
            <label htmlFor="Email"></label>
            <input type="email" name="email" id="Email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required />
            <label htmlFor="Password">Password</label>
            <input type="password" name="password" id="Password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required />
            <label htmlFor="Confirm-Password">Confirm Passowrd</label>
            <input type="password" name="confirm" id="Confirm-Password" placeholder="Confirm-Password" value={this.state.confirm} onChange={this.handleChange} required />
            <button type="submit" disabled={disable}>SIGN UP</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}

