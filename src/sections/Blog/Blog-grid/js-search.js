import React, { Component } from "react"
import * as JsSearch from "js-search"

class Search extends Component {
  state = {
    search: [],
    searchResults: [],
    isLoading: true,
    isError: false,
    searchQuery: "",
  }

  async componentDidMount() {
    this.rebuildIndex()
  }

  rebuildIndex = () => {
    const { data1 } = this.props
    const dataToSearch = new JsSearch.Search("title")
    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()
    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer()
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("title")
    dataToSearch.addIndex("title")

    dataToSearch.addDocuments(data1)  
    this.setState({ search: dataToSearch, isLoading: false })
  }

  searchData = e => {
    const { search } = this.state
    const queryResult = search.search(e.target.value)
    this.setState({ searchQuery: e.target.value, searchResults: queryResult })
  }
  handleSubmit = e => {
    e.preventDefault()
  }

  render() {
    const { searchResults, searchQuery } = this.state
    const queryResults = searchQuery === "" ? data1 : searchResults
    return (
      <div>
        <div style={{ margin: "0 auto" }}>
          <form onSubmit={this.handleSubmit}>
            <div style={{ margin: "0 auto" }}>
              <input
                id="Search"
                value={searchQuery}
                onChange={this.searchData}
                placeholder="Search here"
                style={{ margin: "0 auto", width: "400px" }}
              />
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default Search;