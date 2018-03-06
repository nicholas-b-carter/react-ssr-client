import React from 'react'

// StaticRouter renames context to staticContext when it passes
// it as a prop.
// Needs default value, as it doesn't exist in client land.
const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true
  return <h1>Oops, route not found</h1>
}

export default {
  component: NotFoundPage
}
