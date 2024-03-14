import { successHandler } from "@/config/response";
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  successHandler(res, {
    msg: "success12",
  });
});

export default router;
