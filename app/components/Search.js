// Include React
var React = require("react");

// Here we include all of the sub-components
var Query = require("./Query");
var Results = require("./Results");

var helpers = require("./helpers");

// Create the Child Component
var Search = React.createClass({

  // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return { topic: "", startYear: "", endYear: "" };
  },

  // componentDidUpdate is a lifecycle method that will get run every time the component updates it's
  // props or state
  componentDidUpdate: function(prevProps, prevState) {
    // If we have a new search term, run a new search
    if (prevState.searchTerm !== this.state.searchTerm) {
      console.log("UPDATED");

      helpers.runQuery(this.state.searchTerm).then(function(data) {
        if (data !== this.state.results) {
          console.log(data);
          this.setState({ results: data });
        }
        // This code is necessary to bind the keyword "this" when we say this.setState
        // to actually mean the component itself and not the runQuery function.
      }.bind(this));
    }
  },

  setTerm: function(term) {
    this.setState({ searchTerm: term });
  },

  // This function will respond to the user input
  handleChange: function(event) {
    // Here we create syntax to capture any change in text to the query terms (pre-search).
    // See this Stack Overflow answer for more details:
    // http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },

    // When a user submits...
  handleSubmit: function(event) {
    // preventing the form from trying to submit itself
    event.preventDefault();
    // Set the parent to have the search term
    this.props.setTerm(this.state.term);

    // Clearing the input field after submitting
    this.setState({ term: "" });
  },


  // Here we descibe this component's render method
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2>Form Capture</h2>
            <p>
              <em>Type numbers and text in the appropriate boxes.</em>
            </p>
          </div>
          <div className="col-md-6">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Search</h3>
              </div>
              <div className="panel-body text-center">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <h4 className="">
                      <strong>Topic</strong>
                    </h4>
                    {/*
                      Note how each of the form elements has an id that matches the state.
                      This is not necessary but it is convenient.
                      Also note how each has an onChange event associated with our handleChange event.
                    */}
                    <input
                      type="text"
                      value={this.state.topic}
                      className="form-control"
                      id="topic"
                      onChange={this.handleChange}
                      required
                    />

                    <h4>
                      <strong>Start Year</strong>
                    </h4>
                    <input
                      type="number"
                      value={this.state.startYear}
                      className="form-control"
                      id="startYear"
                      onChange={this.handleChange}
                      required
                    />

                    <h4>
                      <strong>End Year</strong>
                    </h4>
                    <input
                      type="text"
                      value={this.state.endYear}
                      className="form-control"
                      id="endYear"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <input type="submit" value="Submit" />
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Results</h3>
              </div>
              <div className="panel-body text-center">
                <form>
                  <div className="form-group">
                    <h2>

                    </h2>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Search;
