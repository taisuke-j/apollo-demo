package db

import (
	"fmt"
	"os"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres" // Used in gorm
	"github.com/taisuke-j/apollo-demo/graph/model"
)

// Init creates connection to the postgres server and runs migration
func Init() *gorm.DB {
	host := os.Getenv("DB_HOST")
	port := os.Getenv("DB_PORT")
	dbname := os.Getenv("DB_NAME")
	user := os.Getenv("DB_USERNAME")
	password := os.Getenv("DB_PASSWORD")

	db, err := gorm.Open("postgres", fmt.Sprintf(
		"host=%s port=%s user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbname,
	))

	if err != nil {
		panic(err.Error())
	}

	db.AutoMigrate(&model.Author{}, &model.Article{})

	db.LogMode(true)

	return db
}
