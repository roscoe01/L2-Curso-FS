SELECT cli.correo, cli.telefono, cli.razon_social
FROM clientes cli;

SELECT cli.cuit
FROM clientes cli
WHERE cli.provincia_id = "4";

SELECT prod.proveedor_id, prod.nombre, prod.precio_lista, prov.razon_social
FROM productos prod
INNER JOIN proveedores prov
ON prov.idproveedores = prod.proveedor_id;
