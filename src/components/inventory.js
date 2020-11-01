import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {showInventoryAction} from './../actions/inventoryAction.js';

/*  return (Object.keys(props.data).forEach( (key)=>{
   return (<tr><td>{key}</td><td>{props.data[key]}</td></tr>)
 })) ;
};*/

class Inventory extends React.Component{

  render(){
    const inventory = this.props.inventoryList[this.props.autoMaker];
    const makeInventory= inventory[this.props.autoMaker];
  //  console.log('The inventory: '+makeInventory);
    Object.keys(inventory).forEach( (key)=>{
      console.log('code: '+ key+', value: '+inventory[key]);

    });


    return(
      <section className={this.props.cName}>
        <div>{'Paint Inventory'}</div>
        <div>
          <form>
            <label htmlFor={'stock'} > {'Auto Maker'}</label>
            <select name={'stock'} id={'selectStock'}>
              <option value='Acura'>Acura</option>
              <option value='BMW'>BMW</option>
              <option value='Chrysler'>Chrysler</option>
              <option value='Fiat'>Fiat</option>
              <option value='Ford'>Ford</option>
              <option value='GMC'>GMC</option>
              <option value='Honda'>Honda</option>
              <option value='Hyundai'>Hyundai</option>
              <option value='Infiniti'>Infiniti</option>
              <option value='Kia'>Kia </option>
              <option value='Mazada'>Mazda </option>
              <option value='Mercedes'>Mercedes</option>
              <option value='Mini'>MINI</option>
              <option value='Mitsubishi'>Mitsubishi</option>
              <option value='Nissan'>Nissan</option>
              <option value='Porsche'>Porsche</option>
              <option value='Subaru'>Subaru</option>
              <option value='Toyota'>Toyota </option>
              <option value='Volkswagen'>Volkswagen </option>
              <option value='Volvo'>Volvo </option>
            </select>
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
              // BUG: need table tbody
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
