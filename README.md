# uba-server-static

[![npm version](https://img.shields.io/npm/v/uba-server-static.svg)](https://www.npmjs.com/package/uba-server-static)
[![devDependency Status](https://img.shields.io/david/dev/tinper-uba/uba-server-static.svg)](https://david-dm.org/tinper-uba/uba-server-static#info=devDependencies)
[![NPM downloads](http://img.shields.io/npm/dm/uba-server-static.svg?style=flat)](https://npmjs.org/package/uba-server-static)

---

# Installation

```bash
$ npm install uba-server uba-server-static -D
```

# Usage

open `uba.config.js` file 
```js
plugins: {
    static: {
        root: "src/static"
    }
}
```
# API

### root
- root directory string. nothing above this root directory can be served