import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchValue: '',
  }

  onClickSearchBar = event => {
    this.setState({searchValue: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchValue} = this.state

    const searchResult = suggestionsList.filter(eachItem =>
      eachItem.suggestion.lowerCase().includes(searchValue.toLowerCase()),
    )

    return (
      <div className="bgContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
          alt="google logo"
          className="googleImage"
        />
        <div className="searchBoxContainer">
          <div className="searchBox">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search Icon"
              className="searchImage"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="searchBoxStyling"
              onChange={this.onClickSearchBar}
            />
          </div>
          <ul className="searchResultContainer">
            {searchResult.map(eachItem => (
              <SuggestionItem key={eachItem.id} suggestionDetails={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
