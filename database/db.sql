-- to create a new database
CREATE DATABASE azuretest;

-- to use database
use azuretest;

-- creating a new table
CREATE TABLE Use_Case_User_Scenario_Importance_Master (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  Use_Case_Importance VARCHAR(150) NOT NULL, 
  Base_Use_Case VARCHAR(150) NOT NULL, 
  status INT(11) NOT NULL, 
);

-- to show all tables
show tables;

-- to describe table
describe Use_Case_User_Scenario_Importance_Master;