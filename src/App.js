import React, {useEffect, useState} from "react"
import axios from "axios"
import Search from "./components/Search"
import RepoList from "./components/RepoList"

function App() {
  const [userObj, setUserObj] = useState(null)
  return (
    <div className="App">
      <Search 
        setUserObj = {setUserObj}
      />
      <RepoList 
        userObj = {userObj}
      />
    </div>
  );
}

export default App;
