import fs from "fs";
import path from "path";
// import multer from "multer";
import { NextApiRequest, NextApiResponse } from "next";

export function buildPath() {
    return path.join(process.cwd(), "data", "gallery-data-new.json");
}

export function extractData(filePath: string) {
    const fileJSON = fs.readFileSync(filePath).toString();
    const fileData = JSON.parse(fileJSON);

    return fileData;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const filePath = buildPath();
    const fileData: any[] = extractData(filePath);
    // let multerInst;

    if (req.method === "POST") {
        const newDatum = {
            id: new Date().toISOString(),
            name: req.body.name,
            title: req.body.title,
            orientation: req.body.orientation,
        };

        // fs.writeFileSync('./public', `./uploads/`)

        // multerInst = multer({
        //     storage: multer.diskStorage({
        //         destination: "./public/uploads",
        //         filename: (req, file, cb) => cb(null, file.originalname),
        //     }),
        // });

        // fileData.push(newDatum);

        // fs.writeFileSync(filePath, JSON.stringify(fileData));

        res.status(201).json({
            message: "Success!",
            galleryItem: newDatum,
        });
    } else {
        res.status(200).json({
            gallery: fileData,
        });
    }
}
