var React =require('react');
var NavLink=require("./NavLink");
var Navbar=React.createClass({
  render:function(){
    return(
    <div className="container-fluid">
      <ul className="nav navbar-nav">
      <li><NavLink to="/home">Home</NavLink></li>
      <li><NavLink to="/allfavmovie">AllFavMovie</NavLink></li>
      <li><NavLink to="/moviebox">SearchMovie</NavLink></li>
      <li><NavLink to="/Login">Login</NavLink></li>
      <li><NavLink to="/Logout">Logout</NavLink></li>
      </ul>
    </div>
    )
  }
});
module.exports = Navbar;
