async function createReminder(req, res) {
  const { user, description, date } = req.body;
  // little validation, tho it is said to assume valid data always.
  if (!user || !description || !date) {
    return res
      .status(400)
      .json({ message: 'missing required fields', status: false });
  }

  // TODO: also time is clearly in UTC format. Use moment Lib.
  const ref = await global.Reminder.create({
    user,
    description,
    date,
  });

  const reminder = await global.Reminder.getById(ref.insertId);

  return res.status(201).json(reminder[0]);
}

module.exports = createReminder;
