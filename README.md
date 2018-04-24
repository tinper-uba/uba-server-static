# uba-server-static

[![npm version](https://img.shields.io/npm/v/uba-server-static.svg)](https://www.npmjs.com/package/uba-server-static)
[![devDependency Status](https://img.shields.io/david/dev/tinper-uba/uba-server-static.svg)](https://david-dm.org/tinper-uba/uba-server-static#info=devDependencies)
[![NPM downloads](http://img.shields.io/npm/dm/uba-server-static.svg?style=flat)](https://npmjs.org/package/uba-server-static)

---
[![NPM](https://nodei.co/npm/uba-server-static.png)](https://nodei.co/npm/uba-server-static/)
---

# Installation

```bash
$ npm install uba-server-static -D
```

# Usage

Edit the `.ubarc` file
```js
{
    "static": [{
        "dir": "src/static"
    },{
        "dir": "public",
        "options":{
            "maxAge":"1d"
        }
    }]
}
```
# API

### dir
- dir directory string. nothing above this root directory can be served

> Look at more https://www.npmjs.com/package/serve-static#api