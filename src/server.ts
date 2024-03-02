import app from "./app";
import { PORT } from "./config";

app.listen(PORT, () => {
	console.log(`Server listen on: http://localhost:${PORT}`);
});

export default app;
