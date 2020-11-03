import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {showInventoryAction} from './../actions/inventoryAction.js';
import {Selection} from './form.js';

const lengthAndQuantity = (data)=>{
  const keyList = Object.keys(data).sort();
  const codeCount = keyList.length;
  var canCount = 0;
  keyList.map((item) => canCount+= data[item]);
  return[keyList, codeCount, canCount];
}

// Table Component for code and quantity
const Table = (props)=>{
  const keyList = Object.keys(props.data).sort();
  return(
    <table >
      <thead >
        <tr key='head'><td>{'Paint Code'}</td><td>{'Quantity'}</td></tr>
      </thead>
      <tbody >
        {
          keyList.map((item,id) => { return (<tr key={id}><td>{item}</td><td>{props.data[item]}</td></tr>) })
        }
      </tbody >
    </table>
  )
};

// Inventory Component handling all elements for Inventory nav choice
class Inventory extends React.Component{
  render(){
    const inventory = this.props.inventoryList[this.props.autoMaker];
    const [keyList,codeCount, paintCanCount] = lengthAndQuantity(inventory);
    var classes = 'inventory ' + this.props.cName;
    return(
      <section className={classes}>
        <div className={'title'}>{'Paint Inventory'}</div>
        <div>
          <form onChange={this.props.showInventory}>
            <Selection {...{dropdownName: 'stock', makeId: 'selectStock'}}/>
          </form>
        </div>
        <div>
           <Table data={inventory} list={keyList} />
        </div>
        <div className={'choice'}>
          <span>{'Total codes'}</span><span>{codeCount}</span>
        </div>
        <div className={'choice'}>
          <span>{'Stock ' + this.props.autoMaker +' paint'}</span><span>{paintCanCount}</span>
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
};

export default connect(mapStateToProps,mapDispatchToProps)(Inventory);
