const { execSync } = require("child_process");

console.log("🛠 Installing root dependencies...");
execSync("npm install", { stdio: "inherit" });

console.log("📦 Installing client dependencies...");
execSync("npm --prefix client install", { stdio: "inherit" });

console.log("📦 Installing server dependencies...");
execSync("npm --prefix server install", { stdio: "inherit" });
