// User related types
export interface User {
  id: string;
  openid: string;
  nickname?: string;
  avatar?: string;
  phone?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserDto {
  openid: string;
  nickname?: string;
  avatar?: string;
  phone?: string;
}

export interface UpdateUserDto {
  nickname?: string;
  avatar?: string;
  phone?: string;
}

// Group related types
export interface Group {
  id: string;
  name: string;
  description?: string;
  creatorId: string;
  status: GroupStatus;
  maxMembers: number;
  createdAt: Date;
  updatedAt: Date;
}

export enum GroupStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  COMPLETED = 'COMPLETED',
}

export interface CreateGroupDto {
  name: string;
  description?: string;
  maxMembers?: number;
}

export interface UpdateGroupDto {
  name?: string;
  description?: string;
  status?: GroupStatus;
  maxMembers?: number;
}

export interface GroupUser {
  id: string;
  groupId: string;
  userId: string;
  role: GroupUserRole;
  joinedAt: Date;
}

export enum GroupUserRole {
  ADMIN = 'ADMIN',
  MEMBER = 'MEMBER',
}

// Product related types
export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  groupId: string;
  status: ProductStatus;
  minQuantity: number;
  maxQuantity?: number;
  createdAt: Date;
  updatedAt: Date;
}

export enum ProductStatus {
  AVAILABLE = 'AVAILABLE',
  UNAVAILABLE = 'UNAVAILABLE',
  OUT_OF_STOCK = 'OUT_OF_STOCK',
}

export interface CreateProductDto {
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  groupId: string;
  minQuantity?: number;
  maxQuantity?: number;
}

export interface UpdateProductDto {
  name?: string;
  description?: string;
  price?: number;
  imageUrl?: string;
  status?: ProductStatus;
  minQuantity?: number;
  maxQuantity?: number;
}

// Order related types
export interface Order {
  id: string;
  userId: string;
  groupId: string;
  productId: string;
  quantity: number;
  totalPrice: number;
  status: OrderStatus;
  createdAt: Date;
  updatedAt: Date;
}

export enum OrderStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED',
}

export interface CreateOrderDto {
  productId: string;
  quantity: number;
}

export interface UpdateOrderDto {
  status?: OrderStatus;
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T = any> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Auth related types
export interface LoginResponse {
  access_token: string;
  user: User;
}

export interface JwtPayload {
  openid: string;
  sub: string;
  iat?: number;
  exp?: number;
}