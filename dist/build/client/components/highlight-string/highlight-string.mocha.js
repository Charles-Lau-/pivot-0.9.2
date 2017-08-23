"use strict";
var chai_1 = require('chai');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
require('../../utils/test-utils/index');
var highlight_string_1 = require('./highlight-string');
describe('HighlightString', function () {
    it('adds the correct class', function () {
        var renderedComponent = TestUtils.renderIntoDocument(React.createElement(highlight_string_1.HighlightString, {highlightText: null, text: null}));
        chai_1.expect(TestUtils.isCompositeComponent(renderedComponent), 'should be composite').to.equal(true);
        chai_1.expect(ReactDOM.findDOMNode(renderedComponent).className, 'should contain class').to.contain('highlight-string');
    });
});
