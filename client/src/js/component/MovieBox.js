var React=require("react");
var ReactDom=require("react-dom");
var Search=require("./Search");
var Content=require("./Content");
var MovieBox=React.createClass({
  getInitialState: function(){
    return ({data:[]})
  },
  //showResult Method
  showResult: function(response) {

    this.setState({
      data: response.Search
    });
  },
  //making ajax call to get data from server
  getDataFromServer:function(URL){
    $.ajax({
      type:"GET",
      dataType:"json",
      url:URL,
      success: function(response) {
        this.showResult(response);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render:function(){
    return(
      <div className="reactdiv">
      <div className="jumbotron">
      <div className="container">
      <Search s1data={this.getDataFromServer} />
      </div>
      </div>
      <div className='container'>
      <Content data={this.state.data}/>
      </div>
      </div>
    )
  }
})
module.exports=MovieBox;
