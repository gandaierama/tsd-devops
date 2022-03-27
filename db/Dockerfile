FROM mysql:5.7
RUN chown -R mysql:root /var/lib/mysql/


COPY mysqld.cnf /etc/mysql/mysql.conf.d/mysqld.conf

ARG MYSQL_DATABASE
ARG MYSQL_USER
ARG MYSQL_PASSWORD
ARG MYSQL_ROOT_PASSWORD

ENV MYSQL_DATABASE=$MYSQL_DATABASE
ENV MYSQL_USER=$MYSQL_USER
ENV MYSQL_PASSWORD=$MYSQL_PASSWORD
ENV MYSQL_ROOT_PASSWORD=$MYSQL_ROOT_PASSWORD

ADD data.sql /etc/mysql/data.sql
RUN sed -i 's/MYSQL_DATABASE/'$MYSQL_DATABASE'/g' /etc/mysql/data.sql
RUN cp /etc/mysql/data.sql /docker-entrypoint-initdb.d


ADD data_email.sql /etc/mysql/data_email.sql
RUN sed -i 's/MYSQL_DATABASE_EMAIL/'$MYSQL_DATABASE_EMAIL'/g' /etc/mysql/data_email.sql
RUN cp /etc/mysql/data_email.sql /docker-entrypoint-initdb.d


ADD data.sql /etc/mysql/data_onepush.sql
RUN sed -i 's/MYSQL_DATABASE_ONEPUSH/'$MYSQL_DATABASE_ONEPUSH'/g' /etc/mysql/data_onepush.sql
RUN cp /etc/mysql/data_onepush.sql /docker-entrypoint-initdb.d



EXPOSE 3306