import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  await prisma.user.create({
    data: {
      username: "Isha",
      email: "isha@gmail.com",
      phone: "9898786787",
    },
  })

  await prisma.user.create({
    data: {
      username: "John",
      email: "john@gmail.com",
      phone: "1234567890",
    },
  })

  await prisma.user.create({
    data: {
      username: "Emma",
      email: "emma@gmail.com",
      phone: "9876543210",
    },
  })
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit();
});
