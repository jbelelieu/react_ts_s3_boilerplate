
# Local Setup

```
npm install
npm start
```

# Style Sheets

- Written in SCSS; automatically compiles.
- All references found in `src/styles/primary.scss`

# Deploying

- The app will auto-deploy via Github Actions. No need to upload the "build" directory.

## Manually Deploying

If you need to manually deploy for some reason:

- Run `npm run build`
- Go to S3 and upload the contents of the `build` folder into the `app.pikle.it` bucket.
- This will deploy it to `https://app.pikle.it/`

