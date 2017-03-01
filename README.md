# js-simpletest
Simple Javascript unit testing library 

How to use
------------------

```html
<script src="simpletest.js"></script>
<script>
    tests({
        'Sample success': function () {
            eq(5,5); // 5 === 5
        },
        'Sample failure': function () {
            fail();
        },

    });
</script>

```

**That's it!**

Its beautified version of https://github.com/joewalnes/jstinytest 
