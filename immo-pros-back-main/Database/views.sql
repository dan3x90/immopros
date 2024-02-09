BEGIN;

CREATE OR REPLACE VIEW number_informations_by_collaborator AS
SELECT
    collaborator.firstname,
    collaborator.lastname,
    COUNT(information.id) AS nb_infos
FROM
    collaborator
LEFT JOIN
    information ON collaborator.id = information.collaborator_id
GROUP BY
    collaborator.firstname,
    collaborator.lastname
ORDER BY
    nb_biens DESC;

/* ###########################################################################################" */


CREATE OR REPLACE VIEW number_informations_by_sector AS
SELECT sector.label, sector.color_code,
    COUNT(information.id) AS nb_infos
FROM
    sector
LEFT JOIN
    information ON sector.id = information.sector_id
GROUP BY sector.label,
sector.color_code
ORDER BY nb_infos DESC;

/* ###########################################################################################" */


COMMIT;