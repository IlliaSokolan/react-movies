import React from 'react'

function Search (props) {
    const {newSearch} = props
    const [search, setSearch] = React.useState('')
    const [type, setType] = React.useState('')
    

    const handleKey = (event)=>{
        if(event.key === 'Enter') {
            newSearch(search, type);
        }
    }

    const onValueChange = (event) => {
        setType(event.target.value)
        newSearch(search, type)
    }


        return   <div className="row">
                    <div className="col s12">
                        <div className="input-field">
                            <input
                                placeholder="search"
                                type="search"
                                className="validate"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                onKeyDown={handleKey}
                            />
                            <button className="btn search-btn" onClick={() => {
                                newSearch(search, type)
                                }}>Search</button>

                            <div className="rad">
                                <label>
                                    <input 
                                        className="with-gap"
                                        type="radio"
                                        checked={type === ""}
                                        name="group3"
                                        value=""
                                        onChange={onValueChange}
                                    /> <span>All</span>
                                </label>

                                <label>
                                    <input 
                                        className="with-gap"
                                        type="radio"
                                        checked={type === "movie"}
                                        name="group3"
                                        value="movie"
                                        onChange={onValueChange}
                                    /> <span>Movie</span>
                                </label>

                                <label>
                                    <input 
                                        className="with-gap"
                                        type="radio"
                                        checked={type === "series"}
                                        name="group3"
                                        value="series"
                                        onChange={onValueChange}
                                    /> <span>Series</span>
                                </label>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>

     
    
}

export {Search}