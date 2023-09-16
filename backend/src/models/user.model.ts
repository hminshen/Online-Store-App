import { Prisma } from '@prisma/client';

// Model used for creating user
export type User = Omit<Prisma.UserCreateInput, 'id'>;

// Model used when retrieving user
export type SessionUser = Prisma.UserSelect;
