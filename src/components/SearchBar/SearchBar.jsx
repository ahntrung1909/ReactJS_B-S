import './searchBar.scss'
import React, { useState } from 'react'

const types = ["mua", "thuê"]

function SearchBar() {
    const [query, setQuery] = useState({
        type: "mua",
        location: "",
        minPrice: 0,
        maxPrice: 0
    })

    const switchType = (value) => {
        setQuery((prev) => ({...prev, type: value}))
    }

    return(
        <div className="search-bar">
            <div className="type">
                {types.map((type) => (
                    <button key={type} onClick={() => switchType(type)} className={query.type === type ? "active" : ""}>
                        {type}
                    </button>
                ))}
            </div>

            <form>
                <input type="text" name="location" placeholder='Địa điểm'/>
                <input type="number" name="minPrice" min={0} max={10000000} placeholder='Giá thấp nhất'/>
                <input type="number" name="maxPrice" min={0} max={10000000} placeholder='Giá cao nhất'/>
                <button>
                    <img src="/search.png" alt="" />
                </button>
            </form>

        </div>
    )
}

export default SearchBar