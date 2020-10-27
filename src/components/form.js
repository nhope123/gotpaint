import React from 'react';

export class Form extends React.Component{
  render(){

    var classes = 'box ' + this.props.cName;
    return(
      <div className={classes} >
        <div className='title'>{this.props.title}</div>
        <form id={'search'} action='' method=''>
          <div className='choice'>
            <label htmlFor={'searchChoice'} > {'Auto Maker'}</label>
            <select name={'searchChoice'} id={'searchdrop'}>
              <option value='acura'>Acura</option>
              <option value='bmw'>BMW</option>
              <option value='chrysler'>Chrysler</option>
              <option value='ford'>Ford</option>
              <option value='gmc'>GMC</option>
              <option value='honda'>Honda</option>
              <option value='hyundai'>Hyundai</option>
              <option value='infiniti'>Infiniti</option>
              <option value='kia'>Kia </option>
              <option value='mazada'>Mazda </option>
              <option value='mercedes'>Mercedes</option>
              <option value='mini'>MINI</option>
              <option value='mitsubishi'>Mitsubishi</option>
              <option value='nissan'>Nissan</option>
              <option value='porsche'>Porsche</option>
              <option value='subaru'>Subaru</option>
              <option value='toyota'>Toyota </option>
              <option value='vw'>Volkswagen </option>
              <option value='volvo'>Volvo </option>
            </select>
          </div>
          <div className='code'>
            <label htmlFor={'searchinput'} > {'Batch code'}</label>
            <input name={'searchinput'} type='text' id={'searchcode'} tabIndex='0' placeholder='Batch code'/>
          </div>
          <div className='submit'>
            <button type='submit' form={'search'} >{'Search'}</button>
          </div>
        </form>
      </div>
    );
  }
}
