FROM alpine:3.4
COPY conf.js /protractor/
COPY testit.spec.js /protractor/specs/
RUN \
    apk update && \
    apk upgrade && \
    apk add nodejs && \
    npm install -g protractor && \
    apk add xvfb && \
    npm install -g xvfb && \
    apk add recordmydesktop && \
    apk add firefox-esr && \
    true
ENTRYPOINT ["protractor"]
CMD ["/protractor/conf.js"]