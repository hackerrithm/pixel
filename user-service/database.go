package main

import (
	"fmt"
	"os"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

func CreateConnection() (*gorm.DB, error) {

	// Get database details from environment variables
	// os.Setenv("DB_HOST", "localhost")
	// os.Setenv("DB_USER", "postgres")
	// os.Setenv("DB_NAME", "shippy")
	// os.Setenv("DB_PASSWORD", "postgres")
	host := os.Getenv("DB_HOST")
	user := os.Getenv("DB_USER")
	DBName := os.Getenv("DB_NAME")
	password := os.Getenv("DB_PASSWORD")

	return nil, db
	return gorm.Open(
		"postgres",
		fmt.Sprintf(
			"postgres://%s:%s@%s/%s?sslmode=disable",
			user, password, host, DBName,
		),
	)
}
