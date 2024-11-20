# 📇 Agenda Contact
Agenda Contact es una aplicación interactiva desarrollada con React que permite a los usuarios gestionar una agenda de contactos. La aplicación utiliza variables globales manejadas con Context para almacenar y gestionar los datos, y permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre los contactos.

Este proyecto utiliza React Router para manejar las rutas y se conecta a una API para mantener la persistencia de los datos. Es una solución ideal para aprender y practicar la gestión de estado global y las operaciones con APIs en aplicaciones React.

---

## 🌟 Características

1. Gestión de Contactos:
	- Añadir nuevos contactos con nombre, dirección, correo electrónico y teléfono.
	- Editar los datos de contactos existentes.
	- Eliminar contactos de la lista.
2. Estado Global: Uso del patrón Context API para gestionar los datos de los contactos de manera eficiente.
3. Persistencia de Datos: Los contactos se almacenan en una API para mantener los datos entre sesiones.
4. Rutas Dinámicas: Uso de React Router para una navegación fluida entre las diferentes secciones de la aplicación.
5. Diseño Responsivo: Interfaz diseñada para adaptarse a diferentes dispositivos.

---

## 🛠️ Tecnologías Utilizadas

- **React**: Biblioteca principal para construir la interfaz de usuario.
- **React Router**: Manejo de rutas dentro de la aplicación.
- **Context API**: Gestión de estado global para los datos de los contactos.
- **Bootstrap**: Diseño estilizado y responsivo.
- **Fetch API**: Conexión con una API externa para persistencia de datos.
- **JSON Placeholder API**: API simulada utilizada para almacenar contactos.

---

## 🚀 Instalación

1. Clona este repositorio en tu máquina local:
	```
	git clone https://github.com/4GeeksAcademy/Agenda-Contact-Alejandro.git
	```
2. Accede al directorio del proyecto:
	```
	cd Agenda-Contact-Alejandro
	```
3. Instala las dependencias:
	```
	npm install
	```
4. Inicia la aplicación:
	```
	npm start
	```

---

## 📚 Uso

1. Al iniciar la aplicación, verás la lista de contactos existentes (si ya hay datos en la API).
2. Usa el botón "Add Contact" para añadir un nuevo contacto.
3. Haz clic en el botón de edición en cualquier contacto para actualizar su información.
4. Elimina contactos con un solo clic en el botón de borrar.
5. Los cambios se reflejan de manera inmediata gracias a la conexión con la API.

---

## 📁 Estructura del Proyecto

- /src:
	- components/: Componentes reutilizables como el formulario y la lista de contactos.
	- views/: Páginas principales como la lista de contactos y el formulario de edición.
	- store/: Implementación del Context API para manejar el estado global.
	- App.js: Componente principal que organiza las rutas y vistas de la aplicación.
	- index.js: Punto de entrada para React.

---

## 🔮 Funcionalidades Futuras

- 🌐 Integración con una base de datos real para mayor persistencia.
- 📞 Función de búsqueda para localizar contactos rápidamente.
- 💾 Exportación e importación de contactos en formatos como CSV o JSON.
- 🔒 Autenticación para gestionar contactos privados.

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar este proyecto:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tus cambios:
	```
	git checkout -b feature/nueva-funcionalidad
	```
3. Realiza tus cambios y haz commit:
	```
	git commit -m "Descripción de tus cambios"
	```
4. Sube tus cambios a tu repositorio:
	```
	git push origin feature/nueva-funcionalidad
	```
5. Abre un Pull Request en el repositorio original.

---

## 👤 Autor

Este proyecto fue desarrollado por @alejandrette y forma parte de los ejercicios de aprendizaje en 4Geeks Academy. Si tienes preguntas o sugerencias, no dudes en contactarme.

---

## 📜 Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo, modificarlo y distribuirlo libremente.
