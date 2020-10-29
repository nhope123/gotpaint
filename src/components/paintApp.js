import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as sub from './../actions/submitAction.js';
import Navigation from './nav';
import {Form} from './form.js';

class Paint extends React.Component{
  render(){
    var search = {title:'Search Color', makeId: 'searchMake', codeId: 'searchCode',
                  cName: this.props.role[0], callback: this.props.searchSubmit,
                  formId: 'searchForm', dropdownName: 'searchDown',inputName: 'searchInput'
                };
    const add = {title:'Add Color', makeId: 'addMake', codeId: 'addCode',
                 cName: this.props.role[1],callback: this.props.addSubmit,
                 formId: 'addForm', dropdownName: 'addDown',inputName: 'addInput'
               };
    const remove = {title:'Remove Color', makeId: 'removeMake', codeId: 'removeCode',
                    cName: this.props.role[2], callback: this.props.removeSubmit,
                    formId: 'removeForm', dropdownName: 'removeDown', inputName: 'removeInput'
                  };
    console.log(add.callback);
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
