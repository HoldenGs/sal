import * as React from "react"
import { Link } from "gatsby"

import Header from "../components/header"

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      
      <Header title="Landing Page"/>
      <Link to="/dashboard/">Go to Dashboard</Link>

      <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div class="flex-shrink-0">
          <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
        </div>
        <div>
          <div class="text-xl font-medium text-black">ChitChat</div>
          <p class="text-gray-500">You have a new message!</p>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
