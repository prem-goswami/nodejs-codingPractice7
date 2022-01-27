import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails} = props
  const {suggestion} = suggestionDetails

  return (
    <li className="suggestionItem">
      <h1 className="suggestionText">{suggestion}</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrowImage"
      />
    </li>
  )
}

export default SuggestionItem
