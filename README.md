
# Local Setup

```
npm install
npm start
```

# Style Sheets

- Written in SCSS; automatically compiles.
- All references found in `src/styles/primary.scss`

# Deploying

- Run `npm run build`
- Go to S3 and upload the contents of the `build` folder into the `app.pikle.it` bucket.
- This will deploy it to `https://app.pikle.it/`