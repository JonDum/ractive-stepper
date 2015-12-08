# ractive-stepper

A numeric stepper / spinner that allows full styling and customizability.

input[type="number"]'s aren't very customizable and its diffcult to achieve
anything above the default styling that works in a consistent manner cross
browser.

### Demo

[Live Demo](http://jondum.github.com/ractive-stepper/demo/)

### Install


```
npm install ractive-stepper --save
```


### Usage

Add the stepper to your Ractive instance:

```
Ractive.extend({
    ...
    components: {
        stepper: require('ractive-stepper')
    },
    ...
});
```

Use it

```
<stepper value='{{ myValue }}'></stepper>
```

