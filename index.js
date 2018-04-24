/**
 * static server plugin for uba-server
 * Date : 2018-04-24 17:12:40
 */

const path = require("path");
const serveStatic = require("serve-static");

module.exports = (app, opt) => {
  for (let i = 0; i < opt.length; i++) {
    let option = opt[i];
    app.use(serveStatic(path.join(path.resolve('.'), option.dir), Object.assign({}, option.options)));
  }
}
