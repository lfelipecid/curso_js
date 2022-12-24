/*
npm init -y | Cria package.json para gerenciamento de modulos
npm install --save-dev @babel/cli @babel/preset-env @babel/core | Instala dependencias
npm install --save-dev @babel/cli@7.6.4 @babel/preset-env@7.6.3 @babel/core@7.6.4 | Instala dependencias na versão desejada

npx babel 2_usando_babel.js -o bundle.js --presets=@babel/env | Convert arquivo JS usando BABEL.

Dentro do arquivo package.json, na parte de scritps:
"babel": "babel ./2_usando_babel.js -o ./bundle.js --preset=@babel/env"
Para realizar alterações automaticas sem precisar, executar função do BABEL no terminal.


*/