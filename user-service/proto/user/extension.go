package go_micro_srv_user

import (
	"fmt"

	"github.com/jinzhu/gorm"
	"github.com/satori/go.uuid"
)

func (model *User) BeforeCreate(scope *gorm.Scope) error {
	u1, err := uuid.NewV4()
	if err != nil {
		fmt.Printf("Something went wrong: %s", err)
		return err
	}
	return scope.SetColumn("Id", u1.String())
}
