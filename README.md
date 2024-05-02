# ( React + TypeScript + Vite ) * Capacitor

Este es el repositorio de código para el desarrollo de la app móvil de Aquaplants, esto está hecho en React, Typescript, Vite, y para llevarlo a movil, capacitor

Para construir la aplicación con Capacitor se necesita hacer lo siguiente en la raíz del proyecto de React:

## Instalación de capacitor
1 para instalar capacitor en React.js:
```bash
npm install --save @capacitor/core @capacitor/cli
```
2 Inicializar capacitor:
```
npx cap init
```
3 Agregar la plataforma correspondiente, en este caso Android
```bash
npm install @capacitor/android
```
```bash
npx cap add android
```
## En segundo lugar, crear la build de React
```
npm run build
```
Con la build de React solo nos faltaría moverla a Capacitor
```
npx cap copy
```
Ahora se necesita abrir Android Studio, para compilar nuestra aplicación a apk
```
npx cap open android
```

Con todo esto, la apk quedaría en el directorio app/release lista para su instalación
