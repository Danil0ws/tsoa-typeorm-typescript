import { ConnectionOptions} from 'typeorm'
import path from 'path'

const config: ConnectionOptions = {
  type: 'sqlite',
  database: ':memory:',
  dropSchema: true,
  entities: [path.join(__dirname, '/**/*.entity.ts')],
  synchronize: true,
  logging: false,
};

export default config