# COMMON MONGOOSE METHODS

### methods that are commonly used in all of my projects. 

## How To

### create a single instance and export to needed files.

`import UserSchema from './user.schema.ts;`

`export const cmm = new CommonMongooseMethods({ user: UserSchema }, 'path/to/uri', options);`

## methods
`find`

`findOneById`

`findAll`

`update`

`create`

`findByEmail`

`findByName`

`remove`