'use strict';

var React = require('react');
var dom = React.DOM;
var paginator = require('../');
var div = document.querySelector('#demo');

var demo = React.createClass({
  getInitialState: function() {
    return {
      pages: 5,
      maxPages: 3
    };
  },

  setMaxPages: function(e) {
    this.setState({
      maxPages: e.target.value
    });
  },

  setPages: function(e) {
    this.setState({
      pages: e.target.value
    });
  },

  render: function() {
    return dom.div(
      null,
      dom.strong(null, 'numPages: '),
      dom.input({
        placeholder: 'pages',
        onChange: this.setPages,
        value: this.state.pages
      }),
      dom.br(),
      dom.strong(null, 'maxPages: '),
      dom.input({
        placeholder: 'maxPages',
        onChange: this.setMaxPages,
        value: this.state.maxPages
      }),
      dom.br(),
      paginator({
        maxPages: parseInt(this.state.maxPages, 10),
        numPages: parseInt(this.state.pages, 10)
      })
    );
  }
});

React.renderComponent(demo(), div);
