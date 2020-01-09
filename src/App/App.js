import React from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import './App.scss';

function App() {
  return (
    <div className="App">
     <button className="btn btn-danger">Bootstrap Button</button>
    </div>
  );
}

export default App;
