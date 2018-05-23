#!/bin/bash

if [ -z "$ENVIRONMENT" ]; then
  echo "Environment not specified! Please set ENVIRONMENT.";
  exit 1;
fi

DB_USERNAME='my_issues_admin'

case "$ENVIRONMENT" in
  "dev-local")
    DB_HOSTNAME='my_issues_db'
    ;;
  *)
    echo "Unknown ENVIRONMENT=$ENVIRONMENT; cannot continue..."
    exit 1
    ;;
esac

WORKDIR=$( cd $( dirname $BASH_SOURCE[0] ) && pwd )

for FILENAME in $WORKDIR/V[0-9].[0-9].[0-9]__*.(pg)?sql; do
  [ -e "$FILENAME" ] || continue;
  PGPASSFILE=$WORKDIR/.pgpass psql \
    --host=$DB_HOSTNAME \
    --file=$FILENAME \
    --no-psqlrc \
    --no-password \
    --echo-errors \
    dfx-db \
    $DB_USERNAME
done