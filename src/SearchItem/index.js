import './index.css'

const SearchItem = props => {
  const {itemDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = itemDetails

  const onDelete = () => {
    deleteHistory(id)
  }
  return (
    <li className="history-card-container">
      <p className="time-line">{timeAccessed}</p>
      <img className="history-image" src={logoUrl} alt="domain logo" />
      <p className="title">{title}</p>
      <p className="url">{domainUrl}</p>
      <button data-testid="delete" className="button" onClick={onDelete}>
      <img src="https://assets.ccbp.in/frontend/react-js/delete-img.png" alt="delete" />
      </button>
    </li>
  )
}
export default SearchItem
