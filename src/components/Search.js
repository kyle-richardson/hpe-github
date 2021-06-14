
import React, {useState} from "react"
import axios from "axios"

const Search = ({setUserObj}) => {
    const [search, setSearch] = useState()
    const handleChange = (e) => {
        const {value} = e.target
        setSearch(value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        getUser()
    }
    const getUser = async () => {
        try {
            const user = await axios.get(`https://api.github.com/users/${search}`)
            console.log(user.data)
            setUserObj(user.data)
        }
        catch(err) {
            console.log(err)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
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