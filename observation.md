[x-bind with classes](https://alpinejs.dev/directives/bind#binding-classes) is introduced where something like

```html
<div :class="open ? '' : 'hidden'">
        Dropdown Contents...
</div>
```

is shorthand for `x-bind:class=...` 

and a ternary can be used to switch values / change state

this is an example where the logic is inlined into the html which can be an anti pattern by purists potentially but I see this as programatic so long as it is understandable, clean and simple enough not to be put elsewhere

whats the point of having things in lots of different places if what that then means is you can't see what is going on and we have many different files now, just for the sake of separation ?

the nice effect of this pattern is to dynamically change the style and state of a text value in the page to give user feedback of how many characters are left remaining to be entered into a size restricted field

a,k.a a tweet or exapmles of a password of minium length, a name of max length etc 