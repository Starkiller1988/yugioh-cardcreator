FROM openjdk:17-jdk-alpine
VOLUME /tmp
ARG JAR_FILE

COPY backend/target/yugioh-cardcreator-backend-0.0.1-SNAPSHOT.jar app.jar

ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom", "-Dspring.profiles.active=docker","-jar","/app.jar"]