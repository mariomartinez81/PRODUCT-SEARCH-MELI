import { app } from './app';
import { config } from './utils/constants';

const { PORT } = config;

app.listen(PORT, () => console.log('Server is running on port', PORT));
