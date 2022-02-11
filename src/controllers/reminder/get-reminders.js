async function getReminders(req, res) {
  const reminders = [{ id: 1 }, { id: 2 }];

  return res.status(200).json({ reminders });
}

module.exports = getReminders;
