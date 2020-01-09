import React from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import './App.scss';

import firebaseConnection from '../helpers/data/connection';
import Auth from '../components/pages/Auth/Auth';

function App() {
  return (
    <div className="App">
     <button className="btn btn-danger">Bootstrap Button</button>
    </div>
  );
}

export default App;
