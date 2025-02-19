
/*

https://fakeplasticsouks.blogspot.com/2008/08/word.html

It originated from The Young Ones, the brilliant 1980s British comedy series led by Rick Mayall and Adrian Edmonson, Nigel Planer and Christopher Ryan and even featuring the occasional burst of Alexi Sayle. There’s a scene in the episode 'Boring' where two of Satan’s little helpers have an argument: one’s called Orgo and one’s called Numklefutumch. Numklefutumch has a problem because, as a little devil, nobody ever says his name, so he’s never called to earth to do evil, while Orgo is always getting stuff because people say ‘shall we go to eat out or go to the cinema tonight?’

At that point, Neil The Hippy tries to read something in the newspaper and pronounces it “Numklefutumch”, calling our little devil to earth in order to get up to some naughtiness.

So it’s word that, oddly, stayed with me. I started using it in the phrase, ‘faster than you can say Numklefutumch’.

*/

document.addEventListener('alpine:init', () => {
    Alpine.data('counter', () => ({
        count: 0,
        name: 'Numklefutumch',

        logCount() {
            console.log('The count is currently', this.count)
        }
    }))
})