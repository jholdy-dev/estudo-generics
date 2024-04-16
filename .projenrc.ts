import { JsonFile, typescript } from 'projen'
const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: 'main',
  name: 'estudo-generics',
  projenrcTs: true,
  prettier: true,
  eslint: true,
})

project.tryRemoveFile('.prettierrc.json')

new JsonFile(project, '.prettierrc.json', {
  obj: {
    semi: false,
    singleQuote: true,
    trailingComma: 'all',
    endOfLine: 'auto',
  },
})

project.synth()
