import { pool } from "../db.js";

export const getService = async (req, res) => {
 
  const [rows] = await pool.query("SELECT * FROM use_case_user_scenario_importance_master");
  return res.status(200).send({
    data: rows
  }); 
};

export const createService = async (req, res) => {
 
};

 
