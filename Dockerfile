FROM fedora:24
COPY conf.js /protractor/
COPY testit.spec.js /protractor/specs/
COPY script.sh /usr/local/sbin/
COPY google-chrome.repo /etc/yum.repos.d/
RUN \
    dnf update --assumeyes && \
    dnf install --assumeyes nodejs java-1.8.0-openjdk-devel xvfb recordmydesktop firefox google-chrome-stable && \
    npm install -g protractor && \
    webdriver-manager update && \
    cd /protractor && \
    npm install xvfb && \
    dnf update --assumeyes && \
    dnf clean all && \
    true
ENTRYPOINT ["/usr/local/sbin/script.sh"]
CMD ["/protractor/conf.js"]