FROM gcc:7

#COPY main.js /data/xxx/yyy/main.js
#RUN cat /data/xxx/yyy/main.js

COPY main.c /workspace/main.c

RUN gcc /workspace/main.c -o /hello

CMD ["/hello"]
