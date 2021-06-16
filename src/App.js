import React, {useEffect, useState} from "react"
import Search from "./components/Search"
import RepoList from "./components/RepoList"

function App() {
  const [userObj, setUserObj] = useState(null)
  const [path, setPath] = useState("")
  const [error, setError] = useState()

  // looks at url path, useEffect to have it only happen on App.js mount
  //TODO: fix issue where this implementation does not work with netlify or other public 
  //cloud deploys. May need to use React Router instead.
  useEffect(()=> {
    if(window.location.pathname) {
      setPath(window.location.pathname.substring(1))
      setError(null)
    }
    else {
      setError("No user searched.  Please add a username in the url or use the search at the top of this page.")
    }
  },[])

  return (
      <div className="App">
      <header id="app-header">
        <h1>Github Repo Viewer</h1>
      </header>
      
      <Search 
        setUserObj = {setUserObj}
        path = {path}
        setError = {setError}
      />
      {error && <p style={{color:"red", textAlign:"center"}}>{error}</p>}
      <RepoList 
        userObj = {userObj}
      />
      <footer id="app-footer">
        <p style={{textAlign:"center"}}>Made by <a target="_blank" href="https://github.com/kyle-richardson">Kyle</a></p>
      </footer>
    </div>
    
  );
}

export default App;
