async function createReminder(req, res) {
  const { user, description, date } = req.body;
  // little validation, tho it is said to assume valid data always.
  if (!user || !description || !date) {
    return res
      .status(400)
      .json({ message: 'missing required fields', status: false });
  }

  // TODO: also time is clearly in UTC format. Use moment Lib.
  const reminder = await global.Reminder.create({
    user,
    description,
    created_at: date,
  });

  // TODO: pull response that matches assessment.
  return res.status(201).json({ id: reminder.id, status: true });
}

module.exports = createReminder;
