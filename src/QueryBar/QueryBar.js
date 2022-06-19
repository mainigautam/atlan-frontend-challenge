import React from 'react'
import Query from './Query'
import './QueryBar.css'
const QueryBar = () => {
    const queries = [
        "SELECT c1, c2 FROM t;",
        "SELECT * FROM t",
        "SELECT c1, c2 FROM t WHERE condition;",
        "SELECT DISTINCT c1 FROM t WHERE condition;",
        "SELECT c1, c2 FROM t ORDER BY c1 ASC [DESC];",
        "SELECT c1, aggregate(c2) FROM t GROUP BY c1 HAVING condition;",
    ]
  return (
    <div className='query-container'>
        <Query itemLabel={"Query references"}/>
        {queries.map((query,index)=>{
            return(
                <Query itemLabel={query} index={index} copy={true} key={index}/>
            )
        })}
    </div>
  )
}

export default QueryBar