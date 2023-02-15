import {app} from "./src/app.js";

const PORT = process.env.PORT || 8080

const initMessage = `The server has been started at port: ${PORT}.\nLink: http://localhost:${PORT}`


app.listen(PORT, () => console.log(initMessage))
