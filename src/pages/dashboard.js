import * as React from "react"
import { Link } from "gatsby"

const Dashboard = (props) => {
  return (
    <div>
        <h1>Dashboard</h1>
        <Link to="/learn/">Go to Learn</Link>
    </div>
  )
}

export default Dashboard
