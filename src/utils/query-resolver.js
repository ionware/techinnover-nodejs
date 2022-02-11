module.exports = function queryResolver(query) {
  return new Promise((resolve, reject) => {
    global.db.query(query, (error, rows) => {
      if (error) {
        return reject(error);
      }

      return resolve(rows);
    });
  });
};
