
 changes are all in the `index.js` file  and correlate to a method of form validation in pure JS

 this is nice as it uses no 3rd party module, is clean, easy to see what is going on and above all easily maintainable in our own code

a point perhaps worth re-iterating, no 3rd party involvement for basic, and possibly not so basic, form validation so long as you know enough modern JS to keep it pretty and effective

so long as we do not have to support IE 8 we should be happy

```javascriptdodnt
validateForm() {
    this.errors = {}

    if (this.username.length < 3) {
        this.errors.username = 'Username must be at least 3 characters.'
    }
    if (this.password.length < 6) {
        this.errors.password = 'Password must be at least 6 characters.'
    }
    if (this.password !== this.passwordConfirm) {
        this.errors.passwordConfirm = 'Passwords do not match.'
    }
    if (!this.belt) {
        this.errors.belt = 'Please select a belt color.'
    }
    if (this.bio.length < 10) {
        this.errors.bio = 'Bio must be at least 10 characters.'
    }
},
....
```

a bunch of `if` statements get run when `validateform()` runs

the whole thing is orchestrated in `index.js` as the submit form event is already registered in an earlier stage and

```javascript
        submitForm($event) {
            this.validateForm()
            console.log(this.errors)

...
```

both invokes `valdateForm` and logs its output using the `errors` part of the alpine state object / anon function

