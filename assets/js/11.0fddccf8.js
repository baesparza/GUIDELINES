(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{211:function(e,a,s){"use strict";s.r(a);var r=s(0),o=Object(r.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"desarrollar-un-api-rest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#desarrollar-un-api-rest"}},[e._v("#")]),e._v(" Desarrollar un API REST")]),e._v(" "),s("h2",{attrs:{id:"_1-introduccion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-introduccion"}},[e._v("#")]),e._v(" 1. Introducción")]),e._v(" "),s("p",[e._v("Los desarrolladores acceden a la mayoría de los recursos a través de interfaces HTTP. Para proporcionar la experiencia más fluida posible a los desarrolladores, es importante que estas API's sigan pautas de diseño consistentes, lo que hace que su uso sea fácil e intuitivo. Este documento establece las pautas que deben seguir los desarrolladores de un API REST para desarrollar dichas API de manera consistente.")]),e._v(" "),s("p",[e._v("Los beneficios de la consistencia también se acumulan en el agregado; La coherencia permite a los equipos aprovechar el código común, los patrones, la documentación y las decisiones de diseño.")]),e._v(" "),s("p",[e._v("Estas pautas apuntan a lograr lo siguiente:")]),e._v(" "),s("ul",[s("li",[e._v("Defina prácticas y patrones consistentes para todos los puntos finales API en Microsoft.")]),e._v(" "),s("li",[e._v("Adherirse lo más cerca posible a las mejores prácticas REST / HTTP aceptadas en la industria en general.")]),e._v(" "),s("li",[e._v("Facilite el acceso a los Servicios de Microsoft a través de las interfaces REST para todos los desarrolladores de aplicaciones.")]),e._v(" "),s("li",[e._v("Permita que los desarrolladores de servicios aprovechen el trabajo previo de otros servicios para implementar, probar y documentar los puntos finales REST definidos de manera consistente.")]),e._v(" "),s("li",[e._v("Permita que los socios (por ejemplo, entidades que no sean de Microsoft) usen estas pautas para su propio diseño de punto final REST")])]),e._v(" "),s("p",[s("strong",[e._v("Lectura Recomendada")])]),e._v(" "),s("p",[e._v("Se recomienda comprender la filosofía detrás del estilo arquitectónico REST para desarrollar buenos servicios basados ​​en HTTP. Si eres nuevo en el diseño RESTful, aquí hay algunos buenos recursos:")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Representational_state_transfer",target:"_blank",rel:"noopener noreferrer"}},[e._v("REST en Wikipedia"),s("OutboundLink")],1),e._v(" : descripción general de definiciones comunes e ideas centrales detrás de REST.")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("Disertación REST"),s("OutboundLink")],1),e._v(' - El capítulo sobre REST en la disertación de Roy Fielding sobre Arquitectura de red, "Estilos arquitectónicos y el diseño de arquitecturas de software basadas en red"')]),e._v(" "),s("p",[s("a",{attrs:{href:"https://tools.ietf.org/html/rfc7231",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC 7231"),s("OutboundLink")],1),e._v(" : define la especificación para la semántica HTTP / 1.1 y se considera el recurso autorizado.")]),e._v(" "),s("p",[s("a",{attrs:{href:"http://www.amazon.com/REST-Practice-Hypermedia-Systems-Architecture/dp/0596805829/",target:"_blank",rel:"noopener noreferrer"}},[e._v("REST en la práctica"),s("OutboundLink")],1),e._v(" - Libro sobre los fundamentos de REST.")]),e._v(" "),s("h2",{attrs:{id:"_2-taxonomia"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-taxonomia"}},[e._v("#")]),e._v(" 2. Taxonomía")]),e._v(" "),s("p",[e._v("Como parte de la incorporación a las Directrices API de REST, los servicios DEBEN cumplir con la taxonomía definida a continuación.")]),e._v(" "),s("h3",{attrs:{id:"_2-1-errores"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-errores"}},[e._v("#")]),e._v(" 2.1. Errores")]),e._v(" "),s("p",[e._v('Los errores, o más específicamente los Errores de servicio, se definen como un cliente que pasa datos no válidos al servicio y el servicio rechaza correctamente esos datos. Los ejemplos incluyen credenciales no válidas, parámetros incorrectos, ID de versiones desconocidas o similares. Estos son generalmente códigos de error HTTP "4xx" y son el resultado de un cliente que pasa datos incorrectos o inválidos.')]),e._v(" "),s("p",[e._v("Los errores no contribuyen a la disponibilidad general de la API.")]),e._v(" "),s("h3",{attrs:{id:"_2-2-fallas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-fallas"}},[e._v("#")]),e._v(" 2.2.Fallas")]),e._v(" "),s("p",[e._v('Las fallas, o más específicamente las fallas de servicio, se definen como el servicio que no se devuelve correctamente en respuesta a una solicitud válida del cliente. Estos son generalmente códigos de error HTTP "5xx".')]),e._v(" "),s("p",[e._v("Fallos "),s("em",[e._v("no")]),e._v(" contribuyen a la disponibilidad general de la API.")]),e._v(" "),s("h3",{attrs:{id:"_2-3-latencia"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-latencia"}},[e._v("#")]),e._v(" 2.3. Latencia")]),e._v(" "),s("p",[e._v("La latencia se define como el tiempo que tarda una llamada API particular en completarse, medida lo más cerca posible del cliente. Esta métrica se aplica a las API síncronas y asíncronas de la misma manera. Para llamadas de larga duración, la latencia se mide en la solicitud inicial y mide cuánto tiempo tarda esa llamada (no la operación general) en completarse.")]),e._v(" "),s("h3",{attrs:{id:"_2-4-hora-de-completar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-hora-de-completar"}},[e._v("#")]),e._v(" 2.4. Hora de completar")]),e._v(" "),s("p",[e._v('Los servicios que exponen operaciones largas DEBEN rastrear las métricas de "Tiempo para completar" en torno a esas operaciones.')]),e._v(" "),s("h3",{attrs:{id:"_2-5-errores-de-api-de-larga-ejecucion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-errores-de-api-de-larga-ejecucion"}},[e._v("#")]),e._v(" 2.5. Errores de API de larga ejecución")]),e._v(" "),s("p",[e._v("Para una API de ejecución larga, es posible que tanto la solicitud inicial que comienza la operación como la solicitud que recupera los resultados funcionen técnicamente (cada una de las cuales devuelve un 200), pero que la operación subyacente haya fallado. Las fallas de ejecución prolongada DEBEN acumularse como fallas en las métricas de disponibilidad general.")]),e._v(" "),s("h2",{attrs:{id:"_3-orientacion-al-cliente"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-orientacion-al-cliente"}},[e._v("#")]),e._v(" 3. Orientación al cliente")]),e._v(" "),s("p",[e._v("Para garantizar la mejor experiencia posible para los clientes que hablan con un servicio REST, los clientes DEBEN adherirse a las siguientes buenas prácticas:")]),e._v(" "),s("h3",{attrs:{id:"_3-1-regla-de-ignorar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-regla-de-ignorar"}},[e._v("#")]),e._v(" 3.1. Regla de ignorar")]),e._v(" "),s("p",[e._v("Para clientes poco acoplados donde la forma exacta de los datos no se conoce antes de la llamada, si el servidor devuelve algo que el cliente no esperaba, el cliente DEBE ignorarlo de manera segura.")]),e._v(" "),s("p",[e._v("Algunos servicios PUEDEN agregar campos a las respuestas sin cambiar los números de versión. Los servicios que lo hacen DEBEN dejar esto claro en su documentación y los clientes DEBEN ignorar los campos desconocidos.")]),e._v(" "),s("h3",{attrs:{id:"_3-2-regla-del-orden-variable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-regla-del-orden-variable"}},[e._v("#")]),e._v(" 3.2. Regla del orden variable")]),e._v(" "),s("p",[e._v("Los clientes NO DEBEN confiar en el orden en que aparecen los datos en las respuestas del servicio JSON. Por ejemplo, los clientes DEBEN ser resistentes a la reordenación de campos dentro de un objeto JSON. Cuando el servicio los admite, los clientes PUEDEN solicitar que los datos se devuelvan en un orden específico. Por ejemplo, los servicios PUEDEN soportar el uso del parámetro "),s("code",[e._v("$orderBy querystring")]),e._v(' para especificar el orden de los elementos dentro de una matriz JSON. Los servicios PUEDEN también especificar explícitamente el orden de algunos elementos como parte del contrato de servicio. Por ejemplo, un servicio PUEDE siempre devolver la información de "tipo" de un objeto JSON como el primer campo en un objeto para simplificar el análisis de respuestas en el cliente. Los clientes PUEDEN confiar en el comportamiento pedido identificado explícitamente por el servicio.')]),e._v(" "),s("h2",{attrs:{id:"_4-fundamentos-de-consistencia"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-fundamentos-de-consistencia"}},[e._v("#")]),e._v(" 4. Fundamentos de consistencia")]),e._v(" "),s("h3",{attrs:{id:"_4-1-estructura-de-url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-estructura-de-url"}},[e._v("#")]),e._v(" 4.1. Estructura de URL")]),e._v(" "),s("p",[e._v("Los humanos DEBEN poder leer y construir URLs fácilmente.")]),e._v(" "),s("p",[e._v("Esto facilita el descubrimiento y facilita la adopción en plataformas sin una biblioteca de cliente bien soportada.")]),e._v(" "),s("p",[e._v("Un ejemplo de una URL bien estructurada es:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("https://api.com/v1.0/people/jdoe@contoso.com/inbox\n")])])]),s("p",[e._v("Un ejemplo de URL que no es amigable es:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("https://api.com/EWS/OData/Users('jdoe@mail.com')/Folders('AAMkADdiYzI1MjUzLTk4MjQtNDQ1Yy05YjJkLWNlMzMzYmIzNTY0MwAuAAAAAACzMsPHYH6HQoSwfdpDx-2bAQCXhUk6PC1dS7AERFluCgBfAAABo58UAAA=')\n")])])]),s("p",[e._v("Un patrón frecuente que surge es el uso de URL como valores. Los servicios PUEDEN usar URL como valores. Por ejemplo, lo siguiente es aceptable:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("https://api.com/v1.0/items?url=https://resources.com/shoes/fancy\n")])])]),s("h3",{attrs:{id:"_4-2-longitud-de-la-url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-longitud-de-la-url"}},[e._v("#")]),e._v(" 4.2. Longitud de la URL")]),e._v(" "),s("p",[e._v("El formato de mensaje HTTP 1.1, definido en RFC 7230, en la sección "),s("a",{attrs:{href:"https://tools.ietf.org/html/rfc7230#section-3.1.1",target:"_blank",rel:"noopener noreferrer"}},[e._v("3.1.1"),s("OutboundLink")],1),e._v(" , no define un límite de longitud en la línea de solicitud, que incluye la URL de destino. Desde el RFC:")]),e._v(" "),s("blockquote",[s("p",[e._v("HTTP no establece un límite predefinido en la longitud de una línea de solicitud. [...] Un servidor que recibe un objetivo de solicitud más largo que cualquier URI que desea analizar DEBE responder con un código de estado 414 (URI demasiado largo).")])]),e._v(" "),s("p",[e._v("Los servicios que pueden generar URL de más de 2,083 caracteres DEBEN acomodarse a los clientes que desean admitir. Aquí hay algunas fuentes para determinar qué soporte de clientes objetivo:")]),e._v(" "),s("ul",[s("li",[e._v("http://stackoverflow.com/a/417184")]),e._v(" "),s("li",[e._v("https://blogs.msdn.microsoft.com/ieinternals/2014/08/13/url-length-limits")])]),e._v(" "),s("p",[e._v("También tenga en cuenta que algunas pilas de tecnología tienen límites de URL ajustables y rígidos, así que tenga esto en cuenta al diseñar sus servicios.")]),e._v(" "),s("h3",{attrs:{id:"_4-3-identificador-canonico"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-identificador-canonico"}},[e._v("#")]),e._v(" 4.3. Identificador canónico")]),e._v(" "),s("p",[e._v('Además de las URL amigables, los recursos que se pueden mover o renombrar DEBERÍAN exponer una URL que contenga un identificador estable único. PUEDE ser necesario interactuar con el servicio para obtener una URL estable del nombre descriptivo del recurso, como en el caso del acceso directo "/ my" utilizado por algunos servicios.')]),e._v(" "),s("p",[e._v("No se requiere que el identificador estable sea un GUID.")]),e._v(" "),s("p",[e._v("Un ejemplo de una URL que contiene un identificador canónico es:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("https://api.com/v1.0/people/7011042402/inbox\n")])])]),s("h3",{attrs:{id:"_4-4-metodos-admitidos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-metodos-admitidos"}},[e._v("#")]),e._v(" 4.4. Métodos admitidos")]),e._v(" "),s("p",[e._v("Las operaciones DEBEN usar los métodos HTTP adecuados siempre que sea posible, y la idempotencia de la operación DEBE respetarse. Los métodos HTTP con frecuencia se denominan verbos HTTP. Los términos son sinónimos en este contexto, sin embargo, la especificación HTTP utiliza el término método.")]),e._v(" "),s("p",[e._v("A continuación se muestra una lista de métodos que los servicios REST de Microsoft DEBEN admitir. No todos los recursos admitirán todos los métodos, pero todos los recursos que utilizan los métodos a continuación DEBEN ajustarse a su uso.")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Método")]),e._v(" "),s("th",[e._v("Descripción")]),e._v(" "),s("th",[e._v("Es idempotente")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("GET")]),e._v(" "),s("td",[e._v("Devuelve el valor actual de un objeto")]),e._v(" "),s("td",[e._v("Cierto")])]),e._v(" "),s("tr",[s("td",[e._v("PUT")]),e._v(" "),s("td",[e._v("Reemplazar un objeto, o crear un objeto con nombre, cuando corresponda")]),e._v(" "),s("td",[e._v("Cierto")])]),e._v(" "),s("tr",[s("td",[e._v("DELETE")]),e._v(" "),s("td",[e._v("Eliminar un objeto")]),e._v(" "),s("td",[e._v("Cierto")])]),e._v(" "),s("tr",[s("td",[e._v("POST")]),e._v(" "),s("td",[e._v("Cree un nuevo objeto basado en los datos proporcionados, o envíe un comando")]),e._v(" "),s("td",[e._v("Falso")])]),e._v(" "),s("tr",[s("td",[e._v("HEAD")]),e._v(" "),s("td",[e._v("Devuelve metadata de un objeto para una respuesta GET. Los recursos que admiten el método GET PUEDEN también admitir el método HEAD")]),e._v(" "),s("td",[e._v("Cierto")])]),e._v(" "),s("tr",[s("td",[e._v("PATCH")]),e._v(" "),s("td",[e._v("Aplicar una actualización parcial a un objeto")]),e._v(" "),s("td",[e._v("Falso")])]),e._v(" "),s("tr",[s("td",[e._v("OPTIONS")]),e._v(" "),s("td",[e._v("Obtener información sobre una solicitud; ver abajo para más detalles.")]),e._v(" "),s("td",[e._v("Cierto")])])])]),e._v(" "),s("p",[s("small",[e._v("Tabla 1")])]),e._v(" "),s("h4",{attrs:{id:"_4-4-1-post"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-1-post"}},[e._v("#")]),e._v(" 4.4.1 POST")]),e._v(" "),s("p",[e._v("Las operaciones POST DEBERÍAN admitir el encabezado de respuesta de Ubicación para especificar la ubicación de cualquier recurso creado que no haya sido nombrado explícitamente, a través del encabezado de Ubicación.")]),e._v(" "),s("p",[e._v("Como ejemplo, imagine un servicio que permita la creación de servidores alojados, que serán nombrados por el servicio:")]),e._v(" "),s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[e._v("POST http://api.contoso.com/account1/servers\n")])])]),s("p",[e._v("La respuesta sería algo como:")]),e._v(" "),s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[e._v("201 Created\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Location:")]),e._v(" http://api.contoso.com/account1/servers/server321\n")])])]),s("p",[e._v('Donde "server321" es el nombre del servidor asignado al servicio.')]),e._v(" "),s("p",[e._v("Los servicios PUEDEN también devolver los metadatos completos para el elemento creado en la respuesta.")]),e._v(" "),s("h4",{attrs:{id:"_4-4-2-patch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-2-patch"}},[e._v("#")]),e._v(" 4.4.2 PATCH")]),e._v(" "),s("p",[e._v("PATCH ha sido estandarizado por IETF como el método que se utilizará para actualizar un objeto existente de forma incremental (consulte RFC 5789 ). Las API compatibles con las pautas de la API REST de Microsoft DEBEN admitir PATCH.")]),e._v(" "),s("h4",{attrs:{id:"_4-4-3-opciones-y-encabezados-de-enlace"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-3-opciones-y-encabezados-de-enlace"}},[e._v("#")]),e._v(" 4.4.3. Opciones y encabezados de enlace")]),e._v(" "),s("p",[e._v("OPTIONS permite a un cliente recuperar información sobre un recurso, como mínimo, devolviendo el encabezado Permitir que indica los métodos válidos para este recurso.")]),e._v(" "),s("p",[e._v("Además, los servicios DEBEN incluir un encabezado de enlace (consulte RFC 5988 ) para señalar la documentación del recurso en cuestión:")]),e._v(" "),s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Link:")]),e._v(' <{help}>; rel = "help"\n')])])]),s("p",[e._v("Donde {help} es la URL de un recurso de documentación.")]),e._v(" "),s("p",[e._v("Para ver ejemplos sobre el uso de OPTIONS, consulte verificación previa de llamadas entre dominios CORS .")]),e._v(" "),s("h3",{attrs:{id:"_4-5-encabezados-de-solicitud-estandar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-encabezados-de-solicitud-estandar"}},[e._v("#")]),e._v(" 4.5. Encabezados de solicitud estándar")]),e._v(" "),s("p",[e._v("La tabla de encabezados de solicitud a continuación DEBE ser utilizada por los servicios de Directrices de API REST de Microsoft. El uso de estos encabezados no es obligatorio, pero si se usan, DEBEN usarse de manera consistente.")]),e._v(" "),s("p",[e._v('Todos los valores de encabezado DEBEN seguir las reglas de sintaxis establecidas en la especificación donde se define el campo de encabezado. Muchos encabezados HTTP se definen en RFC7231 , sin embargo, se puede encontrar una lista completa de encabezados aprobados en el Registro de encabezados de IANA ".')]),e._v(" "),s("h3",{attrs:{id:"_4-6-parametros-pii"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-parametros-pii"}},[e._v("#")]),e._v(" 4.6. Parámetros PII")]),e._v(" "),s("p",[e._v("De acuerdo con la política de privacidad de su organización, los clientes NO DEBEN transmitir parámetros de información de identificación personal (PII) en la URL (como parte de la ruta o cadena de consulta) porque esta información puede exponerse inadvertidamente a través de registros de clientes, redes y servidores y otros mecanismos.")]),e._v(" "),s("p",[e._v("En consecuencia, un servicio DEBE aceptar los parámetros PII transmitidos como encabezados.")]),e._v(" "),s("p",[e._v("Sin embargo, hay muchos escenarios en los que no se pueden seguir las recomendaciones anteriores debido a limitaciones del cliente o del software. Para abordar estas limitaciones, los servicios también DEBEN aceptar estos parámetros de PII como parte de la URL consistente con el resto de estas pautas.")]),e._v(" "),s("p",[e._v("Los servicios que aceptan parámetros de PII, ya sea en la URL o como encabezados, DEBEN cumplir con la política de privacidad especificada por el liderazgo de ingeniería de su organización. Esto generalmente incluirá recomendar que los clientes prefieran los encabezados para la transmisión y las implementaciones se adhieran a precauciones especiales para garantizar que los registros y la recopilación de datos de otros servicios se manejen adecuadamente.")]),e._v(" "),s("h3",{attrs:{id:"_4-7-formatos-de-respuesta"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-formatos-de-respuesta"}},[e._v("#")]),e._v(" 4.7. Formatos de respuesta")]),e._v(" "),s("p",[e._v("Para que las organizaciones tengan una plataforma exitosa, deben servir los datos en formatos que los desarrolladores están acostumbrados a usar, y de manera consistente que les permita a los desarrolladores manejar las respuestas con un código común.")]),e._v(" "),s("p",[e._v("La comunicación basada en la web, especialmente cuando se trata de un cliente móvil u otro de bajo ancho de banda, se ha movido rápidamente en la dirección de JSON por una variedad de razones, incluida su tendencia a ser más liviano y su facilidad de consumo con clientes basados ​​en JavaScript.")]),e._v(" "),s("p",[e._v("Los nombres de propiedad JSON DEBEN ser camelCased.")]),e._v(" "),s("p",[e._v("Los servicios DEBERÍAN proporcionar JSON como la codificación predeterminada.")]),e._v(" "),s("h4",{attrs:{id:"_4-7-1-respuestas-de-condicion-de-error"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-1-respuestas-de-condicion-de-error"}},[e._v("#")]),e._v(" 4.7.1. Respuestas de condición de error")]),e._v(" "),s("p",[e._v("Para condiciones que no son exitosas, los desarrolladores DEBEN poder escribir una pieza de código que maneje los errores consistentemente en los diferentes servicios de las Directrices API de REST de Microsoft. Esto permite construir una infraestructura simple y confiable para manejar excepciones como un flujo separado de respuestas exitosas. Lo siguiente se basa en la especificación OData v4 JSON. Sin embargo, es muy genérico y no requiere construcciones OData específicas. Las API DEBEN usar este formato incluso si no están usando otras construcciones OData.")]),e._v(" "),s("p",[e._v('La respuesta de error DEBE ser un único objeto JSON. Este objeto DEBE tener un par de nombre / valor llamado "error". El valor DEBE ser un objeto JSON.')]),e._v(" "),s("p",[e._v('Este objeto DEBE contener pares de nombre / valor con los nombres "código" y "mensaje", y PUEDE contener pares de nombre / valor con los nombres "objetivo", "detalles" y "innererror".')]),e._v(" "),s("p",[e._v('El valor para el par nombre / valor "código" es una cadena independiente del idioma. Su valor es un código de error definido por el servicio que DEBE ser legible por humanos. Este código sirve como un indicador más específico del error que el código de error HTTP especificado en la respuesta. Los servicios DEBEN tener un número relativamente pequeño (aproximadamente 20) de valores posibles para el "código", y todos los clientes DEBEN ser capaces de manejarlos todos. La mayoría de los servicios requerirán una cantidad mucho mayor de códigos de error más específicos, que no son interesantes para todos los clientes. Estos códigos de error DEBEN estar expuestos en el par nombre / valor "innererror" como se describe a continuación. La introducción de un nuevo valor para el "código" que es visible para los clientes existentes es un cambio radical y requiere un aumento de la versión. Los servicios pueden evitar cambios importantes agregando nuevos códigos de error a "')]),e._v(" "),s("p",[e._v('El valor para el par de nombre / valor de "mensaje" DEBE ser una representación legible por humanos del error. Está destinado a ayudar a los desarrolladores y no es adecuado para la exposición a los usuarios finales. Los servicios que desean exponer un mensaje adecuado para los usuarios finales DEBEN hacerlo a través de una anotación o propiedad personalizada. Los servicios NO DEBEN localizar el "mensaje" para el usuario final, ya que hacerlo podría hacer que el valor sea ilegible para el desarrollador de la aplicación que puede estar registrando el valor, así como hacer que el valor sea menos buscable en Internet.')]),e._v(" "),s("p",[e._v('El valor para el par nombre / valor "objetivo" es el objetivo del error particular (por ejemplo, el nombre de la propiedad en error).')]),e._v(" "),s("p",[e._v('El valor para el par nombre / valor "detalles" DEBE ser una matriz de objetos JSON que DEBE contener pares nombre / valor para "código" y "mensaje", y PUEDE contener un par nombre / valor para "destino", como se describió anteriormente . Los objetos en la matriz "detalles" generalmente representan errores distintos y relacionados que ocurrieron durante la solicitud. Ver ejemplo a continuación.')]),e._v(" "),s("p",[e._v('El valor para el par nombre / valor "innererror" DEBE ser un objeto. El contenido de este objeto está definido por el servicio. Los servicios que desean devolver errores más específicos que el código de nivel raíz DEBEN hacerlo incluyendo un par de nombre / valor para "código" y un "error interno" anidado. Cada objeto "innererror" anidado representa un mayor nivel de detalle que su padre. Al evaluar los errores, los clientes DEBEN atravesar todos los "innererrors" anidados y elegir el más profundo que entiendan. Este esquema permite a los servicios introducir nuevos códigos de error en cualquier lugar de la jerarquía sin romper la compatibilidad con versiones anteriores, siempre y cuando sigan apareciendo códigos de error antiguos. El servicio PUEDE devolver diferentes niveles de profundidad y detalle a diferentes personas que llaman. Por ejemplo, en entornos de desarrollo, lo más profundo " Los tipos de error con propiedades personalizadas definidas por el servidor DEBEN declararse en el documento de metadatos del servicio. Ver ejemplo a continuación. Los tipos de error con propiedades personalizadas definidas por el servidor DEBEN declararse en el documento de metadatos del servicio. Ver ejemplo a continuación.')]),e._v(" "),s("p",[e._v("Las respuestas de error PUEDEN contener anotaciones en cualquiera de sus objetos JSON.")]),e._v(" "),s("p",[e._v("Recomendamos que para cualquier error transitorio que se pueda volver a intentar, los servicios DEBEN incluir un encabezado HTTP Retry-After que indique el número mínimo de segundos que los clientes DEBEN esperar antes de intentar la operación nuevamente.")]),e._v(" "),s("h5",{attrs:{id:"respuesta-de-error-objeto"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#respuesta-de-error-objeto"}},[e._v("#")]),e._v(" Respuesta de error: objeto")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Propiedad")]),e._v(" "),s("th",[e._v("Tipo")]),e._v(" "),s("th",{staticStyle:{"text-align":"center"}},[e._v("Necesario")]),e._v(" "),s("th",[e._v("Descripción")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("code",[e._v("error")])]),e._v(" "),s("td",[e._v("Error")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("✔")]),e._v(" "),s("td",[e._v("El objeto de error.")])])])]),e._v(" "),s("h5",{attrs:{id:"error-objeto"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#error-objeto"}},[e._v("#")]),e._v(" Error: objeto")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Propiedad")]),e._v(" "),s("th",[e._v("Tipo")]),e._v(" "),s("th",{staticStyle:{"text-align":"center"}},[e._v("Necesario")]),e._v(" "),s("th",[e._v("Descripción")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("code",[e._v("code")])]),e._v(" "),s("td",[e._v("string (enumerada)")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("✔")]),e._v(" "),s("td",[e._v("Uno de un conjunto de códigos de error definidos por el servidor.")])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("message")])]),e._v(" "),s("td",[e._v("string")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("✔")]),e._v(" "),s("td",[e._v("Una representación legible por humanos del error.")])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("target")])]),e._v(" "),s("td",[e._v("string")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}}),e._v(" "),s("td",[e._v("El objetivo del error.")])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("details")])]),e._v(" "),s("td",[e._v("Error[]")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}}),e._v(" "),s("td",[e._v("Una serie de detalles sobre errores específicos que condujeron a este error informado.")])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("innererror")])]),e._v(" "),s("td",[e._v("InnerError")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}}),e._v(" "),s("td",[e._v("Un objeto que contiene información más específica que el objeto actual sobre el error.")])])])]),e._v(" "),s("h5",{attrs:{id:"innererror-object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#innererror-object"}},[e._v("#")]),e._v(" InnerError: Object")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Propiedad")]),e._v(" "),s("th",[e._v("Tipo")]),e._v(" "),s("th",{staticStyle:{"text-align":"center"}},[e._v("Necesario")]),e._v(" "),s("th",[e._v("Descripción")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("code",[e._v("code")])]),e._v(" "),s("td",[e._v("string")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}}),e._v(" "),s("td",[e._v("Un código de error más específico que el proporcionado por el error que contiene.")])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("innererror")])]),e._v(" "),s("td",[e._v("InnerError")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}}),e._v(" "),s("td",[e._v("Un objeto que contiene información más específica que el objeto actual sobre el error.")])])])]),e._v(" "),s("h5",{attrs:{id:"ejemplos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ejemplos"}},[e._v("#")]),e._v(" Ejemplos")]),e._v(" "),s("p",[e._v('Ejemplo de "innererror":')]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"error"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"BadArgument"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Las contraseñas anteriores no pueden reutilizarse"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"target"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"contraseña"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"innererror"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"PasswordError"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"innererror"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"código"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"PasswordDoesNotMeetPolicy"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"minLength"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"6"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"maxLength"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"64"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"characterTypes"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"lowerCase"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"upperCase"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"number"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"symbol"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"minDistinctCharacterTypes"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"innererror"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"PasswordReuseNotAllowed"')]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("h4",{attrs:{id:"_4-8-codigos-de-estado-http"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-8-codigos-de-estado-http"}},[e._v("#")]),e._v(" 4.8. Códigos de estado HTTP")]),e._v(" "),s("p",[e._v("DEBERÍAN utilizarse códigos de estado HTTP estándar; Consulte las definiciones del Código de estado HTTP para obtener más información.")]),e._v(" "),s("h4",{attrs:{id:"_4-9-biblioteca-cliente-opcional"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-9-biblioteca-cliente-opcional"}},[e._v("#")]),e._v(" 4.9. Biblioteca cliente opcional")]),e._v(" "),s("p",[e._v("Los desarrolladores DEBEN poder desarrollar en una amplia variedad de plataformas e idiomas, como Windows, macOS, Linux, C #, Python, Node.js y Ruby.")]),e._v(" "),s("p",[e._v("Se DEBE poder acceder a los servicios desde herramientas HTTP simples como curl sin un esfuerzo significativo.")]),e._v(" "),s("p",[e._v('Los portales de desarrolladores de servicios DEBERÍAN proporcionar el equivalente de "Obtener token de desarrollador" para facilitar la experimentación y la compatibilidad con rizos.')]),e._v(" "),s("h4",{attrs:{id:"_5-cors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-cors"}},[e._v("#")]),e._v(" 5. CORS")])])}),[],!1,null,null,null);a.default=o.exports}}]);