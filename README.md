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

### Styling

`ractive-stepper` provides minimal styling in the js. It is designed to provide a foundation to easily style the increment/decrement buttons.

By default they are small, cross browser css triangles. You can easily scale the size of the arrows by increasing the `font-size` of the `.steppers`
container. It is also very easy to completely change the layout of the buttons (for example, a large "-/+" icon on either side of the button for mobile).

