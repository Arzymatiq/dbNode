import * as uuid from "uuid";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class FileServis {
  async saveFile(file) {
    try {
      const fileName = uuid.v4() + ".jpg";
      const filePath = path.join(__dirname, "..", "static", fileName);
      await file.mv(filePath);
      return fileName;
    } catch (error) {
      console.error(error);
    }
  }
}

export default new FileServis();
