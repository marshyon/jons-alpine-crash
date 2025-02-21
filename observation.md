[x-show](https://alpinejs.dev/directives/show) shows or hides an element _whithout removing it from the DOM_ where as `x-if` removes the element from the DOM so `x-show` lends itself to modals more as you will still want for the information that is in a modal to be present, even if the current desired state is one which precludes this data from view

this has a side effect however when the page initially loads

there is a 'falsh' of this content until the JS kicks in and hides it

```css
[x-cloak] {
    display: none !important;
}
```

this css needs to be added so display of elements with `x-cloak` is suppressed

and the modal needs this to be added also

```html
.....
        <!-- success message -->
        <div class="overlay" x-show="success" x-cloak>
            <div class="modal">
                <h2>Success!</h2>
                <p>Thanks for signing up, <span x-text="username"></span>!</p>
                <button @click="success = false">Close</button>
            </div>
    </form>
```


