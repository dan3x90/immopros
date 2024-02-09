BEGIN;

/* ###########################################################################################" */

CREATE OR REPLACE FUNCTION getCollaboratorInfoBetweenDates(start_date DATE, end_date DATE)
RETURNS TABLE (firstname TEXT, lastname TEXT, nb_infos BIGINT) AS $$
BEGIN
    RETURN QUERY
    SELECT
        collaborator.firstname,
        collaborator.lastname,
        COUNT(information.id) AS nb_infos
    FROM
        collaborator
    LEFT JOIN
        information ON collaborator.id = information.collaborator_id
    WHERE role_id = 2
    AND information.date > start_date
    AND information.date < end_date
    GROUP BY
        collaborator.firstname,
        collaborator.lastname
    ORDER BY
        nb_infos DESC;
END;
$$ LANGUAGE plpgsql;

/* ###########################################################################################" */

COMMIT;