import app from "./src/app.js"; // ✅ uzmi app iz src/app.js

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});


