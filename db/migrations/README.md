# Create database patches (migration scritps)
## Writing migraion scripts

Any changes to database schema and/or addition of new "built-in" data that is required for the application work properly must be written as a SQL migration script.

### Migrations file naming convention
Each migration script file must match the following pattern: 
```sh
V[0-9].[0-9].[0-9].__*.(pg)?sql
```

### Script content 
Each script should consist of a single trasaction that handles all database changes that need to be introduced and begin with a statement inserting the script name into `migrations` table, like so:

```sql
BEGIN;

INSERT INTO migrations (script) VALUES ('VX.Y.Z__migration_script_title'); -- specify script filaename without extension

-- all db changes go here
-- ...
-- ...
-- ...

COMMIT; -- don't forget "commit" to seal a transaction
```
Why exacly this pattern? On database seed in dev, or on deployment to staging and production environments, all migration scripts will be run one after the other (see below). Those scripts that already exist in the table, will fail the transaction during execution of the first statement and the whole thing will be rolled back before continuing to the next one in line. New scripts will add a new row into `migrations` table plus all the new changes to the database schema.


## Running migration scripts

Running migrations requires a [`.pgpass`](https://www.postgresql.org/docs/current/static/libpq-pgpass.html) file placed inside the migraions directory (note: not in `~/.pgpass`). Run all migrations using the following command from the project root:

```sh
ENVIRONMENT=my-env npm run migrations
```
Another option is to run the script directly from `backend/sql/migrations`:
```sh
ENVIRONMENT=my-env bash run_migrations.sh
```


Replace `my-env` with the deployment environment name.

### Environment
Set `ENVIRONMENT` variable to be one of the following:
- `dev-local`: run migrations on local machine
