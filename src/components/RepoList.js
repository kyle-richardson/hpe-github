import React, {useState, useEffect} from "react"
import axios from "axios"

const RepoList = ({userObj}) => {
    const [repoList, setRepoList] = useState()
    useEffect(()=> {
        if(!!userObj){
            getRepos()
        }
    }, [userObj])
    const getRepos = async () => {
        try {
          const repos = await axios.get(`https://api.github.com/users/${userObj.login}/repos`)
          console.log(repos.data)
          setRepoList(repos.data)
        }
        catch(err) {
          console.log(err)
        }
      }
    return (
        <div>

        </div>

    )
}

export default RepoList