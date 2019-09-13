#!/bin/bash

aws s3 rm s3://marvinisaac-com --recursive
aws s3 sync dist s3://marvinisaac-com