react-paginator
===============

A Paginator Component for Reactjs

> This paginator is currently coupled to bootstrap styles -- everyone uses those anyway ;)


### Install

`npm i -S react-paginator`

### [DEMO](http://landau.github.io/react-paginator)

![example image](https://raw.githubusercontent.com/landau/react-paginator/master/examples/img.png)

### Usage

```js
var Paginator = require('react-paginator');

// onPaginate will receive a page number
<Paginator maxPages="5" numPages="10" onClick={this.onPaginate}/>
```
