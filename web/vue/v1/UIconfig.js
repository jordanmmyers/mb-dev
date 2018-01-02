const CONFIG = {
  headless: true,
  api: {
    host: '0.0.0.0',
    port: 80,
    timeout: 120000 // 2 minutes
  },
  ui: {
    ssl: false,
    host: '10.5.20.185',
    port: 80,
    path: '/'
  },
  adapter: 'mysql'
}

if(typeof window === 'undefined')
  module.exports = CONFIG;
else
  window.CONFIG = CONFIG;
