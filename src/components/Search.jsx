import React from 'react'

class Search extends React.Component {
    state = {
        search: '',
        type: ''
    }
    

    handleKey = (event)=>{
        if(event.key === 'Enter') {
            this.props.newSearch(this.state.search, this.state.type);
        }
    }

    onValueChange = (event) => {
        this.setState(() => ({type: event.target.value}), () => (this.props.newSearch(this.state.search, this.state.type)))
    }

    render(){
        return <div className="row">
                    <div className="col s12">
                        <div className="input-field">
                            <input
                                placeholder="search"
                                type="search"
                                className="validate"
                                value={this.state.search}
                                onChange={(e) => this.setState({search: e.target.value})}
                                onKeyDown={this.handleKey}
                            />
                            <button className="btn search-btn" onClick={() => {
                                this.props.newSearch(this.state.search, this.state.type);
                                }}>Search</button>

                            <div className="rad">
                                <label>
                                    <input 
                                        className="with-gap"
                                        type="radio"
                                        checked={this.state.type === ""}
                                        name="group3"
                                        value=""
                                        onChange={this.onValueChange}
                                    /> <span>All</span>
                                </label>

                                <label>
                                    <input 
                                        className="with-gap"
                                        type="radio"
                                        checked={this.state.type === "movie"}
                                        name="group3"
                                        value="movie"
                                        onChange={this.onValueChange}
                                    /> <span>Movie</span>
                                </label>

                                <label>
                                    <input 
                                        className="with-gap"
                                        type="radio"
                                        checked={this.state.type === "series"}
                                        name="group3"
                                        value="series"
                                        onChange={this.onValueChange}
                                    /> <span>Series</span>
                                </label>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
    }
}

export {Search}