interface key {
  auth_type: string,
  SERVICE_ACCOUNT_EMAIL?: string,
  PRIVATE_KEY?: string,
  API_KEY?: string
}

export default async (creds: key, outputFileName: string, sheetId: string) => {
  
};