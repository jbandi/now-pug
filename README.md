Example project that reproduces that `pug` is not wokring with Now 2.0.

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
