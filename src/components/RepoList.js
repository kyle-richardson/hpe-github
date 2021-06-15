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
          setRepoList(repos.data)
        }
        catch(err) {
          console.log(err)
        }
      }
    return (
        
        <div className="repo-list-container">
          {repoList && <h1 className="repo-list-header">Showing public repositories for <a href={userObj.html_url} target="_blank" title="Open this users github in a new tab" >{userObj.login}</a></h1>}
          <div>
            {repoList && repoList.length === 0 && <p style={{textAlign:"center"}}>No public repositories for this user</p>}
            {repoList && repoList.length > 0 && repoList.map(repo => <RepoItem key = {repo.id} repo = {repo}/>)}
          </div>
        </div>

    )
}

export default RepoList