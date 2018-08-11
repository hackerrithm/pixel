package auth

import (
	"github.com/jinzhu/gorm"
	uuid "github.com/satori/go.uuid"
)

// BeforeCreate TODO
func (model *User) BeforeCreate(scope *gorm.Scope) error {
	u, err := uuid.NewV4()
	if err != nil {
		return err
	}
	return scope.SetColumn("Id", u.String())
}
