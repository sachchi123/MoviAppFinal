var React=require('react');
var ReactDOM=require('react-dom');
var Display2=React.createClass({
   CreateAjax2:function()
   {
     $.ajax({
       url: "http://localhost:8082/movie/unfav",
       dataType: 'json',
       type: 'DELETE',
       data: this.props.search1,
       success: function() {
          console.log('successe');
       }.bind(this),
       error: function(xhr, status, err) {
         console.error(this.state.url, status, err.toString());
       }.bind(this)
     });
   },

   CreateAjax:function()
   {  var query = ReactDOM.findDOMNode(this.refs.query).value;
    //this.props.search1.push({"t":query});
    this.props.search1.t=query;
      $.ajax({
       url:"http://localhost:8082/movie/update",
       dataType: 'json',
       type: 'PUT',
       data: this.props.search1,
       success: function() {
         console.log("success");

       }.bind(this),
       error: function(xhr, status, err) {
         console.error(url1, status, err.toString());
       }.bind(this)
     });
   },
 render:function(){
   return(
     <div className="content">
      <div className="row" >
           <div className="col-sm-3">
             <div className="thumbnail">
             <img src={this.props.search1.Poster} alt="image"/>
              </div>
           </div>
           <div className="col-sm-9">
             <div className="list-group">
               <h2 className="list-group-item-heading">Movie Title :{this.props.search1.Title}</h2>
               <h3 className="list-group-item-text">Year:{this.props.search1.Year}</h3>
               <h1 className="list-group-item-text">Id:{this.props.search1.imdbID}</h1>
               <button type="submit" className="btn btn-warning" onClick={this.CreateAjax2}>del</button>
               <a href="#myModal"role="button"className="btn btn-warning" data-toggle="modal">Update</a>
               <div className="modal fade" id="myModal">
                 <div className="modal-dialog">
                   <div className="modal-content">
                     <div className="modal-header">
                       <button className="close" data-dismiss="modal">&times;</button>
                       <h4 className="modal-title">Update</h4>
                     </div>
                     <div className="modal-body">
                       <form className="form-horizontal">
                         <div className="form-group">
                           <label className="col-lg-2 control-label" id="inputName">Title</label>
                           <div className="col-lg-10">
                             <input className="form-control" id="inputName" placeholder="Name" type="text" ref="query"/>
                           </div>
                         </div>
                         <div className="form-group">
                           <div className="col-lg-12">
                             <button className="btn btn-success pull-right" type="submit" onClick={this.CreateAjax}>Send</button>
                           </div>
                         </div>
                       </form>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
          </div>
       </div>
     </div>
   )

   }

})
module.exports=Display2;
