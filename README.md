** fountain-app-gen-local

npm install

standard gulp tasks
  gulp serve
  gulp test

Install sub generators for angular 1
npm install -g generator-fountain-angular1

List available sub generators
yo --generators

Example of generating a component
From root of project
yo fountain-angular1:component --name myComponent --dir myComponent

Update proj-root/src/index.js with your new component plus any new scss file you added to your component directory
