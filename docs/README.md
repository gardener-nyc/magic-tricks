# Magic Tricks Frontend

This is the frontend for the headless SMDH.lol site. It includes a set of Netlify functions 

## Requirements
- Node 8+
- Yarn
- Sanity CLI

## Local Development

1. Install Yarn dependencies
```
$ yarn install
```
2. Copy `.env.example` to `.env.development` and set the proper values.
3. Start the Netlify dev process. This will log you into Netlify.
```
$ yarn start
```

## Deployments
Continuious deployments are automatically happening based on two things:
1. Pushing code to `master`. Netlify is watching this branch and will deploy any code changes.
2. Webhooks coming from Sanity. Any time any update happens in Gatsby, Netlify will trigger a `master` branch build.

## Environment Variables
All environment variables found in `.env.example` should be included in the Netlify admin panel as environment variables. Anything with the `GATSBY_` prefix will be included in the client side, so BE CAREFUL WITH THAT.