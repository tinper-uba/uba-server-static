/**
 * static server plugin for uba-server
 * Date : 2017-12-27 13:20:18
 */

const path = require("path");
const svr = require("koa-static");

module.exports = (app, opt) => {
  app.use(svr(opt.root));
}
