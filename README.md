[![Build Status](https://travis-ci.org/telemark/micro-auth-ldap.svg?branch=master)](https://travis-ci.org/telemark/micro-auth-ldap)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# micro-auth-mock

Mocks the auth service

## config docker.env

```bash
JWT_SECRET=Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go
ENCRYPTOR_SECRET=Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go
SESSION_STORAGE_URL=https://tmp.storage.tjeneste.win
```

## API

### GET ```/login?origin=<url for redirect>```

- returns loginform
- successful login redirects to ```origin?jwt=<jwt>```

### POST ```/auth```

-post username, password and origin
- successful auth redirects to ```origin?jwt=<jwt>```

### GET ```/?jwt=<jwt>```

- jwt needs userName and origin
- successful lookup of user redirects to ```origin?jwt=<jwt>```

## License

[MIT](LICENSE)
