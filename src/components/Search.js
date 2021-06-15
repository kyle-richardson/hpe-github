
import React, {useEffect, useState} from "react"
import axios from "axios"

const Search = ({setUserObj, path, setError}) => {
    const [search, setSearch] = useState(path ? path : null)
    useEffect(()=> {
        if(path) {
            getUser(path)
        }
    }, [path])
    const handleChange = (e) => {
        const {value} = e.target
        setSearch(value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(search) {
            window.location.pathname = `/${search}`
        }
       
    }
    const getUser = async (str) => {
        try {
            const user = await axios.get(`https://api.github.com/users/${str}`)
            console.log(user.data)
            setUserObj(user.data)
        }
        catch(err) {
            console.log(err)
            setError(`${str} is not a valid Github username.  Please try a different username.`)
        }
    }
    return (
        <div className="search-container">
            <form onSubmit={handleSubmit} className="search-form">
                <input 
                    type="text"
                    name="user"
                    onChange = {handleChange}
                />
                <button
                    type="submit"
                >
                    Search
                </button>
            </form>
        </div>
    )
}

export default Search