import logo from './logo.svg';
import './App.css';
import React from 'react'
import axios from 'axios';

import CssBaseline from '@mui/material/CssBaseline';
import { withStyles, makeStyles } from '@mui/material/styles';
import { Container, Grid, Paper, Typography, Slider, Button } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
