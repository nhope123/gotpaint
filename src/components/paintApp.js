import React from 'react';
import {Navigation} from './nav';
import {Form} from './form.js';

export class Paint extends React.Component{
  render(){
    return(
      <div id='paint-container'>
        <Navigation />
        <div id='content'>
          <Form />
        </div>
      </div>

    );
  }
}
