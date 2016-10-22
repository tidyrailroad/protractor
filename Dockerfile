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
    apk --update add curl ca-certificates tar && \
    curl -Ls https://circle-artifacts.com/gh/andyshinn/alpine-pkg-glibc/6/artifacts/0/home/ubuntu/alpine-pkg-glibc/packages/x86_64/glibc-2.21-r2.apk > /tmp/glibc-2.21-r2.apk && \
    apk add --allow-untrusted /tmp/glibc-2.21-r2.apk && \
    true
ENTRYPOINT ["/usr/local/sbin/script.sh"]
CMD ["/protractor/conf.js"]