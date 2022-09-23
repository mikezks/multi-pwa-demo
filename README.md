# Multi PWA Demo

This project shows a PWA Service Worker setup for two different SPAs deployed to different subfolders. Each app can notify the user on new versions independently. A snackbar asks the user to reload.

## Development server

- Run `npm start` to build both applications and run the lite-server with the Service worker enabled.
- Run `npm run build:one` and after the build finished, press the `Check Updates` button to make sure, if the update was recognized.
- Navigate to `App TWO`, run `npm run build:two` and press the `Check Updates` button in the second app.
- Stay in `App TWO`, run `npm run build:one` and press the `Check Updates` button in the second app again - no notification should be shown.

## PWA Manager Lib

This library offers the following generic implementations:
 - A Snackbar to notify the user on updates (`notification-snackbar`).
 - An Angular Material navigation menu (`nav`).
 - A service to configure the sidebar navigation links (`nav-link`).

## Setup in Web Manifest

The generated PWA Web Manifest file needs to be configured to point to the subfolder of your app:

```json
  {
    "scope": "/",
    "start_url": "/app-one/",
  }
```

## Setup in the angular.json

The `baseHref` need to point to the app's subfolder as well:

```json
  {
    "projects": {
      "app-one": {
        "architect": {
          "build": {
            "options": {
              "baseHref": "/app-one/"
            }
          }
        }
      }
    }
  }
```
