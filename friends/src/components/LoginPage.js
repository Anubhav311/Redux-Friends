import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/index';

class Login extends React.Component {

    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    submitButton = (e) => {
        e.preventDefault()
        this.props.login(this.state.credentials)
        .then(() => {
            this.props.history.push('/protected');
        })
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    name="username"
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                />
                <input
                    type="password"
                    name="password"
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                />
                <button onClick={this.submitButton}>Login</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return({
        friends: state.friends,
        error: state.error,
        loggingin: state.loggingin    
    })

}

export default connect(mapStateToProps, { login })(Login);
