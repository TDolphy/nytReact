// Include React
var React = require("react");

// Create the Child Component
var Saved = React.createClass({

  getInitialState: function() {
    return {
      number: 0
    };
  },

    handleClick: function() {
    // this.setState is ansynchronous for performance reasons. To ensure that the
    // setParent function get the updated number in time we will pass it the newNumber variable
    var newNumber = this.props.clicks + 1;

    this.setState({
      number: newNumber
    });
    this.props.setParent(newNumber);
  },

  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Child clicks times TWO!! {this.props.clicks * 2}</h3>
        </div>
        <div className="panel-body text-center">
          <button className="btn btn-primary btn-lg" onClick={this.handleClick}>CLICK ME!!!!</button>
          <h3>HEY I'm the Child!</h3>
          <h4>My Parents Clicks x 2 is {this.props.parentClicks*2}</h4>
          <button onClick={this.handleClick}>Handle the Child and Pass to Parent</button>
          {/* Here we'll deploy the GrandChild Component  */}
          <GrandChild />
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Saved;
