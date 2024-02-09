BEGIN;

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------ TRUNCATE TABLE-------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------


TRUNCATE TABLE "role" CASCADE;
TRUNCATE TABLE "avatar" CASCADE;
TRUNCATE TABLE "collaborator" CASCADE;
TRUNCATE TABLE "information" CASCADE;
TRUNCATE TABLE "action" CASCADE;
TRUNCATE TABLE "phone" CASCADE;
TRUNCATE TABLE "sector" CASCADE;



-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------ TABLE ROLE-------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------


-- Insertion des rôles
INSERT INTO "role" ("label")
VALUES
('admin'),
('negociateur');

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------ TABLE AVATAR-------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-- Insertion des avatars
INSERT INTO "avatar" ("label", "url")
VALUES
('avatar_1', 'data:image/jpeg;base64,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'),
('avatar_2', 'data:image/jpeg;base64,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'),
('avatar_3', 'data:image/png;base64,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'),
('avatar_4', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAMAAADV/VW6AAAAPFBMVEX///+ZmZmUlJTq6ur7+/vLy8vW1tbT09ORkZGNjY329vbi4uKsrKzQ0NDv7++wsLCkpKTFxcW6urrc3NzfD2CxAAADs0lEQVRoge1a0bKrIAwU1ErVqtX//9erp6c9qGRJQOvcGfaxU1gkYRNCsiwhISEhISEhIcGBomtuj3LG49Z0xTeZ66bslTFGv2GM6sum/gZ3V7VqZlQbLD+1VXcudzH1asdsrUH102yHk0xRlIOhuV8wQ3kS+3O/5c4t0M8TFvBAu761QXUwed6yyX8W0OZHspe8fbctUB5GXvdej9vDtAd5QMO3+noDmiPYb0HkPwu4xbNXwewzf/QJqALM/gfzuJI9lv8WyR5n/8Zj91fM9Swg2P8LOPMc3m5NnjdV7/n+0DwACa0Zpo+sFBOKhLoPYy/pObXamBSJgwnS35yeUQ+7Da0H8PeQ+NPS07UOc9a0qXQrZ3+A7XQ6U03/X65+BT2ZIY5SA/xPGv2e9FaSntzTY54ydnTkSUfK6TFa9vklTQ/8CHir6PAVAz0RcCPgroPk8yegOOAQA6kwk4AeyTi4SNVg0wTS2wH2veCx6OGyN0AJFjIicBmJ9NAeHPH1bOUF8ok3ERmNkGoHYJKDsvfggSsAzcH6SSu1EigPrd0LgO8h0/OPHppknoYUkMmTdfLYC192HbZsZXi623noKetDyy/0POHxZfeEfoM48btsnuv7r7Qu8/sMz77woCzvPdPuEIGs/DOId9+Dx/491bCKuzlIs8Gag+mX7Hn6LeV2ExaKU+iXq07bj+O41Fh5/z+WXv1UcgV/5tFzXE+b+wqGsQym6/kOnjbD+GjqwkLXVOPgWwHz4GHZ0WrMnepZ5COuwDFlB4muViXKdkq0AKboZjS96T0pCyqAMkMOiFwM64E0lcdOF1VYZQLypsdNN6iDz7QdkXCyky236xt2iSR32p+dajoTbSOoD7qVg11gc1wz9Mhnz7LRwc8v8LhqqaLioGP/BJesvfNIS8OOuCF4YtxdsEXVgcx12ZTUNrdpo/xhaHt4ReWF7eLv4rJwfY/Zvs3iByn79sIl3L51YU1alluwvnQIC2vr0SFPEivpEa9/VVTlRmob66xB/KRoB05upLZhX1RDHtSssKvlo+2kJaSgbtcIg+it4UHP2X/Xtjj6sMcUa/vj6EO2fsHn8Os8AB/64If0T9qjA/Bmj3hGv/YRdY7bsU/IkU/okQ/o0Q/4jPsuifj2gdn+4fQHNE8s/h/WOhLj8zaubZzJLm4byq5umsoubhmbUVzaMJe92gW95WZ1Vrtgxm2WPBNEq6j6RqvoC7+Nsn+x9YuNsm9YbcLTd9uEExISEhISEhL+H/wDEkwk1OXWIOkAAAAASUVORK5CYII='),
('avatar_5', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKJhYLo1dK0XB8RFvxGH7d4_NrJLy2Et-M0A&usqp=CAU'),
('avatar_6', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9inRqaFfeNmYbm_Z_AwaICGOVqcRE-Of5Lw&usqp=CAU');

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------ TABLE SECTOR-------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------


INSERT INTO "sector"
("label", "color_code", "city", "code_zip", "collaborator_id")
VALUES
('Quartier Latin', '#FF0000', 'Paris', 75005, 2),
('Montmartre', '#00FF00', 'Paris', 75018, 3),
('La Défense', '#0000FF', 'Courbevoie', 92400, 4),
('Croix-Rousse', '#FFFF00', 'Lyon', 69004, 5),
('Le Panier', '#FF00FF', 'Marseille', 13002, 6);

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------ TABLE INFORMATION-------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

--Pour le collaborateur 2:
INSERT INTO "information" (
    "type", "owner_name", "owner_email", "address_number", "address_street", 
    "code_zip", "address_city", "address_info", "source", "category", 
    "comment", "date", "collaborator_id", "sector_id", "phone_1", "phone_2", 
    "notification_date", "longitude", "latitude"
) VALUES 
('Appartement', 'Stéphane Durand', 'stephane.durand@example.com', 14, 'Rue Mouffetard', 75005, 'Paris', '3ème étage, porte droite', 'Petites annonces', 'A vendre', 'Commentaire sur M. Durand', '2023-09-25', 2, 1, '0123456789', '0987654321', '2023-10-05', 2.349902, 48.845646),
('Maison', 'Christine Legrand', 'christine.legrand@example.com', 3, 'Place Contrescarpe', 75005, 'Paris', 'Maison blanche avec volets verts', 'Contact direct', 'Potentiellement à vendre', 'Commentaire sur Mme Legrand', '2023-09-26', 2, 1, '0123123123', '0912312312', '2023-10-06', 2.348805, 48.846644),
('Appartement', 'Yves Rocher', 'yves.rocher@example.com', 67, 'Rue de la Huchette', 75005, 'Paris', '4ème étage', 'Référence', 'Succession en cours', 'Commentaire sur M. Rocher', '2023-09-27', 2, 1, '0178787878', '0987878787', '2023-10-07', 2.346468, 48.853260),
('Terrain', 'Mathieu Fontaine', 'mathieu.fontaine@example.com', 98, 'Rue Lacépède', 75005, 'Paris', 'Terrain derrière l''école', 'Petites annonces', 'A vendre', 'Commentaire sur M. Fontaine', '2023-09-28', 2, 1, '0156565656', '0986565656', '2023-10-08', 2.354499, 48.841650),
('Maison', 'Claire Dupuis', 'claire.dupuis@example.com', 29, 'Rue des Écoles', 75005, 'Paris', 'Maison avec jardin', 'Contact direct', 'Potentiellement à vendre', 'Commentaire sur Mme Dupuis', '2023-09-29', 2, 1, '0125252525', '0985252525', '2023-10-09', 2.349612, 48.848530);


--Pour le collaborateur 3:
INSERT INTO "information" (
    "type", "owner_name", "owner_email", "address_number", "address_street", 
    "code_zip", "address_city", "address_info", "source", "category", 
    "comment", "date", "collaborator_id", "sector_id", "phone_1", "phone_2", 
    "notification_date", "longitude", "latitude"
) VALUES 
('Appartement', 'Lucie Fer', 'lucie.fer@example.com', 45, 'Avenue des Gobelins', 75013, 'Paris', '2ème étage, porte gauche', 'Contact direct', 'A louer', 'Commentaire sur Mme Fer', '2023-09-26', 3, 2, '0111111111', '0999999999', '2023-10-10', 2.355867, 48.832378),
('Maison', 'Guillaume Tell', 'guillaume.tell@example.com', 56, 'Rue de la Butte-aux-Cailles', 75013, 'Paris', 'Maison rouge', 'Référence', 'Vente programmée', 'Commentaire sur M. Tell', '2023-09-27', 3, 2, '0122222222', '0988888888', '2023-10-11', 2.355474, 48.827388),
('Appartement', 'Sophie Marceau', 'sophie.marceau@example.com', 89, 'Boulevard de l''Hôpital', 75013, 'Paris', 'RDC', 'Petites annonces', 'Location saisonnière', 'Commentaire sur Mme Marceau', '2023-09-28', 3, 2, '0133333333', '0977777777', '2023-10-12', 2.361165, 48.837722),
('Terrain', 'Olivier Salad', 'olivier.salad@example.com', 120, 'Rue Dunois', 75013, 'Paris', 'Terrain vague', 'Contact direct', 'Vente envisagée', 'Commentaire sur M. Salad', '2023-09-29', 3, 2, '0144444444', '0966666666', '2023-10-13', 2.370688, 48.833799),
('Maison', 'Chantal The', 'chantal.the@example.com', 34, 'Rue de la Glacière', 75013, 'Paris', 'Maison avec piscine', 'Petites annonces', 'A vendre', 'Commentaire sur Mme The', '2023-09-30', 3, 2, '0155555555', '0955555555', '2023-10-14', 2.347409, 48.832443);

--Pour le collaborateur 4:

INSERT INTO "information" (
    "type", "owner_name", "owner_email", "address_number", "address_street", 
    "code_zip", "address_city", "address_info", "source", "category", 
    "comment", "date", "collaborator_id", "sector_id", "phone_1", "phone_2", 
    "notification_date", "longitude", "latitude"
) VALUES 
('Appartement', 'Marc Terrien', 'marc.terrien@example.com', 12, 'Rue Oberkampf', 75011, 'Paris', '3ème étage, porte droite', 'Petites annonces', 'A vendre', 'Commentaire sur M. Terrien', '2023-09-24', 4, 3, '0166666666', '0944444444', '2023-10-09', 2.380384, 48.863256),
('Maison', 'Elodie Blanc', 'elodie.blanc@example.com', 23, 'Avenue Parmentier', 75011, 'Paris', 'Maison bleue', 'Référence', 'Vente récente', 'Commentaire sur Mme Blanc', '2023-09-25', 4, 3, '0177777777', '0933333333', '2023-10-10', 2.373194, 48.864539),
('Appartement', 'Yann Tiersen', 'yann.tiersen@example.com', 89, 'Boulevard de Belleville', 75011, 'Paris', '4ème étage', 'Contact direct', 'A louer', 'Commentaire sur M. Tiersen', '2023-09-26', 4, 3, '0188888888', '0922222222', '2023-10-11', 2.382085, 48.870502),
('Terrain', 'Céline Soleil', 'celine.soleil@example.com', 67, 'Rue de la Roquette', 75011, 'Paris', 'Proche parc', 'Petites annonces', 'Vente envisagée', 'Commentaire sur Mme Soleil', '2023-09-27', 4, 3, '0199999999', '0911111111', '2023-10-12', 2.374327, 48.854149),
('Maison', 'Fabrice Lumière', 'fabrice.lumiere@example.com', 45, 'Avenue Philippe Auguste', 75011, 'Paris', 'Maison avec jardin', 'Contact direct', 'A vendre', 'Commentaire sur M. Lumière', '2023-09-28', 4, 3, '0111111110', '0900000000', '2023-10-13', 2.389697, 48.857316);


--Pour le collaborateur 5:
INSERT INTO "information" (
    "type", "owner_name", "owner_email", "address_number", "address_street", 
    "code_zip", "address_city", "address_info", "source", "category", 
    "comment", "date", "collaborator_id", "sector_id", "phone_1", "phone_2", 
    "notification_date", "longitude", "latitude"
) VALUES 
('Appartement', 'Julien Pernot', 'julien.pernot@example.com', 12, 'Montée de la Grande Côte', 69004, 'Lyon', '3ème étage, porte droite', 'Petites annonces', 'A louer', 'Commentaire sur M. Pernot', '2023-09-24', 5, 4, '0478291234', '0978234567', '2023-10-05', 4.828944, 45.776221),
('Maison', 'Sophie Martin', 'sophie.martin@example.com', 67, 'Rue Hénon', 69004, 'Lyon', 'Maison bleue', 'Référence', 'Vente récente', 'Commentaire sur Mme Martin', '2023-09-25', 5, 4, '0478292345', '0978235678', '2023-10-06', 4.832561, 45.779042),
('Terrain', 'Hugo Vérin', 'hugo.verin@example.com', 89, 'Rue Dumenge', 69004, 'Lyon', 'À côté du parc', 'Contact direct', 'A vendre', 'Commentaire sur M. Vérin', '2023-09-26', 5, 4, '0478293456', '0978236789', '2023-10-07', 4.827194, 45.774489),
('Appartement', 'Marie Dubois', 'marie.dubois@example.com', 21, 'Boulevard de la Croix-Rousse', 69004, 'Lyon', '1er étage', 'Petites annonces', 'A vendre', 'Commentaire sur Mme Dubois', '2023-09-27', 5, 4, '0478294567', '0978245678', '2023-10-08', 4.830787, 45.773058),
('Maison', 'Philippe Delaunay', 'philippe.delaunay@example.com', 43, 'Rue Chazière', 69004, 'Lyon', 'Maison verte', 'Contact direct', 'Envisage de vendre', 'Commentaire sur M. Delaunay', '2023-09-28', 5, 4, '0478295678', '0978256789', '2023-10-09', 4.829128, 45.777672);

--Pour le collaborateur 6:
INSERT INTO "information" (
    "type", "owner_name", "owner_email", "address_number", "address_street", 
    "code_zip", "address_city", "address_info", "source", "category", 
    "comment", "date", "collaborator_id", "sector_id", "phone_1", "phone_2", 
    "notification_date", "longitude", "latitude"
) VALUES 
('Appartement', 'François Lemoine', 'francois.lemoine@example.com', 15, 'Rue de la République', 13002, 'Marseille', '2ème étage, porte gauche', 'Petites annonces', 'A louer', 'Commentaire sur M. Lemoine', '2023-09-24', 6, 5, '0490131234', '0970123456', '2023-10-05', 5.36978, 43.29648),
('Maison', 'Nathalie Roux', 'nathalie.roux@example.com', 56, 'Rue de l''Évêché', 13002, 'Marseille', 'Maison rouge avec jardin', 'Référence', 'Vente récente', 'Commentaire sur Mme Roux', '2023-09-25', 6, 5, '0490132345', '0970124567', '2023-10-06', 5.36982, 43.29649),
('Terrain', 'Guillaume Petit', 'guillaume.petit@example.com', 47, 'Rue du Panier', 13002, 'Marseille', 'À côté de la place', 'Contact direct', 'A vendre', 'Commentaire sur M. Petit', '2023-09-26', 6, 5, '0490133456', '0970125678', '2023-10-07', 5.36985, 43.29650),
('Appartement', 'Isabelle Lefebvre', 'isabelle.lefebvre@example.com', 32, 'Montée des Accoules', 13002, 'Marseille', 'RDC, porte droite', 'Petites annonces', 'A vendre', 'Commentaire sur Mme Lefebvre', '2023-09-27', 6, 5, '0490134567', '0970126789', '2023-10-08', 5.36988, 43.29651),
('Maison', 'Bruno Dubois', 'bruno.dubois@example.com', 24, 'Rue Sainte-Françoise', 13002, 'Marseille', 'Maison bleue', 'Contact direct', 'Envisage de vendre', 'Commentaire sur M. Dubois', '2023-09-28', 6, 5, '0490135678', '0970127890', '2023-10-09', 5.36991, 43.29652);


----------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------ TABLE ACTION-------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------- Action info pour Collaborator 2-------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-- SQL: Actions pour Stéphane Durand
INSERT INTO "action" 
("description", "date", "information_id")
VALUES
('Contacter Stéphane Durand pour une visite', '2023-09-20', 1),
('Vérifier la disponibilité des notaires pour la signature', '2023-09-21', 1),
('Envoyer les photos de l''appartement au client potentiel', '2023-10-10', 1),
('Rassembler les documents nécessaires pour la vente', '2023-10-15', 1),
('Organiser une réunion avec le client pour la proposition financière', '2023-10-20', 1),

-- Actions pour Christine Legrand
('Contacter Christine pour discuter des détails', '2023-09-19', 2),
('Évaluer la maison pour estimer le prix de vente', '2023-09-20', 2),
('Rechercher des acheteurs potentiels', '2023-10-12', 2),
('Planifier une réunion avec Christine pour parler des offres', '2023-10-17', 2),
('Vérifier la situation légale de la maison', '2023-10-22', 2),

-- Actions pour Yves Rocher
('Appeler Yves Rocher pour discuter de la succession', '2023-09-18', 3),
('Vérifier les documents de succession', '2023-09-21', 3),
('Organiser une rencontre avec le notaire', '2023-10-13', 3),
('Envoyer un rappel à Yves Rocher concernant les documents manquants', '2023-10-18', 3),
('Programmer une visite pour l''estimation de l''appartement', '2023-10-23', 3),

-- Actions pour Mathieu Fontaine
('Contacter Mathieu pour discuter du terrain', '2023-09-17', 4),
('Visiter le terrain pour une première estimation', '2023-09-19', 4),
('Chercher des clients potentiels pour le terrain', '2023-10-14', 4),
('Programmer une rencontre avec Mathieu pour discuter des offres', '2023-10-19', 4),
('Organiser une exposition du terrain', '2023-10-24', 4),

-- Actions pour Claire Dupuis
('Appeler Claire pour une première prise de contact', '2023-09-16', 5),
('Visiter la maison et prendre des photos', '2023-09-20', 5),
('Commencer la campagne de marketing pour la maison', '2023-10-15', 5),
('Organiser une journée portes ouvertes pour les acheteurs potentiels', '2023-10-20', 5),
('Programmer une réunion avec Claire pour discuter des étapes suivantes', '2023-10-25', 5);


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------- Action info pour Collaborator 3-------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-- Actions pour Lucie Fer
INSERT INTO "action" 
("description", "date", "information_id")
VALUES
('Contacter Lucie Fer pour discuter des détails de la location', '2023-09-24', 6),
('Visiter l''appartement de Lucie pour une estimation', '2023-09-25', 6),
('Mettre l''appartement en ligne pour la location', '2023-10-16', 6),
('Planifier une visite avec un client potentiel', '2023-10-19', 6),
('Envoyer le contrat de location à Lucie', '2023-10-23', 6),

-- Actions pour Guillaume Tell
('Appeler Guillaume pour fixer une date de vente', '2023-09-23', 7),
('Organiser une visite de la maison pour les acheteurs', '2023-10-17', 7),
('Vérifier la situation légale de la maison avant la vente', '2023-10-20', 7),
('Rassembler les documents nécessaires pour la vente', '2023-10-21', 7),
('Organiser la signature du contrat avec le notaire', '2023-10-25', 7),

-- Actions pour Sophie Marceau
('Contactez Sophie pour discuter des conditions de location saisonnière', '2023-09-22', 8),
('Publier l''annonce pour la location saisonnière', '2023-10-15', 8),
('Organiser une séance photo de l''appartement', '2023-10-18', 8),
('Rassembler les documents pour la location saisonnière', '2023-10-22', 8),
('Confirmer les réservations pour la période estivale', '2023-10-24', 8),

-- Actions pour Olivier Salad
('Discuter avec Olivier des détails de la vente du terrain', '2023-09-21', 9),
('Évaluer le prix du terrain', '2023-10-14', 9),
('Organiser une visite du terrain pour des acheteurs potentiels', '2023-10-18', 9),
('Rechercher des constructeurs intéressés par le terrain', '2023-10-21', 9),
('Préparer les documents pour la vente du terrain', '2023-10-23', 9),

-- Actions pour Chantal The
('Rencontrer Chantal pour discuter de la vente de la maison', '2023-09-20', 10),
('Estimer le prix de la maison avec piscine', '2023-10-13', 10),
('Mettre en ligne l''annonce de vente', '2023-10-16', 10),
('Organiser une journée portes ouvertes pour les acheteurs', '2023-10-20', 10),
('Finaliser la négociation avec l''acheteur le plus sérieux', '2023-10-22', 10);

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------- Action info pour Collaborator 4-------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- Actions pour Marc Terrien
INSERT INTO "action" 
("description", "date", "information_id")
VALUES
('Contacter Marc Terrien pour discuter des détails de la vente', '2023-09-22', 11),
('Visiter l''appartement de Marc pour une estimation', '2023-09-23', 11),
('Mettre l''appartement en ligne pour la vente', '2023-10-15', 11),
('Organiser une visite avec un client potentiel', '2023-10-18', 11),
('Finaliser la vente avec l''acheteur choisi', '2023-10-21', 11),

-- Actions pour Elodie Blanc
('Rencontrer Elodie pour confirmer la vente récente', '2023-09-21', 12),
('Documenter tous les détails de la vente', '2023-09-22', 12),
('Envoyer les documents à l''agence immobilière', '2023-10-14', 12),
('Obtenir un feedback de Elodie sur le processus de vente', '2023-10-17', 12),
('Archiver les informations de vente', '2023-10-20', 12),

-- Actions pour Yann Tiersen
('Contacter Yann Tiersen pour discuter des conditions de location', '2023-09-20', 13),
('Afficher l''appartement en location', '2023-10-13', 13),
('Planifier une journée portes ouvertes pour les locataires potentiels', '2023-10-16', 13),
('Sélectionner un locataire et préparer le contrat', '2023-10-19', 13),
('Rencontrer Yann pour signer le contrat de location', '2023-10-22', 13),

-- Actions pour Céline Soleil
('Rencontrer Céline Soleil pour discuter de la vente du terrain', '2023-09-19', 14),
('Estimer le prix du terrain proche du parc', '2023-10-12', 14),
('Lister le terrain en vente', '2023-10-15', 14),
('Planifier des visites pour les acheteurs potentiels', '2023-10-18', 14),
('Négocier le prix avec l''acheteur le plus sérieux', '2023-10-21', 14),

-- Actions pour Fabrice Lumière
('Rencontrer Fabrice Lumière pour discuter de la vente de la maison', '2023-09-18', 15),
('Estimer le prix de la maison avec jardin', '2023-10-11', 15),
('Mettre la maison en vente en ligne', '2023-10-14', 15),
('Organiser une journée portes ouvertes', '2023-10-17', 15),
('Finaliser la négociation et signer le contrat de vente', '2023-10-20', 15);


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------- Action info pour Collaborator 5-------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- Actions pour Julien Pernot
INSERT INTO "action" 
("description", "date", "information_id")
VALUES
('Contacter Julien Pernot pour discuter des conditions de location', '2023-09-20', 16),
('Visiter l''appartement de Julien pour une estimation', '2023-09-21', 16),
('Mettre l''appartement en location en ligne', '2023-10-10', 16),
('Planifier une journée de visite pour les locataires potentiels', '2023-10-12', 16),
('Finaliser la location avec le locataire choisi', '2023-10-15', 16),

-- Actions pour Sophie Martin
('Rencontrer Sophie pour documenter la vente récente', '2023-09-19', 17),
('Préparer tous les documents liés à la vente', '2023-09-20', 17),
('Confirmer le transfert des fonds', '2023-10-11', 17),
('Envoyer une facture de commission à Sophie', '2023-10-13', 17),
('Archiver les informations liées à cette vente', '2023-10-16', 17),

-- Actions pour Hugo Vérin
('Rencontrer Hugo Vérin pour discuter des détails de la vente', '2023-09-18', 18),
('Faire une estimation du terrain à côté du parc', '2023-09-19', 18),
('Lister le terrain en vente', '2023-10-12', 18),
('Organiser des visites pour les acheteurs potentiels', '2023-10-14', 18),
('Négocier le prix avec un acheteur sérieux', '2023-10-17', 18),

-- Actions pour Marie Dubois
('Contacter Marie Dubois pour une estimation de l''appartement', '2023-09-17', 19),
('Lister l''appartement en vente en ligne', '2023-10-09', 19),
('Planifier une journée portes ouvertes pour l''appartement', '2023-10-11', 19),
('Recevoir une offre d''achat et négocier', '2023-10-14', 19),
('Finaliser la vente avec l''acheteur', '2023-10-18', 19),

-- Actions pour Philippe Delaunay
('Rencontrer Philippe Delaunay pour discuter de la vente potentielle', '2023-09-16', 20),
('Visiter la maison verte pour une estimation', '2023-09-17', 20),
('Préparer un plan marketing pour la vente', '2023-10-10', 20),
('Planifier une journée de visites pour la maison', '2023-10-13', 20),
('Négocier le prix avec un acheteur potentiel', '2023-10-16', 20);


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------- Action info pour Collaborator 6-------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-- Actions pour François Lemoine
INSERT INTO "action" 
("description", "date", "information_id")
VALUES
('Contacter François Lemoine pour discuter des conditions de location', '2023-09-20', 21),
('Visiter l''appartement de François pour une estimation', '2023-09-21', 21),
('Mettre l''appartement en location en ligne', '2023-10-10', 21),
('Planifier une journée de visite pour les locataires potentiels', '2023-10-12', 21),
('Finaliser la location avec le locataire choisi', '2023-10-15', 21),

-- Actions pour Nathalie Roux
('Rencontrer Nathalie pour documenter la vente récente', '2023-09-19', 22),
('Préparer tous les documents liés à la vente', '2023-09-20', 22),
('Confirmer le transfert des fonds', '2023-10-11', 22),
('Envoyer une facture de commission à Nathalie', '2023-10-13', 22),
('Archiver les informations liées à cette vente', '2023-10-16', 22),

-- Actions pour Guillaume Petit
('Rencontrer Guillaume Petit pour discuter des détails de la vente', '2023-09-18', 23),
('Faire une estimation du terrain à côté de la place', '2023-09-19', 23),
('Lister le terrain en vente', '2023-10-12', 23),
('Organiser des visites pour les acheteurs potentiels', '2023-10-14', 23),
('Négocier le prix avec un acheteur sérieux', '2023-10-17', 23),

-- Actions pour Isabelle Lefebvre
('Contacter Isabelle Lefebvre pour une estimation de l''appartement', '2023-09-17', 24),
('Lister l''appartement en vente en ligne', '2023-10-09', 24),
('Planifier une journée portes ouvertes pour l''appartement', '2023-10-11', 24),
('Recevoir une offre d''achat et négocier', '2023-10-14', 24),
('Finaliser la vente avec l''acheteur', '2023-10-18', 24),

-- Actions pour Bruno Dubois
('Rencontrer Bruno Dubois pour discuter de la vente potentielle', '2023-09-16', 25),
('Visiter la maison bleue pour une estimation', '2023-09-17', 25),
('Préparer un plan marketing pour la vente', '2023-10-10', 25),
('Planifier une journée de visites pour la maison', '2023-10-13', 25),
('Négocier le prix avec un acheteur potentiel', '2023-10-16', 25);



COMMIT;