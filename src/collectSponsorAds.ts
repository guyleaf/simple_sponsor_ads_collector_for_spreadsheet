import { GoogleSpreadsheet, GoogleSpreadsheetRow } from "google-spreadsheet";
import fs from "fs";

interface base {
  [header: string]: string | Number | boolean
}

interface adType extends base{
  sponsor: string,
  link: string,
  image: string,
  weight: Number,
  canPublish: string
}

interface sponsorType extends base {
  sponsor: string,
  level: string,
  "name:zh-TW": string,
  "name:en": string,
  "intro:zh-TW": string,
  "intro:en": string,
  link: string,
  image: string,
  canPublish: string
}

function exportJson(data: {[header: string]: string | Number | boolean}[], outputPath: string) {
  fs.writeFileSync(outputPath, JSON.stringify(data));
}

async function combineAds(sponsors: GoogleSpreadsheetRow[], sponsor_ads: GoogleSpreadsheetRow[], sponsor_level: GoogleSpreadsheetRow[]): Promise<adType[]>  {
  var sponsorMap = new Map(sponsors.map((sponsor): [string, string] => [sponsor.sponsor, sponsor.level]));
  var sponsorLevelMap = new Map(sponsor_level.map((data): [string, Number] => [data.level, parseFloat(data.basicWeight)]));
  
  return sponsor_ads.map((data): adType => {
    const sponsor: string = data.sponsor;
    const specialWeight: Number = Number.parseFloat(data.specialWeight);
    const canPublish: boolean = Boolean(data.canPublish);

    const weight = (() => {
      const level = sponsorMap.get(sponsor);
      const basicWeight = sponsorLevelMap.get(level);
      return isNaN(specialWeight.valueOf()) ? basicWeight : specialWeight;
    })();

    return {
      sponsor: sponsor,
      link: data.link,
      image: data.image,
      weight: weight,
      canPublish: canPublish ? "Y" : "N"
    }
  });
}

export default async (doc: GoogleSpreadsheet, outputFolder: string, sheetIds: {sponsor: string, sponsor_ads: string, sponsor_level: string}) => {
  console.log("Loading sheets info...");
  await doc.loadInfo();

  const sponsor_sheet = doc.sheetsById[sheetIds.sponsor];
  const sponsor_ads_sheet = doc.sheetsById[sheetIds.sponsor_ads];
  const sponsor_level_sheet = doc.sheetsById[sheetIds.sponsor_level];

  console.log("Loding sponsor data...");
  const sponsors = await sponsor_sheet.getRows();
  console.log("Loding ads data...");
  const sponsor_ads = await sponsor_ads_sheet.getRows();
  console.log("Loding level data...");
  const sponsor_level = await sponsor_level_sheet.getRows();

  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
  }

  console.log("Processing ads data...");
  combineAds(sponsors, sponsor_ads, sponsor_level).then(data => {
    exportJson(data, outputFolder + '/sponsor_ads.json');
    console.log("Finish exporting ads data!");
  });

  console.log("Processing sponsor data...");
  (async (): Promise<sponsorType[]> => {
    return sponsors.map(row => {
      return {
        sponsor: row.sponsor,
        level: row.level,
        "name:zh-TW": row["name:zh-TW"],
        "name:en": row["name:en"],
        "intro:zh-TW": row["intro:zh-TW"],
        "intro:en": row["intro:en"],
        link: row.link,
        image: row.image,
        canPublish: row.canPublish
      };
    });
  })().then(data => {
    exportJson(data, outputFolder + '/sponsor.json');
    console.log("Finish exporting sponsor data!");
  });
};