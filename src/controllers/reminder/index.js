const getReminders = require('./get-reminders');
const createReminder = require('./create-reminders');
const getReminderById = require('./getById');

async function rootReminderController(req, res) {
  const actionsMap = {
    GET: getReminders,
    POST: createReminder,
    GETBYID: getReminderById,
  };

  if (!req.params.id) {
    return actionsMap[req.method]
      ? actionsMap[req.method](req, res)
      : res.status(403).json({ message: 'Action not supported.' });
  }

  // handle GET reminder by id.
  if (req.method == 'GET' && req.params.id) {
    const { id } = req.params;
    return getReminderById(req, res);
  }

  return res.status(405).json({ message: 'Action not supported.' });
}

module.exports = rootReminderController;
