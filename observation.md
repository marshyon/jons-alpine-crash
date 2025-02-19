alpinejs is interesting in that it can have the js held within the html and as part of `x-data` 

here it is still doing just that however 

```html
<div x-data="counter">
```

is calling the function counter as defined in the `<script>` tag earlier of `index.js`

where it has an event listener registered to fire on `alpine:init` to add `Alpine.data` ....

now this is not evident unless you read the docs on [alpine.data](https://alpinejs.dev/globals/alpine-data) and put this in and I'd guess is what would be inferred if you were just to insert JS in the `x-data` tag inline

so it is not as simple as banging in some JS into a file in the hopes Alpine will just run it, some infrastructure code is required to get this done.

`Alpine.data` is one of 3 'globals' namely

* [data](https://alpinejs.dev/globals/alpine-data)
* [store](https://alpinejs.dev/globals/alpine-store)
* [bind](https://alpinejs.dev/globals/alpine-bind)

