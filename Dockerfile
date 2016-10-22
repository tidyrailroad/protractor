FROM alpine:3.4
COPY conf.js /protractor/
COPY testit.spec.js /protractor/specs/
COPY script.sh /usr/local/sbin/
RUN \
    apk update && \
    apk upgrade && \
    apk add nodejs && \
    npm install -g protractor && \
    webdriver-manager update && \
    apk add xvfb && \
    cd /protractor && \
    npm install xvfb && \
    apk add recordmydesktop && \
    apk add firefox-esr && \
    true
ENTRYPOINT ["/usr/local/sbin/script.sh"]
CMD ["/protractor/conf.js"]