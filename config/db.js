const { Sequelize } = require('sequelize');

// Utiliser la variable d'environnement pour la connexion
const databaseUrl = process.env.DATABASE_URL;

// Création d'une nouvelle instance Sequelize en utilisant l'URL de connexion
const sequelize = new Sequelize(databaseUrl);

module.exports = sequelize;
