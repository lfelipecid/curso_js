# Inicializa Node
npm init -y 
# Instala Modulo
npm install MODULENAME
# Instala sem permitir update
npm install MODULENAME -E 
# Atualiza dependecias
npm update
# Existe dois tipo de ambientes de produção e desenvolvimento, você pode escolher em qual lugar irá ficar seu modulo.
# Ex. DESENVOLVIMENTO: Babel, Webpack
npm install MODULENAME --save-dev 
npm install MODULENAME --save-prod 
# Instala versão especifica do MODULO
npm install MODULENAME@2.1.0
# Desinstalar Modulo
npm uninstall MODULENAME
# Lista todas as dependencias
npm ls
# Lista dependecias em niveis
npm ls --depth=0
npm ls --depth=1
...
# Lista modulos desatualizados
npm outdated
