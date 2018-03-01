# dotenvjson

[![npm version](https://badge.fury.io/js/%40eddiewen%2Fdotenvjson.svg)](https://badge.fury.io/js/%40eddiewen%2Fdotenvjson)
[![Dependency Status](https://david-dm.org/EddieWen-Taiwan/dotenvjson.svg)](https://david-dm.org/EddieWen-Taiwan/dotenvjson)
[![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg?style=flat-square)](https://github.com/conventional-changelog/standard-version)
[![CircleCI](https://circleci.com/gh/EddieWen-Taiwan/dotenvjson.svg?style=shield)](https://circleci.com/gh/EddieWen-Taiwan/dotenvjson)
[![Coverage Status](https://coveralls.io/repos/github/EddieWen-Taiwan/dotenvjson/badge.svg?branch=release)](https://coveralls.io/github/EddieWen-Taiwan/dotenvjson?branch=release)


This is a module to load .json file, like `config.json`, and export variables to `process.env`. Inspired by [dotenv](https://github.com/motdotla/dotenv).

### Installation

```bash
$ yarn add @eddiewen/dotenvjson

# npm install --save @eddiewen/dotenvjson
```

### Usage

Create a `.env.json` file in the root folder of your project.

```javascript
const dotenvjson = require('@eddiewen/dotenvjson');

dotenvjson();
```

And you get `process.env` now.

##### Options

- `path`

Default value: `path.join(process.cwd(), '.env.json')`

You can use a custom config file path.

- `inUpperCase`

Default value: `true`

You don't have to use upper case in config file. Parser transforms them to upper case if this is true. Or spelling names would be kept.

### Change log

Visit [CHANGELOG.md](https://github.com/EddieWen-Taiwan/dotenvjson/blob/master/CHANGELOG.md)
