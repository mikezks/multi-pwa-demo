const redirectRootToSegment = (segment) => (req, res, next) => {
  if (req.url === '/') {
    res.writeHead(302, { 'Location': `/${segment}` });
    res.end();
  }
  next();
};

const bsConfig = {
  port: 3000,
  files: [ "./dist/**/*.{js, html}" ],
  server: {
    baseDir: "./dist"
  },
  middleware: [redirectRootToSegment('app-one')],
  http : true,
  browser: ['chrome']
};

module.exports = bsConfig;
