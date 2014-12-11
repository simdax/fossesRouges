#!/bin/sh

nanoc
cd ../site
git add *
git commit  -m 'rien'
git ftp push -u simoncornaz -p canigou ftp://ftpperso.free.fr
