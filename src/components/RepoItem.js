import React from "react"

const RepoItem = ({repo}) => {
    const formatDate =(date_str) => {
        const new_date = new Date(date_str)
        return new_date.toLocaleDateString("us-en")
    }

    return (
        <div className="repo-item-card">
            <h2 className="repo-item-header">{repo.name}</h2>
            <p style={{textAlign: "center", marginTop: "0"}}><a href={repo.html_url} target="_blank">View repository on Github</a></p>
            <p>Description: {repo.description ? repo.description : "N/A"}</p>
            <p>Stars: {repo.stargazers_count}</p>
            <p>Main language: {repo.language ? repo.language : "N/A"}</p>
            <p>Created: {formatDate(repo.created_at)}</p>
            <p>Last updated: {formatDate(repo.pushed_at)}</p>
        </div>
    )
}

export default RepoItem