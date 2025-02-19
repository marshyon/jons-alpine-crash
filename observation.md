the project files are reset now to use NetNinja [crash course](https://github.com/iamshaunjp/alpine-crash-course) files and will follow this from here on in

the first change is to add `x-data` to use `signupForm` ref to an anon function which we've seen already in `stage-001`

next to introduce 2 things 

* [x-model](https://alpinejs.dev/directives/model)
* [x-text](https://alpinejs.dev/directives/text)

using these in conjunction allows for the 'binding' of some text on the page to inputs in the form 

so a sort of 2-way binding thing is going on, where if we change the value of one of these elements in the js code, it changes the value that is loaded in html

vice-versa, changing the value in the form pushes values back and they are reflected in the text element of the page, so we can observe this happening

