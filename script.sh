#! /usr/bin/env bash

if [ -f public-dir.zip ]; then
    rm -rf public-dir.zip
fi
zip -r public-dir.zip ./public