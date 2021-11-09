-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-10-2021 a las 23:04:02
-- Versión del servidor: 10.4.13-MariaDB
-- Versión de PHP: 7.2.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `curso_l2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `nombre_contacto` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `apellido_contacto` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `telefono` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `direccion` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `localidad_id` int(11) NOT NULL,
  `pais` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cod_postal` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `empleado_ventas_id` int(11) DEFAULT NULL,
  `limite_credito` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `nombre`, `nombre_contacto`, `apellido_contacto`, `telefono`, `direccion`, `localidad_id`, `pais`, `cod_postal`, `empleado_ventas_id`, `limite_credito`) VALUES
(2, 'Fabian SRL', 'Fabian', 'Perez', '3413546542', 'Santa Fe 432', 2, 'Argentina', '2000', NULL, NULL),
(3, 'Nestor SRL', 'Nestor', 'Perez', '34132226542', 'Santa Fe 4342', 2, 'Argentina', '2000', NULL, NULL),
(4, 'SSS IO', NULL, NULL, '3413546542', 'Santa Fe 234 4e', 2, 'Argentina', '2000', NULL, NULL),
(5, 'Empresa 5', NULL, NULL, '3413546542', 'Santa Fe 5', 2, 'Argentina', '2000', NULL, NULL),
(6, 'Empresa 6', NULL, NULL, '3413546542', 'Santa Fe 6', 2, 'Argentina', '2000', NULL, NULL),
(7, 'Empresa 7', NULL, NULL, '3413546542', 'Santa Fe 7', 2, 'Uruguay', '20006', NULL, NULL),
(8, 'Empresa 8', NULL, NULL, '3413546542', 'Santa Fe 8', 2, 'Argentina', '2000', NULL, NULL),
(9, 'Empresa 9', NULL, NULL, '3413546542', 'Santa Fe 9', 2, 'Argentina', '2000', NULL, NULL),
(10, 'Empresa 10', NULL, NULL, '3413546542', 'Santa Fe 10', 2, 'Argentina', '2000', NULL, NULL),
(11, 'Empresa 11', NULL, NULL, '3413546542', 'Santa Fe 11', 2, 'Uruguay', '20006', NULL, NULL),
(12, 'Empresa 12', NULL, NULL, '3413546542', 'Santa Fe 12', 2, 'Argentina', '2000', NULL, NULL),
(13, 'Empresa 13', NULL, NULL, '3413546542', 'Santa Fe 13', 2, 'Argentina', '2000', NULL, NULL),
(14, 'Empresa 14', NULL, NULL, '3413546542', 'Santa Fe 14', 2, 'Argentina', '2000', NULL, NULL),
(15, 'Empresa 15', NULL, NULL, '3413546542', 'Santa Fe 15', 2, 'Argentina', '2000', NULL, NULL),
(16, 'Empresa 16', NULL, NULL, '3413546542', 'Santa Fe 16', 2, 'Argentina', '2000', NULL, NULL),
(17, 'Empresa 17', NULL, NULL, '3413546542', 'Santa Fe 17', 2, 'Argentina', '2000', NULL, NULL),
(18, 'Empresa 18', NULL, NULL, '3413546542', 'Santa Fe 18', 2, 'Argentina', '2000', NULL, NULL),
(19, 'Empresa 19', NULL, NULL, '3413546542', 'Santa Fe 19', 2, 'Uruguay', '20006', NULL, NULL),
(20, 'Empresa 20', NULL, NULL, '3413546542', 'Santa Fe 20', 2, 'Argentina', '2000', NULL, NULL),
(21, 'Empresa 21', NULL, NULL, '3413546542', 'Santa Fe 21', 2, 'Argentina', '2000', NULL, NULL),
(22, 'Empresa 22', NULL, NULL, '3413546542', 'Santa Fe 22', 2, 'Argentina', '2000', NULL, NULL),
(23, 'Empresa 23', NULL, NULL, '3413546542', 'Santa Fe 23', 2, 'Argentina', '2000', NULL, NULL),
(24, 'Empresa 24', NULL, NULL, '3413546542', 'Santa Fe 24', 2, 'Argentina', '2000', NULL, NULL),
(25, 'Empresa 25', NULL, NULL, '3413546542', 'Santa Fe 25', 2, 'Uruguay', '20006', NULL, NULL),
(26, 'Empresa 26', NULL, NULL, '3413546542', 'Santa Fe 26', 2, 'Argentina', '2000', NULL, NULL),
(27, 'Empresa 27', NULL, NULL, '3413546542', 'Santa Fe 27', 2, 'Argentina', '2000', NULL, NULL),
(28, 'Empresa 28', NULL, NULL, '3413546542', 'Santa Fe 28', 2, 'Argentina', '2000', NULL, NULL),
(29, 'Empresa 29', NULL, NULL, '3413546542', 'Santa Fe 29', 2, 'Argentina', '2000', NULL, NULL),
(30, 'Empresa 30', NULL, NULL, '3413546542', 'Santa Fe 30', 2, 'Argentina', '2000', NULL, NULL),
(31, 'Empresa 31', NULL, NULL, '3413546542', 'Santa Fe 31', 2, 'Argentina', '2000', NULL, NULL),
(32, 'Empresa 32', NULL, NULL, '3413546542', 'Santa Fe 32', 2, 'Argentina', '2000', NULL, NULL),
(33, 'Empresa 33', NULL, NULL, '3413546542', 'Santa Fe 33', 2, 'Argentina', '2000', NULL, NULL),
(34, 'Empresa 34', NULL, NULL, '3413546542', 'Santa Fe 34', 2, 'Argentina', '2000', NULL, NULL),
(35, 'Empresa 35', NULL, NULL, '3413546542', 'Santa Fe 35', 2, 'Argentina', '2000', NULL, NULL),
(36, 'Empresa 36', NULL, NULL, '3413546542', 'Santa Fe 36', 2, 'Argentina', '2000', NULL, NULL),
(37, 'Empresa 37', NULL, NULL, '3413546542', 'Santa Fe 37', 2, 'Argentina', '2000', NULL, NULL),
(38, 'Empresa 38', NULL, NULL, '3413546542', 'Santa Fe 38', 2, 'Argentina', '2000', NULL, NULL),
(39, 'Empresa 39', NULL, NULL, '3413546542', 'Santa Fe 39', 2, 'Argentina', '2000', NULL, NULL),
(40, 'Empresa 40', NULL, NULL, '3413546542', 'Santa Fe 40', 2, 'Argentina', '2000', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `localidades`
--

CREATE TABLE `localidades` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `provincia_id` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `modified` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `localidades`
--

INSERT INTO `localidades` (`id`, `nombre`, `provincia_id`, `created`, `modified`) VALUES
(2, 'Rosario', 1, '2021-10-27 17:22:45', '2021-10-27 17:22:45'),
(3, 'San Lorenzo', 1, '2021-10-27 17:22:45', '2021-10-27 17:22:45'),
(4, 'Pergamino', 2, '2021-10-27 17:22:45', '2021-10-27 17:22:45'),
(5, 'Resistencia', 5, '2021-10-27 17:22:45', '2021-10-27 17:22:45'),
(6, 'Corrientes', 6, '2021-10-27 17:22:45', '2021-10-27 17:22:45'),
(7, 'Victoria', 4, '2021-10-27 17:22:45', '2021-10-27 17:22:45'),
(8, 'Cosquín', 3, '2021-10-27 17:22:45', '2021-10-27 17:22:45');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `provincias`
--

CREATE TABLE `provincias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created` datetime NOT NULL,
  `modified` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `provincias`
--

INSERT INTO `provincias` (`id`, `nombre`, `created`, `modified`) VALUES
(1, 'Santa Fe', '2021-10-27 17:21:16', '2021-10-27 17:21:21'),
(2, 'Buenos Aires', '2021-10-27 17:21:35', '2021-10-27 17:21:26'),
(3, 'Cordoba', '2021-10-27 17:21:35', '2021-10-27 17:21:26'),
(4, 'Entre Ríos', '2021-10-27 17:21:35', '2021-10-27 17:21:26'),
(5, 'Chaco', '2021-10-27 17:21:35', '2021-10-27 17:21:26'),
(6, 'Corrientes', '2021-10-27 17:21:35', '2021-10-27 17:21:26');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `localidad` (`localidad_id`),
  ADD KEY `empleado_ventas` (`empleado_ventas_id`);

--
-- Indices de la tabla `localidades`
--
ALTER TABLE `localidades`
  ADD PRIMARY KEY (`id`),
  ADD KEY `provincia_id` (`provincia_id`);

--
-- Indices de la tabla `provincias`
--
ALTER TABLE `provincias`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT de la tabla `localidades`
--
ALTER TABLE `localidades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `provincias`
--
ALTER TABLE `provincias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD CONSTRAINT `empleado_ventas` FOREIGN KEY (`empleado_ventas_id`) REFERENCES `clientes` (`id`),
  ADD CONSTRAINT `localidad` FOREIGN KEY (`localidad_id`) REFERENCES `localidades` (`id`);

--
-- Filtros para la tabla `localidades`
--
ALTER TABLE `localidades`
  ADD CONSTRAINT `localidades_ibfk_1` FOREIGN KEY (`provincia_id`) REFERENCES `provincias` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
