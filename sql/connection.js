const mysql = require("mysql");

class Connection {
  constructor() {
    if (!this.pool) {
      console.log("creating mysql connection...");

      const config = {
        connectionLimit: 100,
        host: "34.68.38.219",
        user: "root",
        password: "Ph744103",
        database: "Admin"
      };

      if (process.env.NODE_ENV === "production" && process.env.CLOUD_INSTANCE) {
        console.log(`connect socket: ${process.env.CLOUD_INSTANCE}`);
        config.socketPath = `/cloudsql/${process.env.CLOUD_INSTANCE}`;
      }

      this.pool = mysql.createPool(config);

      return this.pool;
    }

    return this.pool;
  }
}

const instance = new Connection();

module.exports = instance;
