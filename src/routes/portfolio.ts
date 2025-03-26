
//@ts-nocheck

import { Router, Request, Response } from 'express'
import portfolio from '../data/portfolio'

const router = Router()

router.get('/', (_: Request, res: Response) => {
  res.json(portfolio)
})
router.get('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const item = portfolio.find((item) => item.id === id)

  if (!item) {
    return res.status(404).json({ error: 'Item not found' })
  }

  res.json(item)
})

export default router
