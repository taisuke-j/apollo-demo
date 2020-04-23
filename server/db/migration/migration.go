package main

import (
	"fmt"

	connection "github.com/taisuke-j/apollo-demo/db"
	"github.com/taisuke-j/apollo-demo/graph/model"
)

func main() {
	connection.Init()
	db := connection.GetInstance()
	defer connection.Close()

	db.AutoMigrate(&model.Author{}, &model.Article{})

	fmt.Printf("\x1b[32m%s\x1b[0m", "\r\n✨Migration has run.\r\n")
}
