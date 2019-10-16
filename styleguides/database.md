# Trabajar con Bases de Datos

## 1. Recomendaciones

**Hacer**

- Usar identificadores y nombres consistentes y descriptivos.
- Haga un uso juicioso del espacio en blanco y la sangría para que el código sea más fácil de leer.
- Almacene la información de fecha y hora que cumple con ISO-8601 ( YYYY-MM-DD HH:MM:SS.SSSSS).
- Intente utilizar solo funciones SQL estándar en lugar de funciones específicas del proveedor por razones de portabilidad.
- Mantenga el código conciso y desprovisto de SQL redundante, como citas innecesarias o paréntesis o cláusulas WHERE que de otro modo pueden derivarse.
- Incluya comentarios en el código SQL cuando sea necesario.

**Evitar**

- camelCase: es difícil escanear rápidamente.
- Prefijos descriptivos o notación húngara como `sp_` o `tbl_`.
- Plurales: use el término colectivo más natural donde sea posible.
- Identificadores entre comillas: si debe usarlos, entonces adhiérase a las comillas simples.
- Los principios de diseño orientado a objetos no deben aplicarse a estructuras de bases de datos o SQL.

## 2. Convenciones de nombres

### 2.1. General

- El nombre no debe existir como palabra clave reservada.
- Mantén la longitud a un máximo de 30 bytes o 30 caracteres.
- Los nombres deben comenzar con una letra y no pueden terminar con un guión bajo.
- Solo use letras minusculas, números y guiones bajos en los nombres.
- Evite el uso de múltiples guiones bajos consecutivos.
- Use guiones bajos donde naturalmente incluiría un espacio en el nombre. Ejemplo `first_name`.
- Evite las abreviaturas y, si tiene que usarlas, asegúrese de que se entiendan comúnmente.

```sql
SELECT first_name
  FROM staff;
```

### 2.2. Tabla / Table

- Para nombrar tablas use un nombre colectivo o una forma plural. Ejemplo: `staff` o `employees`.
- No se usa prefijos de tablas como `tbl_`.
- Nunca nombre a una tabla con el mismo nombre que una de sus columnas y viceversa.
- Evita, cuando sea posible, concatenar dos nombres de tabla para crear el nombre de una tabla de relaciones. En lugar de `cars_mechanics` usa `services`.

### 2.3. Columnas / Columns

- Los nombres siempre estan escritos en singular.
- Recomendamos no usar `id` como llave primaria para la tabla. No agregue columnas con el mismo nombre que la tabla o viceversa.
- Siempre use minúsculas/lowercase.

### 2.4. Alias y Correlaciones / AS

- Debe relacionarse de alguna manera con el objeto.
- El nombre de la correlación debe ser la primera letra de cada palabra en el nombre del objeto. En el caso de que ya exista una correlación con el mismo nombre, entonces agregue un número. 
- Incluya siempre la palabra clave `AS` ya que facilita la lectura.

```sql
SELECT first_name AS fn
  FROM staff AS s1
  JOIN students AS s2
    ON s2.mentor_id = s1.staff_num;
```

### 2.5. Procedimientos Almacenados / Stored Procedure

- El nombre debe contener un verbo.
- No coloque el prefijo `sp_` o ningún otro prefijo.

### 2.6. Sufijos uniformes

Los siguientes sufijos tienen un significado universal que garantiza que las columnas se puedan leer y comprender fácilmente desde el código SQL. Use el sufijo correcto cuando corresponda.

- `_id`: Un identificador único, como una columna que es una clave principal.
- `_status`: Valor de la bandera o algún otro estado de cualquier tipo, como publication_status.
- `_total`: El total o la suma de una colección de valores.
- `_num`: Denota que el campo contiene cualquier tipo de número.
- `_name`: Significa un nombre como first_name.
- `_seq`: Contiene una secuencia contigua de valores.
- `_date`: Denota una columna que contiene la fecha de algo.
- `_size`: El tamaño de algo como un tamaño de archivo o ropa.
- `_addr`: Una dirección para el registro puede ser física o intangible, como ip_addr.
