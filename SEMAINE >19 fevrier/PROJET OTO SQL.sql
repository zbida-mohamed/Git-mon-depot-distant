


CREATE TABLE activites(
    acti_id INT,
    acti_Ventes VARCHAR(50),
    acti_reparation VARCHAR(50),
    acti_venteetpause_accesoires VARCHAR(50),
    PRIMARY KEY(acti_id)
);

CREATE TABLE payment(

    pay_id INT,
    pay_credit INT,
    pay_comptant INT,
    PRIMARY KEY(pay_id)

);

CREATE TABLE commerciaux(

    commerciaux_id INT,
    com_particuliers VARCHAR(50)
    com_professionnels VARCHAR(50)
    PRIMARY KEY(commerciaux_id)
);

CREATE TABLE vehicule(
   vehi_id INT,
   vehi_neuf VARCHAR(50),
   vehi_occaz VARCHAR(50),
   PRIMARY KEY(vehi_id)
);


CREATE TABLE vendre(
   commerciaux_id INT,
   vehi_id INT,
   PRIMARY KEY(commerciaux_id, vehi_id),
   FOREIGN KEY(commerciaux_id) REFERENCES commerciaux(commerciaux_id),
   FOREIGN KEY(vehi_id) REFERENCES vehicule(vehi_id)
);









