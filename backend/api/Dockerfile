FROM adoptopenjdk/openjdk11-openj9:alpine-slim
COPY build/libs/beeco-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]