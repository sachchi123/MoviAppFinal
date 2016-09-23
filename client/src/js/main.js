var React=require("react");
var ReactDom=require("react-dom");
var {hashHistory,Route,Router,IndexRoute}=require("react-router");
var MovieBox=require("./component/MovieBox");
var Navbar=require("./component/Navbar");
var Home=require("./component/Home");
var AllFavMovie=require("./component/AllFavMovie");

var MainComponent=React.createClass({
render:function(){
  return(
    <div>
    <Navbar/>
      <br/><br/>
{this.props.children}
    </div>
  );
}
});
ReactDom.render(
  <Router history={hashHistory}>
              <Route path="/" component={MainComponent}>
                <IndexRoute component={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/allfavmovie" component={AllFavMovie}/>
                <Route path="/moviebox" component={MovieBox}/>
              </Route>
  </Router>,document.getElementById("app"));
