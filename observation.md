main change here is to 'prevent default' of the form post event

```html
    <form x-data="signupForm" @submit.prevent="submitForm">
```

analogous to prevent default in react and similar or just pure JS but I still think the syntax is a bit weird

so, sinupForm is still linking Astro to use this in an external file where it is an anon function 

this is a part of [x-on prevent](https://alpinejs.dev/directives/on#prevent) where `x-on` is a *directive* and at the same level / namespace of others such as

* x-data
* x-init
* x-bind
* x-show

and so on and `x-on` _allows you to easily run code on dispatched DOM events_

happy days, lets move on

other changes in this are to do with 

```html
        <button type="button" x-on:click.shift="console.log('click')">click</button>
        <button type="button" x-on:mouseleave.ctrl="console.log('mouseleave')">mouseleave</button>
        <button type="button" x-on:dblclick="console.log('dblclick')">dblclick</button>
```

where these are other lets call them 'behaviours' for now that can be augmented to trigger events, but in these exapmples just console logs

however in a web form, needing a user to shift-click, mouse leave or double click is of limited significance but it could be used in other scenarios more meaningfully, such as drawing apps or such

