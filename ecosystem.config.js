module.exports = {
  apps : [{
    name: 'cloudhieule.api',
    script: './dist/main.js',
    watch: '.',
    autorestart: true,
    cwd: __dirname, // path-to-project
  },],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'git@github.com:hieu9420/cloudhieule.online.git',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm i && npm run build && pm2 start ecosystem.config.js --env production',
      'pre-setup': '',
      env: {
        NODE_ENV: 'production',
    },
    }
  }
};
