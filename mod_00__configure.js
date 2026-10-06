import express from 'express'
import { configureCORS } from './mod_00_cors.js'
import { configureRedirect } from './mod_00_redirect.js'
import { configureShutdown } from './mod_00_shutdown.js'

const configure = (app) => {
  // best practice for server shutdown - catch events SIGINT and SIGTERM
  configureShutdown()

  // allow other origins to use this server - github static, github dev
  configureCORS(app)

  // enforce https - render uses a proxy server
  configureRedirect(app)

  // convert body json strings to javascript objects
  app.use(express.json())

  // serve static files
  app.use('/', express.static('./dist'))
}

export { configure }
