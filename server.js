const fallback = require('express-history-api-fallback')
const expressStaticGzip = require('express-static-gzip')
const express = require('express')
const app = express()

app.set('port', (process.env.PORT || 3100))

// serve compress js/css files for bandwidth saving
app.use('/', expressStaticGzip('./build', {
  enableBrotli: true
}))

app.use(express.static('build'))
app.use(fallback('index.html', { root: 'build' }))

app.listen(app.get('port'), () => {
  const port = app.get('port')
  console.log(`http://localhost:${port}`)
})
