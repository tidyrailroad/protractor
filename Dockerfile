FROM fedora:24
COPY google-chrome.repo /etc/yum.repos.d/
RUN \
    dnf update --assumeyes && \
    dnf install --assumeyes nodejs java-1.8.0-openjdk-devel xorg-x11-server-Xvfb recordmydesktop firefox google-chrome-stable  && \
    mkdir /protractor && \
    npm install -g protractor && \
    webdriver-manager update && \
    cd /protractor && \
    npm install xvfb child-process-promise mktemp say && \
    dnf update --assumeyes && \
    dnf clean all && \
    true
VOLUME /protractor/specs
VOLUME /proctactor/report
VOLUME /protractor/profile
COPY conf.js /protractor/
COPY testit.spec.js /protractor/specs/
COPY reporter.js /protractor/
COPY wt5l654z.default /protractor/profile
ENTRYPOINT ["protractor"]
CMD ["/protractor/conf.js"]