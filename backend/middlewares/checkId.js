import { isValidObjectId } from "mongoose";

function checkId(req, res, next) {
  if (!isValidObjectId(req.params.id)) {
    return res.status(400).send({ message: "Invalid ID" });
  }
  next();
}

export default checkId;