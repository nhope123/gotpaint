import React from 'react';

export const Selection = (props)=>{
  return(
    <div className='choice'>
      <label htmlFor={props.dropdownName} > {'Auto Maker'}</label>
      <select name={props.dropdownName} id={props.makeId}>
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
        <option value='Mazda'>Mazda </option>
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
    </div>
  );
};

export class Form extends React.Component{
  render(){
    var classes = 'box ' + this.props.cName;
    const selectionInfo = {dropdownName: this.props.dropdownName, makeId:this.props.makeId }


    return(
      <div className={classes} >
        <div className='title'>{this.props.title}</div>
        <form id={this.props.formId} action='' method=''>
          <Selection {...selectionInfo}/>
          <div className='code'>
            <label htmlFor={this.props.inputName} > {'Paint code'}</label>
            <input name={this.props.inputName} type='text' id={this.props.codeId} tabIndex='0' placeholder='Paint code' required/>
          </div>
          <div className='submit'>
            <button type='submit' form={this.props.formId} onClick={this.props.callback}>{'Enter'}</button>
          </div>
        </form>
      </div>
    );
  }
}
