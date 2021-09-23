# Remato ESLint config

## Use

```
$ yarn add --dev eslint @remato/eslint-config
```

## Edit and publish

1. Edit appropriate rule file
2. Commit
3. Run `$ yarn publish`
5. Enter your npm credentials
6. Push to master
7. Create [Github release](https://github.com/rematocorp/eslint-config/releases)
8. Update your repository package.json dependency version using `yarn workspace xxx add @remato/eslint-config@^<version> --dev`

## Test

Use [yarn link](https://classic.yarnpkg.com/en/docs/cli/link/).
