import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
    ThemeProvider
} from '@material-ui/styles'
import {
    createMuiTheme
} from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#67AB1C',
        },
        secondary: {
            main: '#fc0'
        }
    }
})

ReactDOM.render( < ThemeProvider theme = {
            theme
        } > < App / > < /ThemeProvider>, document.getElementById('root'));