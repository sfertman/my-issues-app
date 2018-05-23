FROM postgres:alpine
WORKDIR /my_issues_db
COPY . .
RUN . init_db.sh
# point to wherever postgres stores data
VOLUME [ "/data" ] 