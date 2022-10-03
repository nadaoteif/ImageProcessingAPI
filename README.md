# ImageProcessingAPI

## Overview-
This is an API that can be used in two different ways. The first, as a simple placeholder API that allows us to place images into our frontend with the size set via url parameters. The second use case is as a library to serve properly scaled versions of our images to the frontend to reduce page load size. 

## Scripts
- Install Node.js: ```npm install```
- Build: ```npm run build```
- Start after build: ```node ./build/.```
- Lint: ```npm run lint```
- Use prettier: ```npm run prettier```
- Run unit tests: ```npm run test```
- Use jasmine: ```npm run jasmine```
- Start via nodemon: ```npm run start```

## Server port
http://localhost:5000/


## Endpoint to resize images
Hint: http://localhost:5000/api/images

- Run without imagetype parameter to default to `.jpg`
 
Full: http://localhost:5000/images?width=100&height=100&filename=palmtunnel

### Notes: Images are served from `assets/images/full` and stored in `assets/images/thumb`

## Restrictions and instructions
Expected query arguments are:
- width & height : Positive numbers only
- filenames :
  - palmtunnel
  - encenadaport
  - fjord
  - icelandwaterfall
  - santamonica
