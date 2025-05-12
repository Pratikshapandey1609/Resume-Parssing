const { spawn } = require("child_process");
const path = require("path");

exports.processResume = (req, res) => {
  const resumePath = path.join(__dirname, "../", req.file.path);
  const python = spawn("python3", ["ai/evaluate_resume.py", resumePath]);

  let result = "";
  python.stdout.on("data", (data) => {
    result += data.toString();
  });

  python.stderr.on("data", (err) => {
    console.error("Error:", err.toString());
  });

  python.on("close", () => {
    try {
      const output = JSON.parse(result);
      res.json(output);
    } catch (e) {
      res.status(500).json({ error: "Failed to parse AI response" });
    }
  });
};
