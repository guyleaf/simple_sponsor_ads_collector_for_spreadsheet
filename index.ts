import generateFakeData from "./src/generateFakeData";
import collectSponsorAds from "./src/collectSponsorAds";
import * as config from "./config.json";

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

(async () => {
  if (config.generateFakeData) { await generateFakeData(creds, config.sheetId); }
  await collectSponsorAds(creds, config.output, config.sheetId);
})()