package go_micro_srv_user

import (
	"github.com/google/uuid"
	"github.com/jinzhu/gorm"
)

// BeforeCreate does action before create
func (model *User) BeforeCreate(scope *gorm.Scope) error {
	u1 := uuid.New()
	return scope.SetColumn("Id", u1.String())
}
