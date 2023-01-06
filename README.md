# npm-publish-package

https://www.youtube.com/watch?v=WRjJW8tseQg

## npm whoami

```
➜  npm-publish-package git:(main) ✗ npm whoami
npm ERR! code ENEEDAUTH
npm ERR! need auth This command requires you to be logged in.
npm ERR! need auth You need to authorize this machine using `npm adduser`

npm ERR! A complete log of this run can be found in:
```

### add npm registry user

https://www.npmjs.com/

```
npm adduser
```
### after adding user

```
➜  npm-publish-package git:(main) ✗ npm whoami           
bhaskarmantralahub
```

```npm 

//Will open up a browser for npm login
npm login

```

### other npm commands

```npm
npm --help
```

### npm publish as public

```npm
npm publish --access public
```

**--access public** => When publishing for the first time

**--access restricted** => When publishing as a private package


### Scoped packages

https://docs.npmjs.com/cli/v9/using-npm/scope

```text
@somescope/somepackagename
```
**@somescope** => npm username or organization name
**somepackagename** => actual package name

Example: `@bhaskarmantralahub/test-package`


#### Dependency on package.json as:

```json
    "dependencies": {
    "@bhaskarmantralahub/test-package": "^1.0.0"
    }
```

### List down all dependencies

```npm
npm ls 

//with dependencies
npm ls --depth
```



