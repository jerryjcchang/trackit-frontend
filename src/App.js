import React from 'react';
import logo from './logo.svg';
import FormContainer from './Containers/Main'
import TableContainer from './Containers/TableContainer'
import PackageForm from './Components/PackageForm'
import { Container } from 'semantic-ui-react'
import './App.css';

function App() {
  return (
    <div className="App">
      <FormContainer/>
      <TableContainer/>
    </div>
  );
}

export default App;
