fountain-app-gen-local
======================

Introduction:
-----------
Temporary Gulp Angular 1 project generated from npm installed generator available at http://fountainjs.io/

Clone to local and run npm install

Standard gulp tasks
-------------------
  gulp serve
  gulp test
  etc...

Install sub generators for angular 1
-----------
npm install -g generator-fountain-angular1

List available sub generators
-----------
yo --generators  

Example of generating a component
-----------
From root of project  
yo fountain-angular1:component --name myComponent --dir myComponent  

Update proj-root/src/index.js with your new component plus any new scss file you added to your component directory  
