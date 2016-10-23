#!/bin/sh

webdriver-manager start &

protractor ${@}

