import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (_req: Request, res: Response) => {
  // connections are stored client-side in localStorage for now
  res.json({
    connections: [],
    note: "Connections storage not yet implemented",
  });
});

router.post("/", (req: Request, res: Response): void => {
  const { sourceId, targetId } = req.body;
  if (!sourceId || !targetId || sourceId === targetId) {
    res.status(400).json({ error: "Invalid connection" });
    return;
  }
  const conn = {
    id: crypto.randomUUID(),
    sourceId,
    targetId,
    createdAt: new Date().toISOString(),
  };
  res.status(201).json(conn);
});

router.delete("/:id", (_req: Request, res: Response) => {
  res.json({ deleted: true });
});

export default router;
