import { Router, Request, Response } from 'express'
import services from '../data/services'

const router = Router()

router.get('/', (_: Request, res: Response) => {
  res.json(services)
})

export default router
