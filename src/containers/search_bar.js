import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators} from "redux";
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {
// If you use a callback, that points to "this",
// chances are you need to bind it
  constructor(props) {
    super(props);

    this.state = { term: ""};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState( {term: event.target.value} ) ;
  }

  onFormSubmit(event) {
    event.preventDefault();

    // We need to go and fetch weather data.
    this.props.fetchWeather(this.state.term);
    this.setState( {term: ""} );
    // api.openweathermap.org/data/2.5/forecast?q={city name},{country code}
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className = "input-group">
        <input
          placeholder = "Get a five-day forecast in your favorite cities"
          className = "form-control"
          value = {this.state.term}
          onChange = {this.onInputChange} />
        <span className= "input-group-btn">
          <button type="submit" className =  "btn btn-secondary"> Submit </button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);


// Component state is totally different from React state (app)
