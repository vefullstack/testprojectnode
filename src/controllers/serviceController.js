// import { pool } from "../db.js";

import Sequelize from "sequelize";
import {dbConfig} from "../db.js";
 
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

export const getService = async (req, res) => {
 sequelize.query('SELECT * FROM Use_Case_User_Scenario_Importance_Master', { type: Sequelize.QueryTypes.SELECT })
  .then(users => {
    return res.status(200).json(users)
  })
  .catch(err => {
    console.error('Error executing custom query:', err);
  }); 
};

export const createAndUpdateService = async (req, res) => { 

// Assuming you have already set up Sequelize and defined your model

const {
  SaaS_Security_Risk_Mitigation,
  Data_Loss_Prevention_over_SaaS,
  SaaS_Application_Classification,
  SaaS_Risk_Assessment_Reporting_Compliance,
  SaaS_Application_Discovery
} = req.body;

const query = `
  UPDATE use_case_user_scenario_importance_master
  SET Use_Case_Importance =
    CASE
      WHEN Base_Use_Case = 'SaaS_Security_Risk_Mitigation' THEN :SaaS_Security_Risk_Mitigation
      WHEN Base_Use_Case = 'Data_Loss_Prevention_over_SaaS' THEN :Data_Loss_Prevention_over_SaaS
      WHEN Base_Use_Case = 'SaaS_Application_Classification' THEN :SaaS_Application_Classification
      WHEN Base_Use_Case = 'SaaS_Risk_Assessment_Reporting_Compliance' THEN :SaaS_Risk_Assessment_Reporting_Compliance
      WHEN Base_Use_Case = 'SaaS_Application_Discovery' THEN :SaaS_Application_Discovery
      ELSE Use_Case_Importance
    END
  WHERE Base_Use_Case IN (
    'SaaS_Security_Risk_Mitigation',
    'Data_Loss_Prevention_over_SaaS',
    'SaaS_Application_Classification',
    'SaaS_Risk_Assessment_Reporting_Compliance',
    'SaaS_Application_Discovery'
  )`;

sequelize.query(query, {
  replacements: {
    SaaS_Security_Risk_Mitigation,
    Data_Loss_Prevention_over_SaaS,
    SaaS_Application_Classification,
    SaaS_Risk_Assessment_Reporting_Compliance,
    SaaS_Application_Discovery
  },
  type: Sequelize.QueryTypes.UPDATE
})
.then(result => {
   return res.status(200).json({msg:"Update successful",updateResult:result});
  
})
.catch(error => {
  console.error('Error executing update query:', error);
});

};
