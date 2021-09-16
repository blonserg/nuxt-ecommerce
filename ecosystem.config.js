module.exports = {
  apps : [{
      name      : 'MyAppName', // App name that shows in `pm2 ls`
      exec_mode : 'cluster', // enables clustering
      instances : 'max', // or an integer
      cwd       : './current', // only if using a subdirectory
      script    : './node_modules/nuxt/bin/nuxt-start', // The magic key
  }]
};