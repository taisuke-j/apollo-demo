// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package model

import (
	"time"
)

type Article struct {
	ID        int       `json:"id"`
	Title     string    `json:"title"`
	Body      string    `json:"body"`
	AuthorID  int       `json:"authorID"`
	Author    *Author   `json:"author"`
	CreatedAt time.Time `json:"createdAt"`
	UpdatedAt time.Time `json:"updatedAt"`
}

type Author struct {
	ID        int       `json:"id"`
	Name      string    `json:"name"`
	CreatedAt time.Time `json:"createdAt"`
	UpdatedAt time.Time `json:"updatedAt"`
}

type EditArticle struct {
	ID    int    `json:"id"`
	Title string `json:"title"`
	Body  string `json:"body"`
}

type EditAuthor struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
}

type FetchArticle struct {
	ID int `json:"id"`
}

type FetchAuthor struct {
	ID int `json:"id"`
}

type NewArticle struct {
	Title    string `json:"title"`
	Body     string `json:"body"`
	AuthorID int    `json:"authorID"`
}

type NewAuthor struct {
	Name string `json:"name"`
}
