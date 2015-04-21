axis         = require 'axis'
rupture      = require 'rupture'
autoprefixer = require 'autoprefixer-stylus'
css_pipeline = require 'css-pipeline'
js_pipeline  = require 'js-pipeline'
records      = require 'roots-records'

module.exports =
  ignores: ['readme.md', '**/layout.*', '**/_*', '.gitignore', 'ship.*conf']

  extensions: [
    js_pipeline(files: ['assets/js/templates/*', 'assets/js/*.jsx'])
    css_pipeline(files: 'assets/css/*.styl')
    records(staff: url: 'http://api.bycarrot.com/staff')
  ]

  stylus:
    use: [axis(), rupture(), autoprefixer()]
    sourcemap: true

  'coffee-script':
    sourcemap: true

  jade:
    pretty: true