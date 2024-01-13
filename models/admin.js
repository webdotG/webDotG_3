const pool = require('../db');

const LoginAdmin = async (req, res) => { console.log('LOGIN ADMIN USER')}

const CurrentAdmin = async (req, res) => { console.log('CURRENT ADMIN USER')}

const AddUserAdmin = async (req, res) => { console.log('ADD ADMIN USER')}

const RemoveUserAdmin = async (req, res) => { console.log('REMOVE ADMIN USER')}

module.exports={LoginAdmin, CurrentAdmin, AddUserAdmin, RemoveUserAdmin}