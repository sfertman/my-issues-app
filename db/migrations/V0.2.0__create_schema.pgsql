-- create db users
--   admin
--   

BEGIN;


INSERT INTO migrations (script) VALUES ('V0.2.0__create_schema');


-- CREATE ROLE ADMIN or something here 


CREATE IF NOT EXISTS TABLE public."issue" (
  _id uuid PRIMARY KEY
  , title TEXT
  , desctiption TEXT
  , created_by uuid -- user id?
  , is_open BOOLEAN
  , created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
  , updated_at TIMESTAMP WITH TIME ZONE

);

-- crd
CREATE IF NOT EXIST TABLE public."tag" (
  _id uuid PRIMARY KEY
  , label TEXT
  , description TEXT
  , created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()  
);

-- crd
CREATE IF NOT EXISTS TABLE public."issue_tag" (
  _id uuid PRIMARY KEY
  , id_issue uuid REFERENCES issue._id
  , id_tag uuid REFERENCES tag._id
);

-- cru
CREATE IF NOT EXISTS TABLE public."comment" (
  _id uuid PRIMARY KEY
  , 
)
/* 
- actions that can be taken on an issue 
    - create 
    - comment 
    - attach_tag 
    - detach_tag
    - close
    - open
*/
-- crud
CREATE IF NOT EXISTS TABLE action ( 
  _id uuid PRIMARY KEY
  , name TEXT
  , description TEXT
  , condition TEXT -- (not sure if I want to go that deep for this one) sql where clause: e.g.: to open an issue it must be closed: issue.is_open = false
);



COMMIT;