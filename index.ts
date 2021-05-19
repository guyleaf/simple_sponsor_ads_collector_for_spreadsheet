import generateFakeData from "./src/generateFakeData";
import collectSponsorAds from "./src/collectSponsorAds";
import config from "./config.json";
import { GoogleSpreadsheet } from "google-spreadsheet";

const auth_type = config.auth_type;
const creds: {
  auth_type: string,
  SERVICE_ACCOUNT_EMAIL?: string,
  PRIVATE_KEY?: string,
  API_KEY?: string
} = {auth_type: auth_type};

if (auth_type == "service") {
  creds["SERVICE_ACCOUNT_EMAIL"] = config.SERVICE_ACCOUNT_EMAIL;
  creds["PRIVATE_KEY"] = config.PRIVATE_KEY;
}
else if (auth_type == "api") {
  creds["API_KEY"] = config.API_KEY;
}
else {
  throw new Error("Unsupported authentication type. It should be service, api.");
}

const doc = new GoogleSpreadsheet(config.spreadsheetId);

(async () => {
  /* Authentication */
  if (creds.auth_type == "service") {
    await doc.useServiceAccountAuth({
      client_email: creds.SERVICE_ACCOUNT_EMAIL,
      private_key: creds.PRIVATE_KEY
    });
  }
  else {
    doc.useApiKey(creds.API_KEY);
  }

  if (config.generateFakeData) { await generateFakeData(doc, config.sheetIds); }
  await collectSponsorAds(doc, config.outputFolder, config.sheetIds);
})()