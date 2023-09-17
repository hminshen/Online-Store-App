import { Prisma } from '@prisma/client';

// Model used for creating user
export type ItemCreate = Omit<Prisma.ItemCreateInput, 'item_id'>;

// Model used when retrieving user
export type ItemRetrieve = Prisma.ItemSelect;
