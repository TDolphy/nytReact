// Include React
var React = require("react");

// Here we include all of the sub-components
var Search = require("./Search");
// var Child = require("./Saved");

// Here we create Parent, our main component
var Main = React.createClass({



// handleClick function setstate increment
handleClick: function () {
  this.setState({ clicks: this.state.clicks + 1});
},

// inside html create button onclick call handleClick function
  getInitialState: function() {
    return {
      clicks: 0
    };
  }, 

  setParent: function(newClicks) {
    this.setState({
      clicks: newClicks
    });

  }, 

  //handleClick function setstate increment clicks

  //inside html create button onclick call handleclick function

  //h3 display number of clicks


  // Here we describe this component's render method
  render: function() {

    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2>Warmup!</h2>
            <p>
              <em>Components and Sub-components</em>
            </p>
          </div>
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <button className="btn btn-primary btn-lg" onClick={this.handleClick}>Click here!!!!</button>
                <h3 className="panel-title text-center">{this.state.clicks}</h3>
              </div>
              <div className="panel-body text-center">
                <h2>Hey I'm a Parent!</h2>
               <button className="btn btn-primary btn-lg" onClick={this.handleClick}>Click Me</button>
                <h3>{this.state.clicks}</h3>
                {/* Here we'll deploy the Child component. */}
                <Search
                  /*parentClicks={this.state.clicks} 
                  setParent={this.setParent}*/
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
