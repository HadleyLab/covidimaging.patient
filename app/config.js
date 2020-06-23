const env = process.env.NODE_ENV || 'dev'

const globalConfig = {
  development: {
    api: 'http://localhost:8091',
    dcmPath: 'http://localhost:8091/public/dcm',
  },
  stage: {
    api: 'http://covidimaging.nordwhale.com',
    dcmPath: 'http://covidimaging.nordwhale.com/public/dcm',
  },
  production: {
    api: 'http://covidimaging.nordwhale.com',
    dcmPath: 'http://covidimaging.nordwhale.com/public/dcm',
  },
}
export default globalConfig[env]