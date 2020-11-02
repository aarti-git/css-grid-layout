const path = require('path')
const sass = require('node-sass');
const fs = require('fs')
const scss_content = fs.readFileSync(path.join(__dirname, '/css/index.scss'))

const output = sass.renderSync({
    data: scss_content.toString(),
    outputStyle: 'expanded'
})

const css = output.css.toString()
fs.writeFileSync(path.join(__dirname, "/css/out.css"), css)
console.log('file created!')