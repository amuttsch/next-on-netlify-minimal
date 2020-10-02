# Minimal set up for reproducing the next-on-netlify _redirects sorting bug

With version `2.4.0` `yarn run build` produces the following (correct) `out_publish/_redirects` file:

```
# Next-on-Netlify Redirects
/api  /.netlify/functions/next_api  200
*  /.netlify/functions/next_any  200
```

Using `2.5.0` the sorting has changed, and the catch all rules are before the specific ones:

```
# Next-on-Netlify Redirects
/*  /.netlify/functions/next_any  200
  /.netlify/functions/next_any  200
/api  /.netlify/functions/next_api  200
```

We can see the `/*` catch route is before the `/api` route. Additionally, there is a new (and possible invalid) redirect.

Now the requests to `/api` are routed to `/` and the specific handler is not called.

To reproduce just change the version of `next-on-netlify` in the `package.json` to `2.4.0` or `2.5.0` and run `yarn install && yarn run build`.
