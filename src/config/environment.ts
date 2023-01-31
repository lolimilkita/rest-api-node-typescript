import 'dotenv/config'

const CONFIG = {
  db: process.env.DB,
  jwt_public: '`your jwt public RSA`',
  jwt_private: '`your jwt private RSA`'
}

export default CONFIG
