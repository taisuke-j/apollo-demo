# Apollo Client 3 Demo

Example usage of Apollo Client 3 (with Golang GraphQL server)

## Dependencies

- [Apollo Client 3](https://www.apollographql.com/client/)
- [gqlgen](https://gqlgen.com/)
- [gorm](https://gorm.io/)

## Getting Started

### Server
```
docker-compose build                                         // Build the image
docker-compose run --rm api go run db/migration/migration.go // Migration
docker-compose run --rm api go run db/seed/seed.go           // Seed
docker-compose up                                            // Run the container
```

### Client
```
```