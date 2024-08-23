this project is to rewrite the javascript documentation and to make it more pleasant to look at.
And try to make all in vanilla.

I have to try to generate all redondonces in js.
Inspired by react, that why i use this architecture.

I use json file to store data.
I use only 1 file of css.

The structure : 

-index.html
    -component(to generate the content of the page, exemple : navbar, navbarList, footer)
        -fetch json file (to retrieve the contents)
            -pages
                -component(to generate the content of the page, exemple : navbar, navbarList, footer)
                    -fetch json file (to retrieve the contents)

                -script (to execute the fonction for the specefic page)
                   -fetch json file (to retrieve the contents)


Good to know: 
    All btn are not onClick, i use a addEvent listenner for them.
