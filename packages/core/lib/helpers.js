const isProd = () => {
  let env = process.env.NODE_ENV || 'development';
  return env === 'production';
};

module.exports = {
  isProd,
};
