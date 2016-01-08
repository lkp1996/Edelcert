-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Ven 08 Janvier 2016 à 11:13
-- Version du serveur :  5.5.42
-- Version de PHP :  7.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données :  `edelcert`
--

-- --------------------------------------------------------

--
-- Structure de la table `Certified_Company`
--

CREATE TABLE `Certified_Company` (
  `PK_Certified_Company` int(11) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Address` varchar(100) NOT NULL,
  `City` varchar(100) NOT NULL,
  `Country` varchar(100) NOT NULL,
  `FK_Scope` int(11) NOT NULL,
  `FK_Standard` int(11) NOT NULL,
  `FK_Status` int(11) NOT NULL,
  `Initial_Certification_Date` date NOT NULL,
  `Certificate_Expiry_Date` date NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `Certified_Company`
--

INSERT INTO `Certified_Company` (`PK_Certified_Company`, `Name`, `Address`, `City`, `Country`, `FK_Scope`, `FK_Standard`, `FK_Status`, `Initial_Certification_Date`, `Certificate_Expiry_Date`) VALUES
(1, 'Test', 'test 11', 'Fribourg', 'Suisse', 29, 1, 1, '2016-01-01', '2016-12-31'),
(2, 'Test 2', 'test 12', 'Bulle', 'Suisse', 33, 2, 2, '2016-01-17', '2016-03-08');

-- --------------------------------------------------------

--
-- Structure de la table `Scope`
--

CREATE TABLE `Scope` (
  `PK_Scope` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `Scope`
--

INSERT INTO `Scope` (`PK_Scope`) VALUES
(29),
(33),
(34),
(35),
(36),
(37),
(38),
(39);

-- --------------------------------------------------------

--
-- Structure de la table `Standard`
--

CREATE TABLE `Standard` (
  `PK_Standard` int(11) NOT NULL,
  `Name` text NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `Standard`
--

INSERT INTO `Standard` (`PK_Standard`, `Name`) VALUES
(1, 'ISO 9001 : 2015'),
(2, 'Swiss School Impulse'),
(3, 'PRP Bientraitance'),
(4, 'PRP Services à la personne à domicile');

-- --------------------------------------------------------

--
-- Structure de la table `Status`
--

CREATE TABLE `Status` (
  `PK_Status` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `Status`
--

INSERT INTO `Status` (`PK_Status`, `Name`) VALUES
(1, 'Valid'),
(2, 'Suspended'),
(3, 'Withdrawn'),
(4, 'Candidate');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `Certified_Company`
--
ALTER TABLE `Certified_Company`
  ADD PRIMARY KEY (`PK_Certified_Company`),
  ADD KEY `FK_Standard` (`FK_Standard`),
  ADD KEY `FK_Scope` (`FK_Scope`),
  ADD KEY `PK_Certified_Company` (`PK_Certified_Company`),
  ADD KEY `FK_Status` (`FK_Status`);

--
-- Index pour la table `Scope`
--
ALTER TABLE `Scope`
  ADD PRIMARY KEY (`PK_Scope`),
  ADD KEY `PK_Scope` (`PK_Scope`);

--
-- Index pour la table `Standard`
--
ALTER TABLE `Standard`
  ADD PRIMARY KEY (`PK_Standard`),
  ADD KEY `PK_Standard` (`PK_Standard`);

--
-- Index pour la table `Status`
--
ALTER TABLE `Status`
  ADD PRIMARY KEY (`PK_Status`),
  ADD KEY `PK_Status` (`PK_Status`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `Certified_Company`
--
ALTER TABLE `Certified_Company`
  MODIFY `PK_Certified_Company` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `Standard`
--
ALTER TABLE `Standard`
  MODIFY `PK_Standard` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT pour la table `Status`
--
ALTER TABLE `Status`
  MODIFY `PK_Status` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;