import React from 'react'
import {renderToString} from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import serialize from 'serialize-javascript'
import Routes from '../client/routes'
import { Helmet } from 'react-helmet'
import { ServerStyleSheet } from 'styled-components'

export default (req, store, context) => {
  const sheet = new ServerStyleSheet()

  const content = renderToString(
    sheet.collectStyles(
      <Provider store={store}>
        <StaticRouter location={req.path} context={context}>
          <div>{renderRoutes(Routes)}</div>
        </StaticRouter>
      </Provider>
    )
  )

  const styleTags = sheet.getStyleTags()

  const helmet = Helmet.renderStatic()

  const html = `
    <html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Courgette" rel="stylesheet">
        ${styleTags}
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `
  return html
}
