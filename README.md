# COMMON MONGOOSE METHODS

### methods that are commonly used in all of my projects. 

## how to

### create a single instance and export to needed files.

### inside index.ts

`import UserSchema from './user.schema.ts;`

`const cmm = new CommonMongooseMethods({ user: UserSchema }, 'path/to/uri', options);`

### inside somefile.ts

`import { find, findeOneById } from 'CommonMongooseMethods';`

`await find('user'); // will return all users`

`await findOneById('user', '23SFOWP'); // will return single user`

### methods
`find`

`findOneById`

`findAll`

`update`

`create`

`findByEmail`

`findByName`

`remove`