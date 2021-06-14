import React, {useState, useEffect} from "react"
import axios from "axios"
import RepoItem from "./RepoItem"

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
        
        <div className="repo-list-container">
            {repoList && <><h1 className="repo-list-header">Showing public repositories for {userObj.login}</h1>
             {repoList.map(repo => <RepoItem key = {repo.id} repo = {repo}/>)}</>}
        </div>

    )
}

export default RepoList