import {Component} from 'react'

import SearchItem from '../SearchItem'

class BrowserHistory extends Component {
  state = {
    searchInput: '',
  }
  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }
  deleteHistory = id => {
    const {initialHistoryList} = this.props
    const filteredList = initialHistoryList.filter(each => each.id !== id)
    this.setState({initialHistoryList: filteredList})
  }
  render() {
    const {searchInput} = this.state
    const {initialHistoryList} = this.props
    const searchResults = initialHistoryList.filter(eachItem =>
      eachItem.title.includes(searchInput),
    )

    return (
      <div className="bg-container">
        <div className="history-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            alt="search"
          />
          <input
            type="search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
          <ul className="list-container">
            {searchResults.map(eachItem => (
              <SearchItem
                itemDetails={eachItem}
                key={eachItem.id}
                deleteHistory={this.deleteUser}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default BrowserHistory
