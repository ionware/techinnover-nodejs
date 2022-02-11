const reminderController = require('./controllers/reminder/index');

async function app(req, res) {
  const { path } = req;
  let segments = path.split('/').filter((val) => !!val);
  // break ID param from path.
  if (segments.length) req.params = { id: segments[0] };

  try {
    return await reminderController(req, res);
  } catch (error) {
    return res.status(500).json({ message: `Something isn't right.`, error });
  }
}

module.exports = { reminder: app };
