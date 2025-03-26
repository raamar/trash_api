import { Router, Request, Response } from 'express'
import siteInfo from '../data/siteInfo'

const router = Router()

router.get('/', (_: Request, res: Response) => {
  res.json(siteInfo)
})

export default router
