# Comic Rater

Esta aplicación permite al usuario calificar los comics del API: https://xkcd.com/json.html .

## Requisitos

- Node.js
- Proxy: https://github.com/NataliaBedoya/proxy_comic_rater.git

### Configuración

1. Clonar el repositorio:

git clone https://github.com/NataliaBedoya/comic_rater.git

2. Instalar dependencias:

yarn install

3. Crear un archivo .env a la altura del package.json y agregar la siguiente variable de entorno, en este puerto debe estar corriendo previamente el proxy.

REACT_APP_BASE_URL=http://localhost:8000/

4. Ejecutar el proyecto:

yarn start
