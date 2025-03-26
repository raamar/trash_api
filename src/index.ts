import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerDoc from './swagger.json'
import siteInfoRouter from './routes/siteInfo'
import servicesRouter from './routes/services'
import portfolioRouter from './routes/portfolio'
const app = express()
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))
app.use('/site-info', siteInfoRouter)
app.use('/services', servicesRouter)
app.use('/portfolio', portfolioRouter)
app.listen(3000, () => {
  console.log('🚀 Server running on http://localhost:3000')
})
