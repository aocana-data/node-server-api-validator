const { log } = require("console");
const express = require("express");
const app = express();
const port = process.env.PORT ?? 3000;
const host = process.env.HOST ?? "0.0.0.0";

log();

app.get("/:protocol/:url_base", async (req, res) => {
    const { protocol, url_base } = req.params;

    log(protocol, url_base);

    try {
        const responseData = await fetch(
            `${protocol}://${url_base}/api/3/action/group_list`
        );

        const data = await responseData.json();
        res.json(data);
    } catch (error) {
        res.end({ error });
    }
});

app.listen(port, host, () => {
    console.log(`Listening: http://${host}:${port}`);
});
