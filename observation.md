bringing in the changes made in stage-006 to add our own form validation

```html

<template x-if="errors.password">
    <p class="error" x-text="errors.password"></p>
</template>
```

hooks that back-end into the front end using [x-if](https://alpinejs.dev/directives/if)

as I see it, if condition just shows or hides content based on an outcome, so you could use `x-text` but would need JS to show nothing in this case but this is cleaner I would guess if false, this block would be extracted from the DOM, avoiding weird layout / flow issues perhaps later

