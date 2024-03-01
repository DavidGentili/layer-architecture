require('dotenv').config();
import { connect } from "./src/database";
require('./src/server');

connect()
    .then(() => {

    })
    .catch(() => {

    })