module.exports = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  // todo: Server が決まってる場合は設定できる
  // {
  //     key: 'Server',
  //     value: 'Apache', // phony server value
  // },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'sameorigin',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'Referrer-Policy',
    value: 'same-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=*',
  },
  // todo: Content Security Policy を適用する
  {
    key: 'Content-Securtity-Policy',
    value: "\
    default-src 'self';\
    script-src 'self' 'unsafe-inline';\
    child-src https://github-readme-stats.vercel.app;\
    style-src 'self';\
    font-src 'self'; \
    "
  }
];
