#!/bin/bash
mogrify -resize 1024x1024^ -gravity center -extent 1024x1024 -path static/posts/images static/posts/images/*.jpg