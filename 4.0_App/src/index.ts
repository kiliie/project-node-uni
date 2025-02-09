import app from "./app";
import { ServerBooststrap } from "./boostrap/server.boostrap";

const serverBooststrap = new ServerBooststrap(app);
serverBooststrap.initialize();

