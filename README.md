# js-simpletest
Simple Javascript unit testing library 

How to use
------------------

```html
<script src="simpletest.js"></script>
<script>
 tests({

   'adds numbers': function() {
     eq(6, add(2, 4));
     eq(6.4, add(2.4, 4));
   },

   'subtracts numbers': function() {
     eq(-2, add(2, -4)); 
   },

 });
</script>
```

**That's it!**

Its beautified version of https://github.com/joewalnes/jstinytest 
