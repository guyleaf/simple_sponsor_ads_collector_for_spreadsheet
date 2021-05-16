import { GoogleSpreadsheet } from "google-spreadsheet";

interface key {
  auth_type: string,
  SERVICE_ACCOUNT_EMAIL?: string,
  PRIVATE_KEY?: string,
  API_KEY?: string
}

enum levels {
  titanium = "titanium",
  diamond = "diamond",
  gold = "gold",
  silver = "silver",
  bronze = "bronze",
  special = "special-thanks",
  organizer = "co-organizer",
  friend = "friend"
}

interface sponsorType {
  sponsor: string,
  level: levels,
  name_zh_TW: string,
  name_en: string,
  intro_zh_TW: string,
  intro_en: string
}

interface adType {
  sponsor: string,
  link: string,
  image: string,
  canPublish: boolean
}

const sponsors: sponsorType[] = [
  {
    sponsor: "test1",
    level: levels.titanium,
    name_zh_TW: "蛋糕1",
    name_en: "Cake1",
    intro_zh_TW: "奶油",
    intro_en: "cream"
  },
  {
    sponsor: "test2",
    level: levels.gold,
    name_zh_TW: "蛋糕1",
    name_en: "Cake1",
    intro_zh_TW: "奶油",
    intro_en: "cream"
  },
  {
    sponsor: "test3",
    level: levels.organizer,
    name_zh_TW: "蛋糕1",
    name_en: "Cake4",
    intro_zh_TW: "奶油",
    intro_en: "cream"
  },
  {
    sponsor: "test4",
    level: levels.silver,
    name_zh_TW: "蛋糕1",
    name_en: "Cake1",
    intro_zh_TW: "奶油",
    intro_en: "cream"
  },
  {
    sponsor: "test5",
    level: levels.special,
    name_zh_TW: "蛋糕1",
    name_en: "Cake1",
    intro_zh_TW: "奶油",
    intro_en: "cream"
  }
];

const ads: adType[] = [
  {
    sponsor: "test1",
    link: "0",
    image: "null",
    canPublish: false
  },
  {
    sponsor: "test1",
    link: "1",
    image: "null",
    canPublish: false
  },
  {
    sponsor: "test1",
    link: "2",
    image: "null",
    canPublish: true
  },
  {
    sponsor: "test1",
    link: "3",
    image: "null",
    canPublish: false
  },
  {
    sponsor: "test2",
    link: "0",
    image: "null",
    canPublish: false
  },
  {
    sponsor: "test2",
    link: "1",
    image: "null",
    canPublish: true
  },
  {
    sponsor: "test3",
    link: "0",
    image: "null",
    canPublish: true
  },
  {
    sponsor: "test3",
    link: "1",
    image: "null",
    canPublish: true
  },
  {
    sponsor: "test3",
    link: "2",
    image: "null",
    canPublish: false
  }
];

export default async (creds: key, sheetId: string) => {
  const doc = new GoogleSpreadsheet(sheetId);
  
  if (creds.auth_type == "service") {
    await doc.useServiceAccountAuth({
      client_email: creds.SERVICE_ACCOUNT_EMAIL,
      private_key: creds.PRIVATE_KEY
    });
  }
  else {
    doc.useApiKey(creds.API_KEY);
  }
  
  await doc.loadInfo();
  console.log(doc.title);
};