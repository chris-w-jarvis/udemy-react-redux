import React, { Component } from 'react';

// search bar component
class SearchBar extends Component {

  constructor(props) {
    super(props);
    // whenever input changes (from typing) search term changes (and re-render)
    this.state = { term: ''};
  }

  onInputChange(term) {
    // set state and call callback we got from App
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render () {
    // render must return jsx
    return (
      <div className="search-bar">
        <input value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)} />
      </div>
  );
  }
}

export default SearchBar;
