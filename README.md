# FullTable

> Online restaurant-reservation app

## Related Projects

1. https://github.com/opentabs/sidebar
1. https://github.com/opentabs/menu
1. https://github.com/opentabs/reviews
1. https://github.com/opentabs/reservation-calendar
1. https://github.com/opentabs/photos-carousel

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```
npm install
npm db.setup
npm server-dev

```
### CRUD Operations

GET - To retrieve all photos/comments (entire document) for specific restaurant
      i.e. new restaurant opens and gets added to database
      path: api/restaurants/:id/photos

POST - To create new photo/comments collection (entire document) for specific restaurant
      path: api/restaurants/:id/photos

POST - To add one new photo/comment for specific restaurant
      path: api/restaurant/:id/photos

PUT - To update comment of photo for specific restaurant
      path: api/restaurant/:id/photos

DELETE - To delete one photo/comment for specific restaurant
      path: api/restaurant/:id/photos

DELETE - To delete entire photo/comments collection (entire document) for specific 
      restaurant
      i.e. restaurant goes out of business and entire record deleted from database 
      path: api/restaurants/:id/photos

