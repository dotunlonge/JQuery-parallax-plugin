# JQuery-parallax-plugin
a jquery plugin to add parallax effect to an element


```javascript
  <script src="path/to/jquery.min.js">
        </script>


        <script src="path/to/parallaxMe.js"></script>
       
       <script>
            $(".parentElementClass || #parentElementId").parallaxWrapper();
            $(".elementInNeedOfParallax || #elementInNeedOfParallax ").parallaxMe(2||...8)
        </script>
        
```

if what i mean by "2||...8" is not inherently clear, i mean putting any number value between 2 and 8, 
including 2 and 8, will result in varying degrees of the parallax effect.

including the jquery script before the parallax script is compulsory for the plugin to work.

the parallaxWrapper refer applies some styling to the parent elemnt of the element you want to add the parallax effect to, and since we are using jquery, can be placed on the class of the parent element or id of the parent element.






