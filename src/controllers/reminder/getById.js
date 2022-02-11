async function getReminderById(req, res) {
  const { id } = req.params;

  const reminder = await Reminder.getById(id);

  if (!reminder.length) {
    return res.status(404).json({ message: 'ID not found.' });
  }

  return res.status(200).json(reminder[0]);
}

module.exports = getReminderById;
