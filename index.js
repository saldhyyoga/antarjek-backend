const express = require("express");
const app = express();
const PORT = 5004;
const routes = require("./routes/index");

app.use(express.json());
app.use("/", routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
