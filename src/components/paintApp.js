import React from 'react';
import Navigation from './nav';
import {Form} from './form.js';

export class Paint extends React.Component{
  render(){
    var search = {title:'Search Color',cName:'show'};
    const add = {title:'Add Color',cName:'hide'};
    const remove = {title:'Remove Color',cName:'hide'};
    console.log('var '+ search.title);
    return(
      <div id='paint-container'>
        <Navigation />
        <div id='content'>
          <Form {...search}/>
          <Form {...add}/>
          <Form {...remove}/>
        </div>
      </div>

    );
  }
}
