# COMMON MONGOOSE METHODS

### methods that are commonly used in all of my projects. 

## how to

### create a single instance and export to needed files.

### inside index.ts

`import UserSchema from './user.schema.ts;`

`const env = process.env.NODE_ENV || 'DEV';`
`const uri = process.env['MONGODB_URI' + '_' + env];`
`const cmm = new CommonMongooseMethods({ user: UserSchema }, uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });`

### you can also pass in an empty object as the first param if you wish to add to the schema list later

### inside user.controller.ts

`import { find, findeOneById } from 'CommonMongooseMethods';`

`await find('user'); // will return all users`

`await findOneById('user', '23SFOWP'); // will return single user`

### inside message.controller.ts

`import { addToSchemaList } from 'CommonMongooseMethods';`
`import MessageSchema from './message.schema.ts;`

`addToSchemaList({ message: Message });`

### methods
`find`

`findOneById`

`findAll`

`update`

`create`

`findByEmail`

`findByName`

`remove`