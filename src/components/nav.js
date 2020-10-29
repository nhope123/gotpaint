
import logo from './../img/logo.png';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as navA from './../actions/selectAction.js';

const Navigation = (props)=>{
  return(
    <nav>
      <div>
        <img src={logo} alt='Paint logo' />
        <span>Got Paint</span>
      </div>
      <ul>
        <li className={props.select[0]} onClick={props.search}>Search</li>
        <li className={props.select[1]} onClick={props.add}>Add</li>
        <li className={props.select[2]} onClick={props.remove}>Remove</li>
        <li className={props.select[3]} onClick={props.logAction}>Inventory</li>
        <li className={props.select[4]} onClick={props.save}>Save</li>
        <li className={props.select[5]} onClick={props.backup}>Backup</li>
      </ul>
    </nav>
  );
}

const mapStateToProps = (state)=>{
  return{
    select: state.select.select
  }
}
const mapDispatchToProps = (dispatch)=>{
  return bindActionCreators({
    search: navA.searchAction,
    add: navA.addAction,
    remove:navA.removeAction,
    logAction: navA.logAction,
    save: navA.saveAction,
    backup: navA.backupAction
  },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(Navigation);
