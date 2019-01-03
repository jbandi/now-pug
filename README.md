Example project that reproduces that `pug` is not wokring with Now 2.0.

It reproduces issue: https://github.com/zeit/now-cli/issues/1790

If you deploy to Now 2.0:

    now
    
The result is a `Internal Server Error` on the default route `/`.  
The route `/api`, which is not rendered with `pug` works.

In the log you get: 

```
Error: Cannot find module 'pug'
    at webpackEmptyContext (/var/task/user/index.js:14653:9)
    at new View (/var/task/user/index.js:14542:38)
```

Running the app locally (`npm start`) works.  
The app also works if you deploy it to Now 1.0 (just delete the file `now.json` and run `now`).

#### Update 1
Running the app locally with `ncc` instead of `node` reproduces the problem:

    ncc run index.js
    
Then navigate to `http://localhost:4002/` and you get:

    Error: Cannot find module 'pug'
        at webpackEmptyContext (/private/var/folders/ky/9jjcsdg901l0r3bkh90p5v7m0000gn/T/d41d8cd98f00b204e9800998ecf8427e/index.js:3889:9)
        at new View (/private/var/folders/ky/9jjcsdg901l0r3bkh90p5v7m0000gn/T/d41d8cd98f00b204e9800998ecf8427e/index.js:5476:38)
        ...
