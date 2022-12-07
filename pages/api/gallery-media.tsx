import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    let body: any;

    if (req.method === "POST") {
        body = JSON.parse(req.body);

        body.files.forEach((file: any, index: number) => {
            const imgType = file.type.split("/")[1] === "jpeg" ? "jpg" : file.type.split("/")[1];
            const buffer = Buffer.from(file.base64, "base64");

            fs.writeFileSync(`./public/uploads/${body.name}-${index + 1}.${imgType}`, buffer);
        });

        res.status(201).json({
            message: "Success!",
            body,
        });
    } else {
        body = fs.readdirSync("./public/gallery");

        res.status(200).json({
            message: "Success!",
            body,
        });
    }
}
