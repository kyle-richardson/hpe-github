import React, {useState} from "react"
import Search from "./components/Search"
import RepoList from "./components/RepoList"

function App() {
  const [userObj, setUserObj] = useState(null)
  return (
    <div className="App">
      <header id="app-header">
        <h1>Github Repo Viewer</h1>
      </header>
      
      <Search 
        setUserObj = {setUserObj}
      />
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
