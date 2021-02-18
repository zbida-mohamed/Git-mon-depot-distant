<?php

CREATE TABLE classe(
    classe_id INT,
    cla_nom VARCHAR(30) NOT NULL,
    sal_num INT,
    PRIMARY KEY(classe_id)
 );
 
 CREATE TABLE professeur(
    professeur_id INT,
    pro_nom VARCHAR(30),
    PRIMARY KEY(professeur_id)
 );
 
 CREATE TABLE eleve(
    eleve_id INT,
    elv_nom VARCHAR(20) NOT NULL,
    elv_pre VARCHAR(20) NOT NULL,
    classe_id INT NOT NULL,
    PRIMARY KEY(eleve_id),
    FOREIGN KEY(classe_id) REFERENCES classe(classe_id)
 );
 
 CREATE TABLE matiere(
    enseignement_id INT,
    ens_mat VARCHAR(30) NOT NULL,
    professeur_id INT NOT NULL,
    PRIMARY KEY(enseignement_id),
    FOREIGN KEY(professeur_id) REFERENCES professeur(professeur_id)
 );
 
 CREATE TABLE heures(
    enseignement_id INT,
    classe_id INT,
    nbr_heures INT,
    PRIMARY KEY(enseignement_id, classe_id),
    FOREIGN KEY(enseignement_id) REFERENCES matiere(enseignement_id),
    FOREIGN KEY(classe_id) REFERENCES classe(classe_id)
 );
 
 CREATE TABLE noter(
    eleve_id INT,
    enseignement_id INT,
    note INT,
    PRIMARY KEY(eleve_id, enseignement_id),
    FOREIGN KEY(eleve_id) REFERENCES eleve(eleve_id),
    FOREIGN KEY(enseignement_id) REFERENCES matiere(enseignement_id)
 );
 

?>