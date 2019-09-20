# Desarrollar un API REST

## 1. Introducción

Los desarrolladores acceden a la mayoría de los recursos a través de interfaces HTTP. Para proporcionar la experiencia más fluida posible a los desarrolladores, es importante que estas API's sigan pautas de diseño consistentes, lo que hace que su uso sea fácil e intuitivo. Este documento establece las pautas que deben seguir los desarrolladores de un API REST para desarrollar dichas API de manera consistente.

Los beneficios de la consistencia también se acumulan en el agregado; La coherencia permite a los equipos aprovechar el código común, los patrones, la documentación y las decisiones de diseño.

Estas pautas apuntan a lograr lo siguiente:

- Defina prácticas y patrones consistentes para todos los puntos finales API en Microsoft.
- Adherirse lo más cerca posible a las mejores prácticas REST / HTTP aceptadas en la industria en general.
- Facilite el acceso a los Servicios de Microsoft a través de las interfaces REST para todos los desarrolladores de aplicaciones.
- Permita que los desarrolladores de servicios aprovechen el trabajo previo de otros servicios para implementar, probar y documentar los puntos finales REST definidos de manera consistente.
- Permita que los socios (por ejemplo, entidades que no sean de Microsoft) usen estas pautas para su propio diseño de punto final REST

**Lectura Recomendada**

Se recomienda comprender la filosofía detrás del estilo arquitectónico REST para desarrollar buenos servicios basados ​​en HTTP. Si eres nuevo en el diseño RESTful, aquí hay algunos buenos recursos:

[REST en Wikipedia](https://en.wikipedia.org/wiki/Representational_state_transfer) : descripción general de definiciones comunes e ideas centrales detrás de REST.

[Disertación REST](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm) - El capítulo sobre REST en la disertación de Roy Fielding sobre Arquitectura de red, "Estilos arquitectónicos y el diseño de arquitecturas de software basadas en red"

[RFC 7231](https://tools.ietf.org/html/rfc7231) : define la especificación para la semántica HTTP / 1.1 y se considera el recurso autorizado.

[REST en la práctica](http://www.amazon.com/REST-Practice-Hypermedia-Systems-Architecture/dp/0596805829/) - Libro sobre los fundamentos de REST.

## 2. Taxonomía

Como parte de la incorporación a las Directrices API de REST, los servicios DEBEN cumplir con la taxonomía definida a continuación.

### 2.1. Errores

Los errores, o más específicamente los Errores de servicio, se definen como un cliente que pasa datos no válidos al servicio y el servicio rechaza correctamente esos datos. Los ejemplos incluyen credenciales no válidas, parámetros incorrectos, ID de versiones desconocidas o similares. Estos son generalmente códigos de error HTTP "4xx" y son el resultado de un cliente que pasa datos incorrectos o inválidos.

Los errores no contribuyen a la disponibilidad general de la API.

### 2.2.Fallas

Las fallas, o más específicamente las fallas de servicio, se definen como el servicio que no se devuelve correctamente en respuesta a una solicitud válida del cliente. Estos son generalmente códigos de error HTTP "5xx".

Fallos _no_ contribuyen a la disponibilidad general de la API.

### 2.3. Latencia

La latencia se define como el tiempo que tarda una llamada API particular en completarse, medida lo más cerca posible del cliente. Esta métrica se aplica a las API síncronas y asíncronas de la misma manera. Para llamadas de larga duración, la latencia se mide en la solicitud inicial y mide cuánto tiempo tarda esa llamada (no la operación general) en completarse.

### 2.4. Hora de completar

Los servicios que exponen operaciones largas DEBEN rastrear las métricas de "Tiempo para completar" en torno a esas operaciones.

### 2.5. Errores de API de larga ejecución

Para una API de ejecución larga, es posible que tanto la solicitud inicial que comienza la operación como la solicitud que recupera los resultados funcionen técnicamente (cada una de las cuales devuelve un 200), pero que la operación subyacente haya fallado. Las fallas de ejecución prolongada DEBEN acumularse como fallas en las métricas de disponibilidad general.

## 3. Orientación al cliente

Para garantizar la mejor experiencia posible para los clientes que hablan con un servicio REST, los clientes DEBEN adherirse a las siguientes buenas prácticas:

### 3.1. Regla de ignorar

Para clientes poco acoplados donde la forma exacta de los datos no se conoce antes de la llamada, si el servidor devuelve algo que el cliente no esperaba, el cliente DEBE ignorarlo de manera segura.

Algunos servicios PUEDEN agregar campos a las respuestas sin cambiar los números de versión. Los servicios que lo hacen DEBEN dejar esto claro en su documentación y los clientes DEBEN ignorar los campos desconocidos.

### 3.2. Regla del orden variable

Los clientes NO DEBEN confiar en el orden en que aparecen los datos en las respuestas del servicio JSON. Por ejemplo, los clientes DEBEN ser resistentes a la reordenación de campos dentro de un objeto JSON. Cuando el servicio los admite, los clientes PUEDEN solicitar que los datos se devuelvan en un orden específico. Por ejemplo, los servicios PUEDEN soportar el uso del parámetro `$orderBy querystring` para especificar el orden de los elementos dentro de una matriz JSON. Los servicios PUEDEN también especificar explícitamente el orden de algunos elementos como parte del contrato de servicio. Por ejemplo, un servicio PUEDE siempre devolver la información de "tipo" de un objeto JSON como el primer campo en un objeto para simplificar el análisis de respuestas en el cliente. Los clientes PUEDEN confiar en el comportamiento pedido identificado explícitamente por el servicio.

## 4. Fundamentos de consistencia

### 4.1. Estructura de URL

Los humanos DEBEN poder leer y construir URLs fácilmente.

Esto facilita el descubrimiento y facilita la adopción en plataformas sin una biblioteca de cliente bien soportada.

Un ejemplo de una URL bien estructurada es:

```
https://api.com/v1.0/people/jdoe@contoso.com/inbox
```

Un ejemplo de URL que no es amigable es:

```
https://api.com/EWS/OData/Users('jdoe@mail.com')/Folders('AAMkADdiYzI1MjUzLTk4MjQtNDQ1Yy05YjJkLWNlMzMzYmIzNTY0MwAuAAAAAACzMsPHYH6HQoSwfdpDx-2bAQCXhUk6PC1dS7AERFluCgBfAAABo58UAAA=')
```

Un patrón frecuente que surge es el uso de URL como valores. Los servicios PUEDEN usar URL como valores. Por ejemplo, lo siguiente es aceptable:

```
https://api.com/v1.0/items?url=https://resources.com/shoes/fancy
```

### 4.2. Longitud de la URL

El formato de mensaje HTTP 1.1, definido en RFC 7230, en la sección [3.1.1](https://tools.ietf.org/html/rfc7230#section-3.1.1) , no define un límite de longitud en la línea de solicitud, que incluye la URL de destino. Desde el RFC:

> HTTP no establece un límite predefinido en la longitud de una línea de solicitud. [...] Un servidor que recibe un objetivo de solicitud más largo que cualquier URI que desea analizar DEBE responder con un código de estado 414 (URI demasiado largo).

Los servicios que pueden generar URL de más de 2,083 caracteres DEBEN acomodarse a los clientes que desean admitir. Aquí hay algunas fuentes para determinar qué soporte de clientes objetivo:

- http://stackoverflow.com/a/417184
- https://blogs.msdn.microsoft.com/ieinternals/2014/08/13/url-length-limits

También tenga en cuenta que algunas pilas de tecnología tienen límites de URL ajustables y rígidos, así que tenga esto en cuenta al diseñar sus servicios.

### 4.3. Identificador canónico

Además de las URL amigables, los recursos que se pueden mover o renombrar DEBERÍAN exponer una URL que contenga un identificador estable único. PUEDE ser necesario interactuar con el servicio para obtener una URL estable del nombre descriptivo del recurso, como en el caso del acceso directo "/ my" utilizado por algunos servicios.

No se requiere que el identificador estable sea un GUID.

Un ejemplo de una URL que contiene un identificador canónico es:

```
https://api.com/v1.0/people/7011042402/inbox
```

### 4.4. Métodos admitidos

Las operaciones DEBEN usar los métodos HTTP adecuados siempre que sea posible, y la idempotencia de la operación DEBE respetarse. Los métodos HTTP con frecuencia se denominan verbos HTTP. Los términos son sinónimos en este contexto, sin embargo, la especificación HTTP utiliza el término método.

A continuación se muestra una lista de métodos que los servicios REST de Microsoft DEBEN admitir. No todos los recursos admitirán todos los métodos, pero todos los recursos que utilizan los métodos a continuación DEBEN ajustarse a su uso.

| Método  | Descripción                                                                                                                         | Es idempotente |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| GET     | Devuelve el valor actual de un objeto                                                                                               | Cierto         |
| PUT     | Reemplazar un objeto, o crear un objeto con nombre, cuando corresponda                                                              | Cierto         |
| DELETE  | Eliminar un objeto                                                                                                                  | Cierto         |
| POST    | Cree un nuevo objeto basado en los datos proporcionados, o envíe un comando                                                         | Falso          |
| HEAD    | Devuelve metadata de un objeto para una respuesta GET. Los recursos que admiten el método GET PUEDEN también admitir el método HEAD | Cierto         |
| PATCH   | Aplicar una actualización parcial a un objeto                                                                                       | Falso          |
| OPTIONS | Obtener información sobre una solicitud; ver abajo para más detalles.                                                               | Cierto         |

<small>Tabla 1</small>

#### 4.4.1 POST

Las operaciones POST DEBERÍAN admitir el encabezado de respuesta de Ubicación para especificar la ubicación de cualquier recurso creado que no haya sido nombrado explícitamente, a través del encabezado de Ubicación.

Como ejemplo, imagine un servicio que permita la creación de servidores alojados, que serán nombrados por el servicio:

```http
POST http://api.contoso.com/account1/servers
```

La respuesta sería algo como:

```http
201 Created
Location: http://api.contoso.com/account1/servers/server321
```

Donde "server321" es el nombre del servidor asignado al servicio.

Los servicios PUEDEN también devolver los metadatos completos para el elemento creado en la respuesta.

#### 4.4.2 PATCH

PATCH ha sido estandarizado por IETF como el método que se utilizará para actualizar un objeto existente de forma incremental (consulte RFC 5789 ). Las API compatibles con las pautas de la API REST de Microsoft DEBEN admitir PATCH.

#### 4.4.3. Opciones y encabezados de enlace

OPTIONS permite a un cliente recuperar información sobre un recurso, como mínimo, devolviendo el encabezado Permitir que indica los métodos válidos para este recurso.

Además, los servicios DEBEN incluir un encabezado de enlace (consulte RFC 5988 ) para señalar la documentación del recurso en cuestión:

```http
Link: <{help}>; rel = "help"
```

Donde {help} es la URL de un recurso de documentación.

Para ver ejemplos sobre el uso de OPTIONS, consulte verificación previa de llamadas entre dominios CORS .

### 4.5. Encabezados de solicitud estándar

La tabla de encabezados de solicitud a continuación DEBE ser utilizada por los servicios de Directrices de API REST de Microsoft. El uso de estos encabezados no es obligatorio, pero si se usan, DEBEN usarse de manera consistente.

Todos los valores de encabezado DEBEN seguir las reglas de sintaxis establecidas en la especificación donde se define el campo de encabezado. Muchos encabezados HTTP se definen en RFC7231 , sin embargo, se puede encontrar una lista completa de encabezados aprobados en el Registro de encabezados de IANA ".

### 4.6. Parámetros PII

De acuerdo con la política de privacidad de su organización, los clientes NO DEBEN transmitir parámetros de información de identificación personal (PII) en la URL (como parte de la ruta o cadena de consulta) porque esta información puede exponerse inadvertidamente a través de registros de clientes, redes y servidores y otros mecanismos.

En consecuencia, un servicio DEBE aceptar los parámetros PII transmitidos como encabezados.

Sin embargo, hay muchos escenarios en los que no se pueden seguir las recomendaciones anteriores debido a limitaciones del cliente o del software. Para abordar estas limitaciones, los servicios también DEBEN aceptar estos parámetros de PII como parte de la URL consistente con el resto de estas pautas.

Los servicios que aceptan parámetros de PII, ya sea en la URL o como encabezados, DEBEN cumplir con la política de privacidad especificada por el liderazgo de ingeniería de su organización. Esto generalmente incluirá recomendar que los clientes prefieran los encabezados para la transmisión y las implementaciones se adhieran a precauciones especiales para garantizar que los registros y la recopilación de datos de otros servicios se manejen adecuadamente.

### 4.7. Formatos de respuesta

Para que las organizaciones tengan una plataforma exitosa, deben servir los datos en formatos que los desarrolladores están acostumbrados a usar, y de manera consistente que les permita a los desarrolladores manejar las respuestas con un código común.

La comunicación basada en la web, especialmente cuando se trata de un cliente móvil u otro de bajo ancho de banda, se ha movido rápidamente en la dirección de JSON por una variedad de razones, incluida su tendencia a ser más liviano y su facilidad de consumo con clientes basados ​​en JavaScript.

Los nombres de propiedad JSON DEBEN ser camelCased.

Los servicios DEBERÍAN proporcionar JSON como la codificación predeterminada.

#### 4.7.1. Respuestas de condición de error

Para condiciones que no son exitosas, los desarrolladores DEBEN poder escribir una pieza de código que maneje los errores consistentemente en los diferentes servicios de las Directrices API de REST de Microsoft. Esto permite construir una infraestructura simple y confiable para manejar excepciones como un flujo separado de respuestas exitosas. Lo siguiente se basa en la especificación OData v4 JSON. Sin embargo, es muy genérico y no requiere construcciones OData específicas. Las API DEBEN usar este formato incluso si no están usando otras construcciones OData.

La respuesta de error DEBE ser un único objeto JSON. Este objeto DEBE tener un par de nombre / valor llamado "error". El valor DEBE ser un objeto JSON.

Este objeto DEBE contener pares de nombre / valor con los nombres "código" y "mensaje", y PUEDE contener pares de nombre / valor con los nombres "objetivo", "detalles" y "innererror".

El valor para el par nombre / valor "código" es una cadena independiente del idioma. Su valor es un código de error definido por el servicio que DEBE ser legible por humanos. Este código sirve como un indicador más específico del error que el código de error HTTP especificado en la respuesta. Los servicios DEBEN tener un número relativamente pequeño (aproximadamente 20) de valores posibles para el "código", y todos los clientes DEBEN ser capaces de manejarlos todos. La mayoría de los servicios requerirán una cantidad mucho mayor de códigos de error más específicos, que no son interesantes para todos los clientes. Estos códigos de error DEBEN estar expuestos en el par nombre / valor "innererror" como se describe a continuación. La introducción de un nuevo valor para el "código" que es visible para los clientes existentes es un cambio radical y requiere un aumento de la versión. Los servicios pueden evitar cambios importantes agregando nuevos códigos de error a "

El valor para el par de nombre / valor de "mensaje" DEBE ser una representación legible por humanos del error. Está destinado a ayudar a los desarrolladores y no es adecuado para la exposición a los usuarios finales. Los servicios que desean exponer un mensaje adecuado para los usuarios finales DEBEN hacerlo a través de una anotación o propiedad personalizada. Los servicios NO DEBEN localizar el "mensaje" para el usuario final, ya que hacerlo podría hacer que el valor sea ilegible para el desarrollador de la aplicación que puede estar registrando el valor, así como hacer que el valor sea menos buscable en Internet.

El valor para el par nombre / valor "objetivo" es el objetivo del error particular (por ejemplo, el nombre de la propiedad en error).

El valor para el par nombre / valor "detalles" DEBE ser una matriz de objetos JSON que DEBE contener pares nombre / valor para "código" y "mensaje", y PUEDE contener un par nombre / valor para "destino", como se describió anteriormente . Los objetos en la matriz "detalles" generalmente representan errores distintos y relacionados que ocurrieron durante la solicitud. Ver ejemplo a continuación.

El valor para el par nombre / valor "innererror" DEBE ser un objeto. El contenido de este objeto está definido por el servicio. Los servicios que desean devolver errores más específicos que el código de nivel raíz DEBEN hacerlo incluyendo un par de nombre / valor para "código" y un "error interno" anidado. Cada objeto "innererror" anidado representa un mayor nivel de detalle que su padre. Al evaluar los errores, los clientes DEBEN atravesar todos los "innererrors" anidados y elegir el más profundo que entiendan. Este esquema permite a los servicios introducir nuevos códigos de error en cualquier lugar de la jerarquía sin romper la compatibilidad con versiones anteriores, siempre y cuando sigan apareciendo códigos de error antiguos. El servicio PUEDE devolver diferentes niveles de profundidad y detalle a diferentes personas que llaman. Por ejemplo, en entornos de desarrollo, lo más profundo " Los tipos de error con propiedades personalizadas definidas por el servidor DEBEN declararse en el documento de metadatos del servicio. Ver ejemplo a continuación. Los tipos de error con propiedades personalizadas definidas por el servidor DEBEN declararse en el documento de metadatos del servicio. Ver ejemplo a continuación.

Las respuestas de error PUEDEN contener anotaciones en cualquiera de sus objetos JSON.

Recomendamos que para cualquier error transitorio que se pueda volver a intentar, los servicios DEBEN incluir un encabezado HTTP Retry-After que indique el número mínimo de segundos que los clientes DEBEN esperar antes de intentar la operación nuevamente.

##### Respuesta de error: objeto

| Propiedad | Tipo  | Necesario | Descripción         |
| --------- | ----- | :-------: | ------------------- |
| `error`   | Error |     ✔     | El objeto de error. |

##### Error: objeto

| Propiedad    | Tipo               | Necesario | Descripción                                                                            |
| ------------ | ------------------ | :-------: | -------------------------------------------------------------------------------------- |
| `code`       | string (enumerada) |     ✔     | Uno de un conjunto de códigos de error definidos por el servidor.                      |
| `message`    | string             |     ✔     | Una representación legible por humanos del error.                                      |
| `target`     | string             |           | El objetivo del error.                                                                 |
| `details`    | Error[]            |           | Una serie de detalles sobre errores específicos que condujeron a este error informado. |
| `innererror` | InnerError         |           | Un objeto que contiene información más específica que el objeto actual sobre el error. |

##### InnerError: Object

| Propiedad    | Tipo       | Necesario | Descripción                                                                            |
| ------------ | ---------- | :-------: | -------------------------------------------------------------------------------------- |
| `code`       | string     |           | Un código de error más específico que el proporcionado por el error que contiene.      |
| `innererror` | InnerError |           | Un objeto que contiene información más específica que el objeto actual sobre el error. |

##### Ejemplos

Ejemplo de "innererror":

```json
{
  "error": {
    "code": "BadArgument",
    "message": "Las contraseñas anteriores no pueden reutilizarse",
    "target": "contraseña",
    "innererror": {
      "code": "PasswordError",
      "innererror": {
        "código": "PasswordDoesNotMeetPolicy",
        "minLength": "6",
        "maxLength": "64",
        "characterTypes": ["lowerCase", "upperCase", "number", "symbol"],
        "minDistinctCharacterTypes": "2",
        "innererror": {
          "code": "PasswordReuseNotAllowed"
        }
      }
    }
  }
}
```

#### 4.8. Códigos de estado HTTP

DEBERÍAN utilizarse códigos de estado HTTP estándar; Consulte las definiciones del Código de estado HTTP para obtener más información.

#### 4.9. Biblioteca cliente opcional

Los desarrolladores DEBEN poder desarrollar en una amplia variedad de plataformas e idiomas, como Windows, macOS, Linux, C #, Python, Node.js y Ruby.

Se DEBE poder acceder a los servicios desde herramientas HTTP simples como curl sin un esfuerzo significativo.

Los portales de desarrolladores de servicios DEBERÍAN proporcionar el equivalente de "Obtener token de desarrollador" para facilitar la experimentación y la compatibilidad con rizos.

#### 5. CORS
