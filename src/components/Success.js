import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {sendEmail} from '../email';

export class Success extends Component {
    continue = e=>{
        e.preventDefault();
        this.props.nextStep();
    }
    
    render() {  
        const {values} = this.props;
        sendEmail(values.email,values);
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success"/>
                    <h1>Thank you for your submission</h1>
                    <p>Another email with details will be received</p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Success;
