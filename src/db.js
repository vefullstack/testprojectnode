export const dbConfig = ({
  HOST: "azurenodeapp.database.windows.net",
  USER: "azureadmin",
  PASSWORD: "azure@123#",
  DB: "azurenodeappDB",
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});


