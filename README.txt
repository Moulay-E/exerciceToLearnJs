The url of the project:  
https://moulay-e.github.io/exerciceToLearnJs/

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

    To create a new page you have to :
        -create the html structure to html : pages  
        -create a new script in the js : pages 
        -create 2 new json in data one in : code
                            the other in  : html
        -go to the data and add the new link and title in the json : dataNavLink.json
        -copy the structure of a other html and add it to your new html 
            -then change the script call to you new created script
            -change the json fetch by the name of your two new array in the end of your new html in the fonction : article

That it.
