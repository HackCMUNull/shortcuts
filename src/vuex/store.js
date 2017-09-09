import modules from './modules'

const plugins = Object.keys(modules).map((key) => modules[key]).reduce((acc, val) => {
  if (val.plugins) {
    val.plugins.forEach(p => acc.push(p))
  }
  delete val.plugins
  return acc
}, [])

export default {
  modules,
  plugins,
  strict: process.env.NODE_ENV !== 'production'
}
