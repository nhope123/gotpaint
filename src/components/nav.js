// import './../style/nav.scss';
import logo from './../img/logo.png';
// <i class="fa fa-paint-brush" aria-hidden="true"></i>

export const Navigation = ()=>{
  return(
    <nav>
      <div>
        <img src={logo} alt='Paint logo' /> 
        <span>Got Paint</span>
      </div>
      <ul>
        <li>Add</li>
        <li>Remove</li>
        <li>Search</li>
        <li>Log</li>
        <li>Save</li>
        <li>Backup</li>
      </ul>
    </nav>
  );
}
