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

ADD data_onepush.sql /etc/mysql/data_onepush.sql
RUN sed -i 's/MYSQL_DATABASE_ONEPUSH/'$MYSQL_DATABASE_ONEPUSH'/g' /etc/mysql/data_onepush.sql
RUN cp /etc/mysql/data_onepush.sql /docker-entrypoint-initdb.d

ADD data_sms.sql /etc/mysql/data_sms.sql
RUN sed -i 's/MYSQL_DATABASE_SMS/'$MYSQL_DATABASE_SMS'/g' /etc/mysql/data_sms.sql
RUN cp /etc/mysql/data_sms.sql /docker-entrypoint-initdb.d


ADD data_facebook.sql /etc/mysql/data_facebook.sql
RUN sed -i 's/MYSQL_DATABASE_FACEBOOK/'$MYSQL_DATABASE_FACEBOOK'/g' /etc/mysql/data_facebook.sql
RUN cp /etc/mysql/data_facebook.sql /docker-entrypoint-initdb.d

ADD data_instagram.sql /etc/mysql/data_instagram.sql
RUN sed -i 's/MYSQL_DATABASE_INSTRAGRAM/'$MYSQL_DATABASE_INSTAGRAM'/g' /etc/mysql/data_instagram.sql
RUN cp /etc/mysql/data_instagram.sql /docker-entrypoint-initdb.d

ADD data_google.sql /etc/mysql/data_google.sql
RUN sed -i 's/MYSQL_DATABASE_GOOGLE/'$MYSQL_DATABASE_GOOGLE'/g' /etc/mysql/data_google.sql
RUN cp /etc/mysql/data_google.sql /docker-entrypoint-initdb.d

ADD data_tiktok.sql /etc/mysql/data_tiktok.sql
RUN sed -i 's/MYSQL_DATABASE_TIKTOK/'$MYSQL_DATABASE_TIKTOK'/g' /etc/mysql/data_tiktok.sql
RUN cp /etc/mysql/data_tiktok.sql /docker-entrypoint-initdb.d


ADD data_cielo.sql /etc/mysql/data_cielo.sql
RUN sed -i 's/MYSQL_DATABASE_CIELO/'$MYSQL_DATABASE_CIELO'/g' /etc/mysql/data_cielo.sql
RUN cp /etc/mysql/data_cielo.sql /docker-entrypoint-initdb.d

ADD data_transfeera.sql /etc/mysql/data_transfeera.sql
RUN sed -i 's/MYSQL_DATABASE_TRANSFEERA/'$MYSQL_DATABASE_TRANSFEERA'/g' /etc/mysql/data_transfeera.sql
RUN cp /etc/mysql/data_transfeera.sql /docker-entrypoint-initdb.d



EXPOSE 3306