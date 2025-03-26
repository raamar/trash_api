import { Router, Request, Response } from 'express'
import services from '../data/services'

const router = Router()

router.get('/', (_: Request, res: Response) => {
  res.json(services)
})

//@ts-expect-error
router.get('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const item = services.find((item) => item.id === id)

  if (!item) {
    return res.status(404).json({ error: 'Item not found' })
  }

  res.json(item)
})

router.post('/', (_: Request, res: Response) => {
  res.status(201).json({ id: Date.now(), response: 200 })
})

router.delete('/:id', (req: Request, res: Response) => {
  const id = req.params.id
  res.status(204).json({ id, response: 200 })
})

export default router
