import {Sequelize } from 'sequelize';

const dataBase = new Sequelize ('crudfullstack', 'root','' ,{
    host:'localhost', 
    dialect: 'mysql',

});
 
export default dataBase ;