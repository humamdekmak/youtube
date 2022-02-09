import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onChangeInput = (event) => {
    this.setState({ term: event.target.value });
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.term);
  };
  render() {
    return (
      <div className="search-bar semantic-ui">
        <form onSubmit={this.onSubmitForm} className="ui form">
          <div className="field">
            <label>Search Bar</label>
            <input
              type="text"
              onChange={this.onChangeInput}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
