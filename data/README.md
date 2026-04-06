Reglas sincronizadas con Firebase para este proyecto.

- data/database.rules.json: reglas de Realtime Database usadas por Firebase CLI.
- data/storage.rules: reglas de Firebase Storage usadas por Firebase CLI.
- Los otros archivos dentro de data/ son solo ejemplos locales y no se versionan.

Notas:

- Firebase Realtime Database exige reglas en formato JSON valido, por eso no lleva comentarios inline.
- Firebase Storage si admite comentarios dentro del archivo de reglas.
- Para desplegar ambas reglas desde este proyecto: `firebase deploy --only database,storage`

Detalle de data/database.rules.json:

- perfil:
	lectura publica del perfil.
	escritura solo por el usuario autenticado cuyo uid coincide con la ruta `perfil/$uid`.
	`rol` queda bloqueado desde cliente: solo se permite crear el perfil con valor inicial `user` o conservar el valor ya existente.
	`tipo` queda bloqueado desde cliente: no puede crearse ni cambiarse desde la app cliente.
	`verificado` queda bloqueado desde cliente: solo se permite crear el perfil con valor inicial `false` o conservar el valor ya existente.

- tour:
	lectura publica de los tours.
	escritura permitida solo a usuarios autenticados.
	si el tour ya existe, solo puede modificarlo quien tenga `creado_por_uid` igual al uid autenticado.

- tourAgenda:
	sin lectura publica.
	lectura y escritura solo para el creador del tour relacionado.
	la validacion se hace contra `tour/$tour_id/creado_por_uid`.

- rifa:
	lectura publica de rifas.
	escritura permitida solo a usuarios autenticados.
	si la rifa ya existe, solo puede modificarla quien tenga `creado_por_uid` igual al uid autenticado.

- rifaCompra:
	sin lectura publica.
	lectura y escritura solo para el creador de la rifa relacionada.
	esto protege datos sensibles de compra y contacto.

- agenda:
	sin lectura publica.
	lectura y escritura solo para el usuario autenticado dueño de `agenda/$uid`.

Detalle de data/storage.rules:

- Ruta protegida: `media/{userId}/{fileName}`.
- read:
	lectura publica para que las fotos del perfil puedan verse desde fuera del panel.
- write:
	solo el dueño de la carpeta puede subir archivos.
	el nombre debe seguir el patron generado por la app: `f{timestamp}.{extension}`.
	solo se aceptan extensiones `jpg`, `jpeg`, `png`, `webp` y `gif`.
	solo se aceptan MIME types `image/jpeg`, `image/png`, `image/webp` y `image/gif`.
	el tamano maximo permitido por archivo es 10 MB.
- delete:
	solo el dueño de la carpeta puede eliminar sus archivos.