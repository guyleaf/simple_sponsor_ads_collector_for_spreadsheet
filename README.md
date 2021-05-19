# Simple Sponsor Data Processing For Google Spreadsheet

This repo is to collect and process sponsor ads to output json files.

## Quick Start
1. Generate your API-key / service account(recommended). Please check this [link](https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication) to get more details.

2. Configure your `config.json`. (ref: `config.example.json`)  
  Please choose one of authentication methods.
  ```js
  {
    "auth_type": "service/api", // choose one
    "SERVICE_ACCOUNT_EMAIL": "", // necessary for service account
    "PRIVATE_KEY": "", // necessary for service account
    "API_KEY": "your key", // necessary for API-key
    "generateFakeData": false,
    "spreadsheetId": "", // your spreadsheet ID
    "sheetIds": { // your worksheets id
      "sponsor": "gid query in url",
      "sponsor_ads": "gid query in url",
      "sponsor_level": "gid query in url"
    },
    "outputFolder": "output"
  }
  ``` 
3. Install dependencies  
  ```bash
  $ npm i
  ```
4. Start the service
  ```bash
  $ npm run start
  ```

## References
- [Node-google-spreadsheet library](https://theoephraim.github.io/node-google-spreadsheet)
- [Google Sheets for Developers](https://developers.google.com/sheets/api)
