import { Router, Request, Response } from 'express'
import portfolio from '../data/portfolio'

const router = Router()

router.get('/', (_: Request, res: Response) => {
  res.json(portfolio)
})

export default router
