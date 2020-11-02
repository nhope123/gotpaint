import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {showInventoryAction} from './../actions/inventoryAction.js';
import {Selection} from './form.js';

class Inventory extends React.Component{

  render(){
    const inventory = this.props.inventoryList[this.props.autoMaker];
    const  tryit = Object.keys(inventory).forEach( (key)=>{
      //console.log('code: '+ key+', value: '+inventory[key]);
        return (<tr><td>{key}</td><td>{inventory[key]}</td></tr>);
    });


    return(
      <section className={this.props.cName}>
        <div>{'Paint Inventory'}</div>
        <div>
          <form>
            <Selection {...{dropdownName: 'stock', makeId: 'selectStock'}}/>

          </form>
        </div>
        <div>
          <table >
            <thead>
              <tr>
                <th>Code</th><th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {tryit}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}


const mapStateToProps = (state)=>{
  return{
    inventoryList: state.submit,
    autoMaker: state.invent
  }
}

const mapDispatchToProps = (dispatch)=>{
  return bindActionCreators({
    showInventory: showInventoryAction
  },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(Inventory);
