// Code generated by protoc-gen-go. DO NOT EDIT.
// source: proto/vessel/vessel.proto

package vessel

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

type Vessel struct {
	Id                   string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Capacity             int32    `protobuf:"varint,2,opt,name=capacity,proto3" json:"capacity,omitempty"`
	MaxWeight            int32    `protobuf:"varint,3,opt,name=max_weight,json=maxWeight,proto3" json:"max_weight,omitempty"`
	Name                 string   `protobuf:"bytes,4,opt,name=name,proto3" json:"name,omitempty"`
	Available            bool     `protobuf:"varint,5,opt,name=available,proto3" json:"available,omitempty"`
	OwnerId              string   `protobuf:"bytes,6,opt,name=owner_id,json=ownerId,proto3" json:"owner_id,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Vessel) Reset()         { *m = Vessel{} }
func (m *Vessel) String() string { return proto.CompactTextString(m) }
func (*Vessel) ProtoMessage()    {}
func (*Vessel) Descriptor() ([]byte, []int) {
	return fileDescriptor_vessel_59b3339503f4b360, []int{0}
}
func (m *Vessel) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Vessel.Unmarshal(m, b)
}
func (m *Vessel) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Vessel.Marshal(b, m, deterministic)
}
func (dst *Vessel) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Vessel.Merge(dst, src)
}
func (m *Vessel) XXX_Size() int {
	return xxx_messageInfo_Vessel.Size(m)
}
func (m *Vessel) XXX_DiscardUnknown() {
	xxx_messageInfo_Vessel.DiscardUnknown(m)
}

var xxx_messageInfo_Vessel proto.InternalMessageInfo

func (m *Vessel) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func (m *Vessel) GetCapacity() int32 {
	if m != nil {
		return m.Capacity
	}
	return 0
}

func (m *Vessel) GetMaxWeight() int32 {
	if m != nil {
		return m.MaxWeight
	}
	return 0
}

func (m *Vessel) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *Vessel) GetAvailable() bool {
	if m != nil {
		return m.Available
	}
	return false
}

func (m *Vessel) GetOwnerId() string {
	if m != nil {
		return m.OwnerId
	}
	return ""
}

type Specification struct {
	Capacity             int32    `protobuf:"varint,1,opt,name=capacity,proto3" json:"capacity,omitempty"`
	MaxWeight            int32    `protobuf:"varint,2,opt,name=max_weight,json=maxWeight,proto3" json:"max_weight,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Specification) Reset()         { *m = Specification{} }
func (m *Specification) String() string { return proto.CompactTextString(m) }
func (*Specification) ProtoMessage()    {}
func (*Specification) Descriptor() ([]byte, []int) {
	return fileDescriptor_vessel_59b3339503f4b360, []int{1}
}
func (m *Specification) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Specification.Unmarshal(m, b)
}
func (m *Specification) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Specification.Marshal(b, m, deterministic)
}
func (dst *Specification) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Specification.Merge(dst, src)
}
func (m *Specification) XXX_Size() int {
	return xxx_messageInfo_Specification.Size(m)
}
func (m *Specification) XXX_DiscardUnknown() {
	xxx_messageInfo_Specification.DiscardUnknown(m)
}

var xxx_messageInfo_Specification proto.InternalMessageInfo

func (m *Specification) GetCapacity() int32 {
	if m != nil {
		return m.Capacity
	}
	return 0
}

func (m *Specification) GetMaxWeight() int32 {
	if m != nil {
		return m.MaxWeight
	}
	return 0
}

type Response struct {
	Vessel               *Vessel   `protobuf:"bytes,1,opt,name=vessel,proto3" json:"vessel,omitempty"`
	Vessels              []*Vessel `protobuf:"bytes,2,rep,name=vessels,proto3" json:"vessels,omitempty"`
	Created              bool      `protobuf:"varint,3,opt,name=created,proto3" json:"created,omitempty"`
	XXX_NoUnkeyedLiteral struct{}  `json:"-"`
	XXX_unrecognized     []byte    `json:"-"`
	XXX_sizecache        int32     `json:"-"`
}

func (m *Response) Reset()         { *m = Response{} }
func (m *Response) String() string { return proto.CompactTextString(m) }
func (*Response) ProtoMessage()    {}
func (*Response) Descriptor() ([]byte, []int) {
	return fileDescriptor_vessel_59b3339503f4b360, []int{2}
}
func (m *Response) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Response.Unmarshal(m, b)
}
func (m *Response) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Response.Marshal(b, m, deterministic)
}
func (dst *Response) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Response.Merge(dst, src)
}
func (m *Response) XXX_Size() int {
	return xxx_messageInfo_Response.Size(m)
}
func (m *Response) XXX_DiscardUnknown() {
	xxx_messageInfo_Response.DiscardUnknown(m)
}

var xxx_messageInfo_Response proto.InternalMessageInfo

func (m *Response) GetVessel() *Vessel {
	if m != nil {
		return m.Vessel
	}
	return nil
}

func (m *Response) GetVessels() []*Vessel {
	if m != nil {
		return m.Vessels
	}
	return nil
}

func (m *Response) GetCreated() bool {
	if m != nil {
		return m.Created
	}
	return false
}

func init() {
	proto.RegisterType((*Vessel)(nil), "vessel.Vessel")
	proto.RegisterType((*Specification)(nil), "vessel.Specification")
	proto.RegisterType((*Response)(nil), "vessel.Response")
}

func init() { proto.RegisterFile("proto/vessel/vessel.proto", fileDescriptor_vessel_59b3339503f4b360) }

var fileDescriptor_vessel_59b3339503f4b360 = []byte{
	// 297 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x09, 0x6e, 0x88, 0x02, 0xff, 0x7c, 0x51, 0xcd, 0x4a, 0xf3, 0x40,
	0x14, 0xfd, 0x92, 0xb6, 0xf9, 0xb9, 0x1f, 0x29, 0x72, 0x41, 0x98, 0x16, 0x05, 0xc9, 0x42, 0xba,
	0x90, 0x0a, 0x75, 0xe7, 0x4e, 0x04, 0x41, 0x97, 0x53, 0xd0, 0x65, 0x99, 0x4e, 0xae, 0x3a, 0x90,
	0x26, 0x21, 0x09, 0xa9, 0x7d, 0x1b, 0x1f, 0xd5, 0xe1, 0x26, 0xa9, 0xb4, 0x14, 0x57, 0x39, 0x3f,
	0x37, 0x87, 0x93, 0x13, 0x98, 0x14, 0x65, 0x5e, 0xe7, 0xb7, 0x0d, 0x55, 0x15, 0xa5, 0xdd, 0x63,
	0xce, 0x1a, 0x7a, 0x2d, 0x8b, 0xbf, 0x1d, 0xf0, 0x5e, 0x19, 0xe2, 0x18, 0x5c, 0x93, 0x08, 0xe7,
	0xca, 0x99, 0x85, 0xd2, 0x22, 0x9c, 0x42, 0xa0, 0x55, 0xa1, 0xb4, 0xa9, 0x77, 0xc2, 0xb5, 0xea,
	0x48, 0xee, 0x39, 0x5e, 0x02, 0x6c, 0xd4, 0xd7, 0x6a, 0x4b, 0xe6, 0xe3, 0xb3, 0x16, 0x03, 0x76,
	0x43, 0xab, 0xbc, 0xb1, 0x80, 0x08, 0xc3, 0x4c, 0x6d, 0x48, 0x0c, 0x39, 0x8c, 0x31, 0x5e, 0x40,
	0xa8, 0x1a, 0x65, 0x52, 0xb5, 0x4e, 0x49, 0x8c, 0xac, 0x11, 0xc8, 0x5f, 0x01, 0x27, 0x10, 0xe4,
	0xdb, 0x8c, 0xca, 0x95, 0xad, 0xe0, 0xf1, 0x5b, 0x3e, 0xf3, 0xe7, 0x24, 0x7e, 0x81, 0x68, 0x59,
	0x90, 0x36, 0xef, 0x46, 0xab, 0xda, 0xe4, 0xd9, 0x41, 0x31, 0xe7, 0xcf, 0x62, 0xee, 0x51, 0xb1,
	0xb8, 0x81, 0x40, 0x52, 0x55, 0xe4, 0x59, 0x45, 0x78, 0x0d, 0xdd, 0x08, 0x1c, 0xf2, 0x7f, 0x31,
	0x9e, 0x77, 0x0b, 0xb5, 0x7b, 0xc8, 0xce, 0xc5, 0x19, 0xf8, 0x2d, 0xaa, 0x6c, 0xde, 0xe0, 0xc4,
	0x61, 0x6f, 0xa3, 0x00, 0x5f, 0x97, 0xa4, 0x6a, 0x4a, 0x78, 0x92, 0x40, 0xf6, 0x74, 0xb1, 0x83,
	0xa8, 0x3d, 0x5e, 0x52, 0xd9, 0x18, 0x4d, 0x78, 0x0f, 0xd1, 0x93, 0xc9, 0x92, 0x87, 0xfd, 0x00,
	0xe7, 0x7d, 0xe8, 0xc1, 0xb7, 0x4e, 0xcf, 0x7a, 0xb9, 0xaf, 0x1d, 0xff, 0xc3, 0x1b, 0xf0, 0x1e,
	0x39, 0x17, 0x8f, 0x9a, 0x9c, 0xba, 0x5e, 0x7b, 0xfc, 0xc3, 0xef, 0x7e, 0x02, 0x00, 0x00, 0xff,
	0xff, 0xd7, 0xdc, 0xb4, 0x34, 0x0d, 0x02, 0x00, 0x00,
}
