"use strict";
var chai_1 = require('chai');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
require('../../utils/test-utils/index');
var time_filter_menu_1 = require('./time-filter-menu');
describe.skip('TimeFilterMenu', function () {
    it('adds the correct class', function () {
        var renderedComponent = TestUtils.renderIntoDocument(React.createElement(time_filter_menu_1.TimeFilterMenu, {clicker: null, dimension: null, essence: null, onClose: null}));
        chai_1.expect(TestUtils.isCompositeComponent(renderedComponent), 'should be composite').to.equal(true);
        chai_1.expect(ReactDOM.findDOMNode(renderedComponent).className, 'should contain class').to.contain('time-filter-menu');
    });
});
