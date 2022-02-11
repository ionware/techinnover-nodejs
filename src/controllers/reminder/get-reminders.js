async function getReminders(req, res) {
  const filters = req.query;
  const reminders = await global.Reminder.getAll(filters);

  return res.status(200).json(reminders);
}

module.exports = getReminders;
