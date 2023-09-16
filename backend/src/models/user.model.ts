import { Prisma } from '@prisma/client';

export type User = Omit<Prisma.UserCreateInput, 'id'>;
