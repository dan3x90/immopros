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
TRUNCATE TABLE "notification_date" CASCADE;
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
------------------------------------------------------------------------------------ TABLE COLLABORATOR-------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------


-- Insertion des collaborateurs
INSERT INTO "collaborator"
("firstname", "lastname", "email", "password", "phone", "role_id", "avatar_id")
VALUES
('Jeanne', 'Duroy', 'jeanne.duroy@example.com', 'pass123', '+33123456789', 1, 1),
('Mathieu', 'Bernard', 'mathieu.bernard@example.com', 'pass123', '+33234567890', 2, 2),
('Amandine', 'Leroux', 'amandine.leroux@example.com', 'pass123', '+33345678901', 2, 3),
('Loïc', 'Blanchard', 'loic.blanchard@example.com', 'pass123', '+33456789012', 2, 4),
('Nathalie', 'Petit', 'nathalie.petit@example.com', 'pass123', '+33567890123', 2, 5),
('Sébastien', 'Moreau', 'sebastien.moreau@example.com', 'pass123', '+33678901234', 2, 6);

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------ TABLE SECTOR-------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------



-- Insertion des secteurs pour chaque négociateur
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


-- Insertion des informations pour chaque négociateur 
INSERT INTO "information" 
("type", "owner_name", "owner_email", "address_number", "address_street", "code_zip", "address_city", "source", "category", "date", "collaborator_id", "sector_id")
VALUES
-- Collaborateur 2 (Quartier Latin, Paris)
('Appartement', 'Stéphane Durand', 'stephane.durand@example.com', 14, 'Rue Mouffetard', 75005, 'Paris', 'Petites annonces', 'A vendre', '2023-09-25', 2, 1),
('Maison', 'Christine Legrand', 'christine.legrand@example.com', 3, 'Place Contrescarpe', 75005, 'Paris', 'Contact direct', 'Potentiellement à vendre', '2023-09-26', 2, 1),
('Appartement', 'Yves Rocher', 'yves.rocher@example.com', 67, 'Rue de la Huchette', 75005, 'Paris', 'Référence', 'Succession en cours', '2023-09-27', 2, 1),
('Terrain', 'Mathieu Fontaine', 'mathieu.fontaine@example.com', 98, 'Rue Lacépède', 75005, 'Paris', 'Petites annonces', 'A vendre', '2023-09-28', 2, 1),
('Maison', 'Claire Dupuis', 'claire.dupuis@example.com', 29, 'Rue des Écoles', 75005, 'Paris', 'Contact direct', 'Potentiellement à vendre', '2023-09-29', 2, 1),

-- Collaborateur 3 (Montmartre, Paris)
('Appartement', 'Philippe Martin', 'philippe.martin@example.com', 7, 'Rue Lepic', 75018, 'Paris', 'Référence', 'Succession en cours', '2023-09-30', 3, 2),
('Maison', 'Caroline Petit', 'caroline.petit@example.com', 19, 'Place du Tertre', 75018, 'Paris', 'Petites annonces', 'A vendre', '2023-10-01', 3, 2),
('Terrain', 'Pierre Bernard', 'pierre.bernard@example.com', 23, 'Rue de la Bonne', 75018, 'Paris', 'Contact direct', 'Potentiellement à vendre', '2023-10-02', 3, 2),
('Appartement', 'Émilie Dubois', 'emilie.dubois@example.com', 52, 'Rue Gabrielle', 75018, 'Paris', 'Petites annonces', 'A vendre', '2023-10-03', 3, 2),
('Maison', 'Lucas Durand', 'lucas.durand@example.com', 45, 'Rue Caulaincourt', 75018, 'Paris', 'Référence', 'Succession en cours', '2023-10-04', 3, 2),


-- Collaborateur 4 (La Défense, Courbevoie)
('Terrain', 'Benoit Dupont', 'benoit.dupont@example.com', 5, 'Avenue Gambetta', 92400, 'Courbevoie', 'Petites annonces', 'A vendre', '2023-10-05', 4, 3),
('Appartement', 'Camille Rivière', 'camille.riviere@example.com', 15, 'Rue Baudin', 92400, 'Courbevoie', 'Référence', 'Potentiellement à vendre', '2023-10-06', 4, 3),
('Maison', 'Éric Blanc', 'eric.blanc@example.com', 23, 'Rue de l''Abreuvoir', 92400, 'Courbevoie', 'Contact direct', 'Succession en cours', '2023-10-07', 4, 3),
('Appartement', 'Chloé Leroux', 'chloe.leroux@example.com', 32, 'Rue des Lilas', 92400, 'Courbevoie', 'Petites annonces', 'A vendre', '2023-10-08', 4, 3),
('Maison', 'Rémi Chevalier', 'remi.chevalier@example.com', 78, 'Rue du Commandant Rivière', 92400, 'Courbevoie', 'Contact direct', 'Potentiellement à vendre', '2023-10-09', 4, 3),

-- Collaborateur 5 (Croix-Rousse, Lyon)
('Appartement', 'Aurélie Vidal', 'aurelie.vidal@example.com', 4, 'Rue des Tables Claudiennes', 69004, 'Lyon', 'Référence', 'Succession en cours', '2023-10-10', 5, 4),
('Maison', 'Xavier Lambert', 'xavier.lambert@example.com', 12, 'Montée de la Boucle', 69004, 'Lyon', 'Petites annonces', 'A vendre', '2023-10-11', 5, 4),
('Terrain', 'Stella Moreau', 'stella.moreau@example.com', 20, 'Rue du Mail', 69004, 'Lyon', 'Contact direct', 'Potentiellement à vendre', '2023-10-12', 5, 4),
('Appartement', 'Antoine Robin', 'antoine.robin@example.com', 35, 'Rue Dumont d''Urville', 69004, 'Lyon', 'Petites annonces', 'A vendre', '2023-10-13', 5, 4),
('Maison', 'Louise Lemoine', 'louise.lemoine@example.com', 50, 'Place Bellevue', 69004, 'Lyon', 'Référence', 'Succession en cours', '2023-10-14', 5, 4),

-- Collaborateur 6 (Le Panier, Marseille)
('Maison', 'Théo Faure', 'theo.faure@example.com', 3, 'Montée des Accoules', 13002, 'Marseille', 'Référence', 'Potentiellement à vendre', '2023-10-15', 6, 5),
('Appartement', 'Marie Brun', 'marie.brun@example.com', 7, 'Rue du Panier', 13002, 'Marseille', 'Petites annonces', 'A vendre', '2023-10-16', 6, 5),
('Terrain', 'Julien Barbier', 'julien.barbier@example.com', 14, 'Rue de la République', 13002, 'Marseille', 'Contact direct', 'Succession en cours', '2023-10-17', 6, 5),
('Appartement', 'Sophie Garnier', 'sophie.garnier@example.com', 25, 'Place de Lenche', 13002, 'Marseille', 'Référence', 'Potentiellement à vendre', '2023-10-18', 6, 5),
('Maison', 'Thomas Mercier', 'thomas.mercier@example.com', 36, 'Rue Sainte-Françoise',    13002, 'Marseille', 'Petites annonces', 'A vendre', '2023-10-19', 6, 5);


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------ TABLE ACTION-------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------- Action info pour Collaborator 2-------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-- Pour l'appartement de Stéphane Durand
INSERT INTO "action" 
("description", "date", "information_id")
VALUES
('Contacter Stéphane Durand pour une visite', '2023-09-26', 1),
('Vérifier la disponibilité des notaires pour la signature', '2023-09-27', 1),
('Envoyer les photos de l''appartement au client potentiel', '2023-09-28', 1),
('Rassembler les documents nécessaires pour la vente', '2023-09-29', 1),
('Organiser une réunion avec le client pour la proposition financière', '2023-09-30', 1),

-- Pour la maison de Christine Legrand
('Contacter Christine pour discuter des détails', '2023-09-27', 2),
('Évaluer la maison pour estimer le prix de vente', '2023-09-28', 2),
('Rechercher des acheteurs potentiels', '2023-09-29', 2),
('Planifier une réunion avec Christine pour parler des offres', '2023-09-30', 2),
('Vérifier la situation légale de la maison', '2023-10-01', 2),

-- Pour l'appartement de Yves Rocher
('Contacter Yves Rocher pour comprendre la situation de la succession', '2023-09-28', 3),
('Rencontrer le notaire pour discuter des détails légaux', '2023-09-29', 3),
('Évaluer l''appartement pour estimer le prix de vente post-succession', '2023-09-30', 3),
('Rechercher des clients intéressés par un investissement immobilier', '2023-10-01', 3),
('Prévoir une visite de l''appartement pour les clients', '2023-10-02', 3),

-- Pour le terrain de Mathieu Fontaine
('Contacter Mathieu Fontaine pour avoir plus de détails sur le terrain', '2023-09-29', 4),
('Visiter le terrain pour estimer sa valeur', '2023-09-30', 4),
('Étudier les plans urbains pour voir les possibilités de construction', '2023-10-01', 4),
('Contacter des promoteurs immobiliers pour les informer du terrain à vendre', '2023-10-02', 4),
('Prévoir une rencontre avec Mathieu pour discuter des offres reçues', '2023-10-03', 4),

-- Pour la maison de Claire Dupuis
('Contacter Claire Dupuis pour discuter de la vente potentielle', '2023-09-30', 5),
('Planifier une visite de la maison pour estimer sa valeur', '2023-10-01', 5),
('Rechercher des familles intéressées par un achat dans le Quartier Latin', '2023-10-02', 5),
('Recueillir des feedbacks après les visites', '2023-10-03', 5),
('Organiser une négociation entre Claire et l''acheteur potentiel', '2023-10-04', 5);

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------- Action info pour Collaborator 3-------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-- Pour l'appartement de Philippe Martin
INSERT INTO "action" 
("description", "date", "information_id")
VALUES
('Contacter Philippe Martin pour comprendre la situation de la succession', '2023-10-01', 6),
('Rencontrer le notaire en charge de la succession', '2023-10-02', 6),
('Évaluer l''appartement pour estimer le prix de vente post-succession', '2023-10-03', 6),
('Prévoir une visite de l''appartement pour les clients potentiels', '2023-10-04', 6),
('Consulter des clients précédents pour des références', '2023-10-05', 6),

-- Pour la maison de Caroline Petit
('Contacter Caroline Petit pour une visite', '2023-10-02', 7),
('Vérifier la disponibilité des notaires pour la signature', '2023-10-03', 7),
('Rassembler les documents nécessaires pour la vente', '2023-10-04', 7),
('Rechercher des acheteurs potentiels pour une maison à Montmartre', '2023-10-05', 7),
('Organiser une réunion avec Caroline pour discuter de l''offre', '2023-10-06', 7),

-- Pour le terrain de Pierre Bernard
('Contacter Pierre Bernard pour discuter des détails', '2023-10-03', 8),
('Visiter le terrain pour estimer sa valeur', '2023-10-04', 8),
('Étudier les plans urbains pour connaître les possibilités de construction', '2023-10-05', 8),
('Rechercher des promoteurs intéressés par un terrain à Montmartre', '2023-10-06', 8),
('Prévoir une rencontre avec Pierre pour discuter des offres reçues', '2023-10-07', 8),

-- Pour l'appartement d'Émilie Dubois
('Contacter Émilie Dubois pour une visite', '2023-10-04', 9),
('Envoyer les photos de l''appartement à des clients potentiels', '2023-10-05', 9),
('Rassembler les documents nécessaires pour la vente', '2023-10-06', 9),
('Organiser une réunion avec Émilie pour discuter de l''offre', '2023-10-07', 9),
('Promouvoir l''appartement sur des sites d''annonces immobilières', '2023-10-08', 9),

-- Pour la maison de Lucas Durand
('Contacter Lucas Durand pour comprendre la situation de la succession', '2023-10-05', 10),
('Rencontrer le notaire pour discuter des détails légaux', '2023-10-06', 10),
('Évaluer la maison pour estimer le prix de vente post-succession', '2023-10-07', 10),
('Planifier une visite pour les acheteurs potentiels', '2023-10-08', 10),
('Rechercher des clients intéressés par un investissement immobilier', '2023-10-09', 10);

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------- Action info pour Collaborator 4-------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-- Terrain de Benoit Dupont
INSERT INTO "action" 
("description", "date", "information_id")
VALUES
('Prendre contact avec Benoit Dupont pour convenir d’une visite du terrain.', '2023-10-06', 11),
('Vérifier la conformité du terrain pour la construction.', '2023-10-07', 11),
('Évaluer le marché pour déterminer le prix de vente du terrain.', '2023-10-08', 11),
('Rechercher d''éventuels investisseurs ou promoteurs intéressés.', '2023-10-09', 11),
('Organiser une réunion avec la mairie pour discuter du zonage.', '2023-10-10', 11);

-- Appartement de Camille Rivière
INSERT INTO "action" 
("description", "date", "information_id")
VALUES
('Programmer une inspection de l’appartement de Camille.', '2023-10-07', 12),
('Demander à Camille si elle est ouverte à la négociation sur le prix.', '2023-10-08', 12),
('Rechercher des comparables pour évaluer le prix de l’appartement.', '2023-10-09', 12),
('Mettre l’appartement en avant sur le site web de l''agence.', '2023-10-10', 12),
('Prévoir une journée portes ouvertes pour l’appartement.', '2023-10-11', 12);

-- Maison de Éric Blanc
INSERT INTO "action" 
("description", "date", "information_id")
VALUES
('Contacter Éric pour discuter de l’état actuel de la succession.', '2023-10-08', 13),
('Vérifier les documents légaux concernant la maison.', '2023-10-09', 13),
('Organiser une visite pour évaluer la maison.', '2023-10-10', 13),
('Consulter un avocat pour clarifier la situation successorale.', '2023-10-11', 13),
('Prévoir un nettoyage professionnel de la maison.', '2023-10-12', 13);

-- Appartement de Chloé Leroux
INSERT INTO "action" 
("description", "date", "information_id")
VALUES
('Contacter Chloé Leroux pour obtenir plus de détails sur l’appartement.', '2023-10-09', 14),
('Organiser une session photo professionnelle de l’appartement.', '2023-10-10', 14),
('Lancer une campagne publicitaire pour l''appartement.', '2023-10-11', 14),
('Comparer l’appartement avec des biens similaires dans le quartier.', '2023-10-12', 14),
('Mettre en place un panneau "À vendre" devant l’immeuble.', '2023-10-13', 14);

-- Maison de Rémi Chevalier
INSERT INTO "action" 
("description", "date", "information_id")
VALUES
('Prendre rendez-vous avec Rémi pour visiter la maison.', '2023-10-10', 15),
('Évaluer les éventuels travaux à réaliser avant la vente.', '2023-10-11', 15),
('Rechercher les anciens propriétaires pour obtenir l’historique de la maison.', '2023-10-12', 15),
('Consulter un expert en évaluation immobilière.', '2023-10-13', 15),
('Promouvoir la maison lors d''un salon immobilier.', '2023-10-14', 15);

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------- Action info pour Collaborator 5-------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- Appartement de Aurélie Vidal
INSERT INTO "action" 
("description", "date", "information_id")
VALUES
('Contactez Aurélie Vidal pour discuter de l''état de la succession.', '2023-10-11', 16),
('Organiser une visite pour évaluer l''appartement.', '2023-10-12', 16),
('Consulter un avocat pour clarifier la situation successorale.', '2023-10-13', 16),
('Demander une estimation des frais de notaire.', '2023-10-14', 16),
('Organiser une session photo pour la mise en ligne de l''appartement.', '2023-10-15', 16);

-- Maison de Xavier Lambert
INSERT INTO "action" 
("description", "date", "information_id")
VALUES
('Prendre contact avec Xavier Lambert pour une visite de la maison.', '2023-10-12', 17),
('Évaluer les éventuels travaux nécessaires avant la vente.', '2023-10-13', 17),
('Promouvoir la maison sur les plateformes de petites annonces.', '2023-10-14', 17),
('Comparer le prix de la maison avec d''autres biens similaires à Croix-Rousse.', '2023-10-15', 17),
('Organiser une journée portes ouvertes pour présenter la maison.', '2023-10-16', 17);

-- Terrain de Stella Moreau
INSERT INTO "action" 
("description", "date", "information_id")
VALUES
('Contactez Stella Moreau pour discuter du potentiel de vente du terrain.', '2023-10-13', 18),
('Visiter le terrain pour vérifier sa conformité pour la construction.', '2023-10-14', 18),
('Évaluer le marché local pour déterminer le prix du terrain.', '2023-10-15', 18),
('Vérifier la réglementation locale concernant les terrains à Lyon.', '2023-10-16', 18),
('Rechercher des promoteurs immobiliers intéressés.', '2023-10-17', 18);

-- Appartement de Antoine Robin
INSERT INTO "action" 
("description", "date", "information_id")
VALUES
('Planifier une inspection de l’appartement d’Antoine Robin.', '2023-10-14', 19),
('Organiser une session photo pour l’appartement.', '2023-10-15', 19),
('Promouvoir l''appartement sur les plateformes de vente en ligne.', '2023-10-16', 19),
('Comparer l''appartement avec d''autres propriétés similaires dans la région.', '2023-10-17', 19),
('Consulter un expert en évaluation immobilière pour définir le bon prix.', '2023-10-18', 19);

-- Maison de Louise Lemoine
INSERT INTO "action" 
("description", "date", "information_id")
VALUES
('Contactez Louise Lemoine pour en savoir plus sur la situation successorale.', '2023-10-15', 20),
('Organiser une visite de la maison pour évaluation.', '2023-10-16', 20),
('Obtenir les documents légaux concernant la maison.', '2023-10-17', 20),
('Consulter un notaire pour obtenir des conseils sur la succession.', '2023-10-18', 20),
('Prévoir un nettoyage professionnel de la maison avant mise en vente.', '2023-10-19', 20);


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------- Action info pour Collaborator 6-------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-- Maison de Théo Faure
INSERT INTO "action" 
("description", "date", "information_id")
VALUES
('Contactez Théo Faure pour discuter du potentiel de vente de la maison.', '2023-10-16', 21),
('Planifier une visite de la maison.', '2023-10-17', 21),
('Consulter un agent immobilier pour obtenir une évaluation.', '2023-10-18', 21),
('Comparer la maison avec d''autres propriétés similaires dans Le Panier.', '2023-10-19', 21),
('Promouvoir la maison sur les plateformes locales.', '2023-10-20', 21);

-- Appartement de Marie Brun
INSERT INTO "action" 
("description", "date", "information_id")
VALUES
('Contacter Marie Brun pour organiser une visite.', '2023-10-17', 22),
('Photographier l''appartement pour la promotion.', '2023-10-18', 22),
('Lister l''appartement sur les sites de vente majeurs.', '2023-10-19', 22),
('Organiser une journée portes ouvertes pour les potentiels acheteurs.', '2023-10-20', 22),
('Vérifier les documents légaux de l''appartement.', '2023-10-21', 22);

-- Terrain de Julien Barbier
INSERT INTO "action" 
("description", "date", "information_id")
VALUES
('Prendre contact avec Julien Barbier concernant le terrain en succession.', '2023-10-18', 23),
('Visiter le terrain pour évaluer son potentiel.', '2023-10-19', 23),
('Vérifier les réglementations locales concernant les constructions.', '2023-10-20', 23),
('Consulter un expert en terrains pour évaluation.', '2023-10-21', 23),
('Promouvoir le terrain auprès des développeurs immobiliers.', '2023-10-22', 23);

-- Appartement de Sophie Garnier
INSERT INTO "action" 
("description", "date", "information_id")
VALUES
('Contacter Sophie Garnier pour discuter de la vente potentielle.', '2023-10-19', 24),
('Organiser une évaluation de l''appartement.', '2023-10-20', 24),
('Étudier le marché immobilier local pour définir le bon prix.', '2023-10-21', 24),
('Promouvoir l''appartement sur les plateformes en ligne.', '2023-10-22', 24),
('Organiser une rencontre avec un notaire pour la documentation.', '2023-10-23', 24);

-- Maison de Thomas Mercier
INSERT INTO "action" 
("description", "date", "information_id")
VALUES
('Planifier une visite de la maison de Thomas Mercier.', '2023-10-20', 25),
('Prendre des photos professionnelles pour la promotion.', '2023-10-21', 25),
('Comparer le prix avec d''autres maisons similaires dans la région.', '2023-10-22', 25),
('Organiser une journée portes ouvertes.', '2023-10-23', 25),
('Consulter un agent immobilier pour des conseils de mise en marché.', '2023-10-24', 25);


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------- TABLE TELEPHONE-------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

INSERT INTO "phone" 
("phone_number", "information_id")
VALUES
-- Pour le collaborateur 2
('+33123456781', 1),
('+33123456782', 2),
('+33123456783', 3),
('+33123456784', 4),
('+33123456785', 5),

-- Pour le collaborateur 3
('+33123456786', 6),
('+33123456787', 7),
('+33123456788', 8),
('+33123456789', 9),
('+33123456790', 10),

-- Pour le collaborateur 4
('+33123456791', 11),
('+33123456792', 12),
('+33123456793', 13),
('+33123456794', 14),
('+33123456795', 15),

-- Pour le collaborateur 5
('+33123456796', 16),
('+33123456797', 17),
('+33123456798', 18),
('+33123456799', 19),
('+33123456800', 20),

-- Pour le collaborateur 6
('+33123456801', 21),
('+33123456802', 22),
('+33123456803', 23),
('+33123456804', 24),
('+33123456805', 25),

-- Numéros supplémentaires
('+33123456806', 1),
('+33123456807', 6),
('+33123456808', 13),
('+33123456809', 15),
('+33123456810', 10);

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------


COMMIT;