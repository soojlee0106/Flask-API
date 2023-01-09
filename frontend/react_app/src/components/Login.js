import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';

import { connect } from 'react-redux';
import * as actions from '../store/authActions';

import { useHistory, useLocation } from "react-router-dom";


function Login(props) {
    const [username, setuserName] = React.useState(null);
    const [password, setPassword] = React.useState(null);

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    React.useEffect(() => {
        if (props.isAuthenticated) { history.replace(from) };
    });


    const handleFormFieldChange = (event) => {
        switch (event.target.id) {
            case 'username': setuserName(event.target.value); break;
            case 'password': setPassword(event.target.value); break;
            default: return null;
        }

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onAuth(username, password);
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div>
                <Avatar>
                    <LockOutlinedIcon />
                </Avatar>
                Sign in
                <form noValidate onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="User Name"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        onChange={handleFormFieldChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleFormFieldChange}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Sign In
                    </Button>
                </form>
            </div>
        </Container>
    );
}


const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password))
    }
}

export default connect(null, mapDispatchToProps)(Login);