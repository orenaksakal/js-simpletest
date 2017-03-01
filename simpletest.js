/**
 * Simple in-browser unit-test library, with zero deps.
 *
 *  Forked from jstinytest (https://github.com/joewalnes/jstinytest)
 *  modified and improved by oren aksakal
 *
 */

var TinyTestHelper = {

    render: function (tests, failures) {

        var numOfTests = Object.keys(tests).length;
        var successes = numOfTests - failures;

        var summary = "Ran " + numOfTests + " tests: " + successes + " succeed " + failures + " failed.";

        summaryEl = document.createElement('h1');
        summaryEl.textContent = summary;
        document.body.appendChild(summaryEl);
    }
};

var SimpleTest = {

    run: function (tests) {
        var failures = 0;
        for (var testName in tests) {
            var testAction = tests[testName];
            try {
                testAction.apply(this);
                console.log('%c' + testName, "color:green;font-weight:bold");
            } catch (e) {
                failures++;
                console.groupCollapsed('%c' + testName, "color:red;font-weight:bold");
                console.error(e.stack);
                console.groupEnd();
            }
        }
        setTimeout(function () { // Give document a chance to complete
            if (window.document && document.body) {
                document.body.style.backgroundColor = (failures == 0 ? '#99ff99' : '#ff9999');
                TinyTestHelper.render(tests, failures);
            }
        }, 0);
    },

    fail: function (msg) {
        throw new Error('fail(): ' + msg);
    },

    assert: function (value, msg) {
        if (!value) {
            throw new Error('assert(): ' + msg);
        }
    },

    assertEquals: function (expected, actual) {
        if (expected != actual) {
            throw new Error('assertEquals() "' + expected + '" != "' + actual + '"');
        }
    },

    assertStrictEquals: function (expected, actual) {
        if (expected !== actual) {
            throw new Error('assertStrictEquals() "' + expected + '" !== "' + actual + '"');
        }
    },

};

var fail = SimpleTest.fail.bind(SimpleTest),
    assert = SimpleTest.assert.bind(SimpleTest),
    assertEquals = SimpleTest.assertEquals.bind(SimpleTest),
    eq = SimpleTest.assertEquals.bind(SimpleTest), // alias for assertEquals
    assertStrictEquals = SimpleTest.assertStrictEquals.bind(SimpleTest),
    tests = SimpleTest.run.bind(SimpleTest);
/**
 * Created by orenaksakal on 3/1/17.
 */
