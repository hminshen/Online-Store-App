import { PrismaClient } from '@prisma/client'
import crypto from 'crypto';
const prisma = new PrismaClient()

async function main() {
    // Generate a random salt
    const salt = crypto.randomBytes(16);

    // Password:
    const password = "abc123";

    // Hash the password with the salt using PBKDF2
    crypto.pbkdf2(password, salt, 100000, 64, 'sha512', async (err, derivedKey) => {
    if (err) throw err;
    
    const hashedPassword = derivedKey;
        
    const userData = {
        email: "test@gmail.com",
        username: "John",
        name: "John Lim",
        hashed_password: hashedPassword,
        salt: salt,
        role_id: 2, // default to admin
    };
    await prisma.user.create({
        data: userData,
      });
    })
  }
  
  main()
    .catch((e) => {
      throw e;
    })
    .finally(async () => {
      await prisma.$disconnect();
    });