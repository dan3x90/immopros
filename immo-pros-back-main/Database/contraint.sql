-- CONTRAINTS Table collaborator
ALTER TABLE "collaborator"
ADD CONSTRAINT email_check 
CHECK (email ~* '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$');

ALTER TABLE "collaborator"
ADD CONSTRAINT phone_check 
CHECK (phone ~* '^\+[0-9]{2}[0-9]{9}$');
--[0-9]{10}$ pour num standard

-- CONTRAINTS Table sector :
ALTER TABLE "sector"
ADD CONSTRAINT color_check 
CHECK (color_code ~* '^#([0-9A-Fa-f]{6})$');

ALTER TABLE "sector"
ADD CONSTRAINT code_zip_check 
CHECK (code_zip >= 01000 AND postal_code <= 99999);
-- Regex ==> ^[0-9]{5}$

-- CONTRAINTS Table phone :

ALTER TABLE "phone" 
ADD CONSTRAINT phone_check 
CHECK (phone_number ~* '^\+[0-9]{2}[0-9]{9}$');

-- CONTRAINTS Table information :

ALTER TABLE "information"
ADD CONSTRAINT check_type
CHECK (type IN ('appartement', 'maison', 'terrain'));

ALTER TABLE "information"
ADD CONSTRAINT owner_name_check
CHECK (owner_name ~* "/^[a-zA-Z\s\-'àâäéèêëîïôöùûüçÀÂÄÉÈÊËÎÏÔÖÙÛÜÇ]+$");

ALTER TABLE "information"
ADD CONSTRAINT owner_email_check 
CHECK (owner_email ~* '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$');

ALTER TABLE "information"
ADD CONSTRAINT address_number_check
CHECK (address_number >= 0 AND address_number <= 9999);

ALTER TABLE "information"
ADD CONSTRAINT address_street_check
CHECK (address_street ~* "/^(avenue|rue|boulevard|chemin|allée|place|impasse|route|voie) [a-zA-Z\s\-'àâäéèêëîïôöùûüçÀÂÄÉÈÊËÎÏÔÖÙÛÜÇ]+$");

ALTER TABLE "information"
ADD CONSTRAINT code_zip_check_info 
CHECK (code_zip >= 01000 AND address_zipcode <= 99999);

ALTER TABLE "information"
ADD CONSTRAINT address_city_check
CHECK (address_city ~* "/^[a-zA-Z\s\-'àâäéèêëîïôöùûüçÀÂÄÉÈÊËÎÏÔÖÙÛÜÇ]+$");

ALTER TABLE "information"
ADD CONSTRAINT address_info_check
CHECK (address_info ~* "/^[a-zA-Z0-9\s\-'àâäéèêëîïôöùûüçÀÂÄÉÈÊËÎÏÔÖÙÛÜÇ]+$");

ALTER TABLE "information"
ADD CONSTRAINT source_check
CHECK (source ~* "/^[a-zA-Z0-9\s\-'àâäéèêëîïôöùûüçÀÂÄÉÈÊËÎÏÔÖÙÛÜÇ]+$");

ALTER TABLE "information"
ADD CONSTRAINT check_category
CHECK (category IN ('à vendre', 'succession en cours', 'potentiellement à vendre'));

ALTER TABLE "information"
ADD CONSTRAINT comment_check
CHECK (comment ~* "/^[a-zA-Z0-9\s\-'àâäéèêëîïôöùûüçÀÂÄÉÈÊËÎÏÔÖÙÛÜÇ]+$");

ALTER TABLE "information"
ADD CONSTRAINT date_check
CHECK (date ~* '^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$');
-- YYYY-MM-DD
-- A voir DD-MM-YYYY

-- CONTRAINTS Table action :

ALTER TABLE "action"
ADD CONSTRAINT description_check
CHECK (description ~* "/^[a-zA-Z0-9\s\-'àâäéèêëîïôöùûüçÀÂÄÉÈÊËÎÏÔÖÙÛÜÇ]+$");

ALTER TABLE "action"
ADD CONSTRAINT date_check
CHECK (date ~* '^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$');


-- CONTRAINTS Table action :
ALTER TABLE "action"
ADD CONSTRAINT description_check
CHECK (description ~* "/^[a-zA-Z0-9\s\-'àâäéèêëîïôöùûüçÀÂÄÉÈÊËÎÏÔÖÙÛÜÇ]+$");

ALTER TABLE "action"
ADD CONSTRAINT date_check
CHECK (date ~* '^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$');

-- CONTRAINTS Table notification_date :
ALTER TABLE "notification_date"
ADD CONSTRAINT date_check
CHECK (date ~* '^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$');

-- CONTRAINTS Table role :
ALTER TABLE "role"
ADD CONSTRAINT label_check
CHECK (label IN ('admin', 'negociateur'));

-- CONTRAINTS Table role :
ALTER TABLE "avatar"
ADD CONSTRAINT label_check
CHECK (label ~* "/^[a-zA-Z\s\-'àâäéèêëîïôöùûüçÀÂÄÉÈÊËÎÏÔÖÙÛÜÇ]+$");

ALTER TABLE "avatar"
ADD CONSTRAINT url_check
CHECK (url ~* "/^(https?|ftp):\/\/[^\s\/$.?#].[^\s]*$");