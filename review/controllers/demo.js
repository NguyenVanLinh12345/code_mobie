
exports.hello_world = async (req, res) => {
  try {
    if (false) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.json({
      hello: "world",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
};