# Trabajar con Git

<p align="center">
<img src="https://johngodlee.github.io/geotaster_git_workshop/img/geotaster_git_banner.png" />
</p>

Git es un sistema de control de versiones flexible y potente. Si bien Git ofrece una funcionalidad significativa sobre herramientas centralizadas heredadas como CVS y Subversion, también presenta tantas opciones para el flujo de trabajo que puede ser difícil determinar cuál es el mejor método para confirmar el código de un proyecto. Las siguientes son las pautas que me gusta usar para la mayoría de los proyectos de software contenidos en un repositorio Git. No son aplicables a todos los proyectos de Git (especialmente los alojados en drupal.org o GitHub), pero descubrí que ayudan a garantizar que nuestros propios proyectos terminen con un historial de repositorio razonable.

## 1. Branch/Ramas

El uso de ramas o `branches` es recomendado ya que de esta manera todo el trabajo se realiza de forma aislada en una rama dedicada en lugar de la rama principal. Lo permite trabajar en diferentes funcionalidades sin contaminar la rama maestra con código potencialmente inestable e inacabado.

### 1.1. Rama Develop

Tener una rama dedicada para implementar nuevas funcionalidades nos asegura de que el código en el master casi siempre se compilará sin problemas (esto puede ser excesivo para algunos proyectos).

### 1.2. Push al master

Nunca se debe empujar código directamente al master, ya que puedes insertar código erróneo en la rama principal o rama de producción, mejor crea una rama y trabaja esa funcionalidad en una rama de desarrollo o `{feature}`. Esto también permite a los miembros del equipo que han completado una función. Una vez acabado has un request para integrar tu trabajo a la rama principal. Notifica a los miembros del equipo que has completado una función para que inicie el periodo de revisión del código y dedica un foro para discutir la característica propuesta.

### 1.3. Actualiza tus ramas

Siempre mantén tus ramas actualizadas incluso actualizabas antes de hacer un request, para que la cantidad de conflictos entre tu trabajo y el de otra persona disminuya. Recuerda que es un trabajo en equipo y puede ocurrir cambios o errores al momento de integrar versiones de código diferente.

### 1.4. Limpieza

Asegurate de eliminar ramas de features locales ya completadas, eso si, asegurate de que estas hayan sido integradas en el master.

### 1.5. Test

Antes de hacer un request asegurate de que tu rama es estable, y pasa todas las pruebas de código y estilo. Si falla para este punto probablemente falle en la rama de producción.

### 1.6. Protección

Protege a tus ramas listas para producción de recibir cambios inesperados e irreversibles. Incluye a los administradores.

## 2. Commits de git

El mensaje de un commit consiste en 3 diferentes partes separadas por una linea en blanco: el titulo, un cuerpo opcional y un pie opcional. Algo como lo siguiente:

```
type: subject

body

footer
```

El titulo consiste en el tipo y asunto del mensaje.

### 2.1. Type/Tipo <small>Requerido</small>

Este es el formato para escribir "tipo" en los commits de git:

**feat**: Una nueva caracteristica.

**fix**: Se soluciono un bug.

**docs**: Se realizaron cambios en la documentacion.

**style**: Se aplico formato, comas y puntos faltantes, etc; Sin cambios en el codigo.

**refactor**: Refactorizacion del codigo en produccion.

**test**: Se añadieron pruebas, refactorizacion de pruebas; Sin cambios en el codigo.

**chore**: Actualizacion de tareas de build, configuracion del admin. de paquetes; Sin cambios en el codigo.

##### Nota: 

Puedes escribir entre paréntesis si quieres hacer  referencia a una funcionalidad especifica ejemplo: **fix(user service)** o **feat(*)**

### 2.2. Subject/Asunto <small>Requerido</small>

El asunto no debe contener mas de 50 caracteres, debe iniciar con una letra mayuscula y no terminar con un punto. Debemos ser imperativos al momento de redactar nuestro commit, es decir hay que ser objetivos y muy importante tenemos que acostumbrarnos a escribirlos en Ingles esto es una de las mejores practicas que podemos tener en nuestros commits.

Cuando hablo de ser imperativos hago referencia a este sencillo ejemplo: usar change en lugar de "changed" o "changes".

### 2.3. Body/Cuerpo <small>Opcional</small>

No todos los commits son lo suficientemente complejos como para necesitar de un cuerpo, sin embargo es opcional y se usan en caso de que el commit requiera una explicacion y contexto. Utilizamos el cuerpo para explicar el ¿Que y Porque? de un commit y no el ¿Como? Al escribir el cuerpo, requerimos de una linea en blanco entre el titulo y el cuerpo, ademas debemos limitar la longitud de cada linea a no mas de 72 caracteres.

### 2.4. Footer/Pie <small>Opcional</small>

El pie es opcional al igual que el cuerpo, pero este es usado para el seguimiento de los IDs con incidencias.

**Ejemplo:**

```
feat: Summarize changes in around 50 characters or less

More detailed explanatory text, if necessary. Wrap it to about 72
characters or so. In some contexts, the first line is treated as the
subject of the commit and the rest of the text as the body. The
blank line separating the summary from the body is critical (unless
you omit the body entirely); various tools like `log`, `shortlog`
and `rebase` can get confused if you run the two together.

Explain the problem that this commit is solving. Focus on why you
are making this change as opposed to how (the code explains that).
Are there side effects or other unintuitive consequenses of this
change? Here's the place to explain them.

Further paragraphs come after blank lines.

 - Bullet points are okay, too

 - Typically a hyphen or asterisk is used for the bullet, preceded
   by a single space, with blank lines in between, but conventions
   vary here

If you use an issue tracker, put references to them at the bottom,
like this:

Resolves: #123
See also: #456, #789
```
