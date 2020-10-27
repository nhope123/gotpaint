import React from 'react';
import Navigation from './nav';
import {Form} from './form.js';
import {connect} from 'react-redux';

class Paint extends React.Component{
  render(){
    var search = {title:'Search Color',cName: this.props.role[0]};
    const add = {title:'Add Color',cName: this.props.role[1]};
    const remove = {title:'Remove Color',cName: this.props.role[2]};
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

const mapStateToProps = (state)=>{
  return{
    role: state.role
  }
}

export default connect(mapStateToProps,null)(Paint);
