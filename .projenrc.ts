import { typescript } from 'projen';
const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: 'main',
  name: 'estudo-generics',
  projenrcTs: true,
  prettier: true,
});

project.synth();

