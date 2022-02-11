const resolver = require('../utils/query-resolver');

/**
 * Get all reminders.
 * @returns Promise<object>
 */
const getReminders = async (filters) => {
  return resolver(
    `SELECT id, user, description, created_at as date FROM reminders ORDER BY id ASC`
  );
};

/**
 * Create a new reminder.
 * @param {Object} data { user, description, date }
 * @returns Promise<object>
 */
const createReminder = async (data = {}) => {
  return resolver(
    `INSERT INTO reminders (user, description, created_at) VALUES ('${data.user}', '${data.description}', '${data.date}')`
  );
};

/**
 * Get a reminder by id.
 * @param {string} id reminder ID
 * @returns Promise<object>
 */
const getReminderById = async (id) => {
  return resolver(
    `SELECT id, user, description, created_at as date FROM reminders WHERE id = ${id}`
  );
};

module.exports = {
  getAll: getReminders,
  create: createReminder,
  getById: getReminderById,
};
