looks like sean's commits died after 7 so this, being my stage-008 will be hand copied from the video with live interpretation

no further use of diffs unless the git repo gets updated, which it may or may not

still, good to see if this kind of working, with no code and only watching the videos as they come out, works better than just watching them and brain rotting

here goes, 

based on loops so I'm guessing [x-for](https://alpinejs.dev/directives/for) which has a snippet like

```html
<ul x-data="{ colors: ['Red', 'Orange', 'Yellow'] }">
    <template x-for="color in colors">
        <li x-text="color"></li>
    </template>
</ul>
```

and in this example, it uses an in line `x-data` but we don't do things this way do we ? 

in `index.html` there is already a hard coded drop down :

```html
<select x-model="belt">
    <option value="">Select a belt</option>
    <option value="black">Black</option>
    <option value="white">White</option>
    <option value="red">Red</option>
    <option value="orange">Orange</option>
    <option value="brown">Brown</option>
</select>
```

lets see if we can work out how to put this into our own `x-data` object

adding the list of `colors` in this object is trivial but creating a template in the html looks like this

```html
<template x-for="color in colors">
    <option x-bind:value=color x-text="color"></option>
</template>
```

where the textual element is coerced into being using `x-text` and an `x-bind:` is used for the value

`:value=color` 

would also work and as a 'short code' for x-bind but this is saying the same so as to be explicit but as the muscle memory builds the latter will likely be preference 

the above works but is not entirely correct as it omits `keys` so updates to dynamic lists like this wont work properly

see [x-for keys](https://alpinejs.dev/directives/for#keys)

```html
<ul x-data="{ colors: [
    { id: 1, label: 'Red' },
    { id: 2, label: 'Orange' },
    { id: 3, label: 'Yellow' },
]}">
    <template x-for="color in colors" :key="color.id">
        <li x-text="color.label"></li>
    </template>
</ul>
```

so we need something like


```html
<template x-for="color in colors" x-bind:key="color">
    <option x-bind:value=color x-text="color"></option>
</template>
```

this will work now as far as re-ordering or tracking the position of elements but there is another way see also [accessing indexes](https://alpinejs.dev/directives/for#accessing-indexes) :

```html
<template x-for="(color, idx) in colors" x-bind:key="idx">
    <option x-bind:value=color x-text="color"></option>
</template>
```

> NB: the top level tag in this `template` is `<option ...` and it must only have *just the one top level tag* similar to the way this works in react and the like, so where necessary it may need just a `<div> ... </div>` to wrap a number of elements if that is needed.