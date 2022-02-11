async function getReminderById(req, res) {
  const { id } = req.params;

  const reminder = await Reminder.getById(id);

  return res.status(200).json(reminder[0]);
}

module.exports = getReminderById;
