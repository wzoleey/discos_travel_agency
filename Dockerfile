FROM nginx:latest 

COPY ./frontend/build /usr/share/nginx/html

EXPOSE 80
