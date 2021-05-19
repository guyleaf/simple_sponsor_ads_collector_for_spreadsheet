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

interface base {
  [header: string]: string | number | boolean
}

interface sponsorType extends base {
  sponsor: string,
  level: levels,
  "name:zh-TW": string,
  "name:en": string,
  "intro:zh-TW": string,
  "intro:en": string,
  link: string,
  image: string,
  canPublish: boolean
}

interface adType extends base {
  sponsor: string,
  link: string,
  image: string,
  specialWeight?: number,
  canPublish: boolean
}

const sponsors: Array<sponsorType> = [
  {
    "sponsor": "0",
    "level": levels.titanium,
    "name:zh-TW": "Dadabase",
    "name:en": "Intergeek",
    "intro:zh-TW": "Id nulla ut nulla tempor sint veniam deserunt non fugiat id.",
    "intro:en": "Aliquip aute irure aliqua amet deserunt.",
    "link": "https://www.google.com",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/84/Example.svg",
    "canPublish": false
  },
  {
    "sponsor": "1",
    "level": levels.diamond,
    "name:zh-TW": "Netur",
    "name:en": "Bedlam",
    "intro:zh-TW": "Cupidatat qui minim ad enim Lorem duis tempor cillum mollit amet cillum adipisicing occaecat ad.",
    "intro:en": "Ea id proident ullamco id officia laboris magna pariatur enim nostrud magna sunt nostrud incididunt.",
    "link": "https://www.google.com",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/84/Example.svg",
    "canPublish": false
  },
  {
    "sponsor": "2",
    "level": levels["organizer"],
    "name:zh-TW": "Kenegy",
    "name:en": "Comfirm",
    "intro:zh-TW": "Aliqua ea tempor voluptate reprehenderit velit fugiat labore magna.",
    "intro:en": "Ullamco aliquip consequat amet id eu aliqua velit consectetur.",
    "link": "https://www.google.com",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/84/Example.svg",
    "canPublish": false
  },
  {
    "sponsor": "3",
    "level": levels.gold,
    "name:zh-TW": "Scentric",
    "name:en": "Manufact",
    "intro:zh-TW": "Consectetur quis in ullamco nostrud.",
    "intro:en": "Elit ut aliqua dolor consequat do pariatur eiusmod esse magna esse dolore Lorem tempor.",
    "link": "https://www.google.com",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/84/Example.svg",
    "canPublish": true
  },
  {
    "sponsor": "4",
    "level": levels.bronze,
    "name:zh-TW": "Zillan",
    "name:en": "Gadtron",
    "intro:zh-TW": "Nisi exercitation aliqua consequat ea dolor deserunt.",
    "intro:en": "Dolor enim id anim deserunt culpa dolore officia nostrud in ipsum nisi culpa minim irure.",
    "link": "https://www.google.com",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/84/Example.svg",
    "canPublish": true
  }
];

const ads: Array<adType> = [
  {
    "sponsor": "0",
    "link": "https://www.google.com",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/84/Example.svg",
    "specialWeight": 4,
    "canPublish": true
  },
  {
    "sponsor": "4",
    "link": "https://www.google.com",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/84/Example.svg",
    "specialWeight": 2,
    "canPublish": false
  },
  {
    "sponsor": "1",
    "link": "https://www.google.com",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/84/Example.svg",
    "specialWeight": 6,
    "canPublish": true
  },
  {
    "sponsor": "4",
    "link": "https://www.google.com",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/84/Example.svg",
    "specialWeight": 5,
    "canPublish": false
  },
  {
    "sponsor": "1",
    "link": "https://www.google.com",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/84/Example.svg",
    "specialWeight": 5,
    "canPublish": false
  },
  {
    "sponsor": "2",
    "link": "https://www.google.com",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/84/Example.svg",
    "specialWeight": 5,
    "canPublish": true
  },
  {
    "sponsor": "1",
    "link": "https://www.google.com",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/84/Example.svg",
    "specialWeight": 3,
    "canPublish": false
  },
  {
    "sponsor": "1",
    "link": "https://www.google.com",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/84/Example.svg",
    "specialWeight": 5,
    "canPublish": false
  },
  {
    "sponsor": "0",
    "link": "https://www.google.com",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/84/Example.svg",
    "specialWeight": 7,
    "canPublish": false
  },
  {
    "sponsor": "2",
    "link": "https://www.google.com",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/84/Example.svg",
    "specialWeight": 4,
    "canPublish": true
  },
  {
    "sponsor": "1",
    "link": "https://www.google.com",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/84/Example.svg",
    "specialWeight": 5,
    "canPublish": true
  },
  {
    "sponsor": "0",
    "link": "https://www.google.com",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/84/Example.svg",
    "specialWeight": 2,
    "canPublish": false
  },
  {
    "sponsor": "4",
    "link": "https://www.google.com",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/84/Example.svg",
    "specialWeight": 10,
    "canPublish": false
  },
  {
    "sponsor": "4",
    "link": "https://www.google.com",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/84/Example.svg",
    "specialWeight": 8,
    "canPublish": false
  },
  {
    "sponsor": "2",
    "link": "https://www.google.com",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/84/Example.svg",
    "canPublish": true
  }
];

export default async (doc: GoogleSpreadsheet, sheetIds: {sponsor: string, sponsor_ads: string}) => {
  console.log("Loading sheets info...");
  await doc.loadInfo();
  console.log("Adding fake sponsor data...");
  const sponsor = doc.sheetsById[sheetIds.sponsor];
  await sponsor.addRows(sponsors);
  console.log("Adding fake ads data...");
  const sponsor_ads = doc.sheetsById[sheetIds.sponsor_ads];
  await sponsor_ads.addRows(ads);
  console.log("Finish generating fake data!");
};