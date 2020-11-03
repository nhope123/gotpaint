import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as sub from './../actions/submitAction.js';
import Navigation from './nav';
import {Form} from './form.js';
import Inventory from './inventory.js';


const search = {
              title:'Search Color', makeId: 'searchMake', codeId: 'searchCode',
              formId: 'searchForm', dropdownName: 'searchDown',inputName: 'searchInput'
            };
const add = {
             title:'Add Color', makeId: 'addMake', codeId: 'addCode',
             formId: 'addForm', dropdownName: 'addDown',inputName: 'addInput'
           };
const remove = {
                title:'Remove Color', makeId: 'removeMake', codeId: 'removeCode',
                formId: 'removeForm', dropdownName: 'removeDown', inputName: 'removeInput'
              };

class Paint extends React.Component{
  render(){
    return(
      <div id='paint-container'>
        <Navigation />
        <div id='content'>
          <Form {...search}{...{cName:this.props.role[0], callback:this.props.searchSubmit}}/>
          <Form {...add}{...{cName: this.props.role[1],callback: this.props.addSubmit}}/>
          <Form {...remove}{...{cName: this.props.role[2], callback: this.props.removeSubmit}}/>
          <Inventory cName={this.props.role[3]}/>
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state)=>{
  return{
    role: state.select.role
  }
}
const mapDispatchToProps = (dispatch)=>{
  return bindActionCreators({
    addSubmit: sub.addSubmitAction,
    searchSubmit: sub.searchSubmitAction,
    removeSubmit: sub.removeSubmitAction
  },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Paint);
