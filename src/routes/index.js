import express from "express";
import studentsRoute from "./students";
import teachersRoute from "./teachers";
import secretariesRoute from "./secretaries";
import coordinatorsRoute from "./coordinators";

const router = express.Router();

router.use("/students", studentsRoute);
router.use("/teachers", teachersRoute);
router.use("/secretaries", secretariesRoute);
router.use("/coordinators", coordinatorsRoute);

export default router;