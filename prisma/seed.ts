import { PrismaClient } from '@prisma/client'
import { hashSync } from 'bcrypt'
import { categories, ingredients, products } from './constants'

const prisma = new PrismaClient()

async function seed() {
  await prisma.user.create({
    data: {
      name: 'Nikita',
      surname: 'Belkin',
      email: 'Hs9Zx@example.com',
      password: hashSync('111111', 10),
      phoneNumber: '79991111111',
      phoneVerified: new Date(),
      role: 'ADMIN',
      cart: {
        create: {
          userToken: '1231231234',
        },
      },
    },
  })

  await prisma.user.create({
    data: {
      name: 'Nikita',
      surname: 'Belkin',
      email: '2N6pK@example.com',
      password: hashSync('111111', 10),
      phoneNumber: '79991111110',
      phoneVerified: new Date(),
      role: 'USER',
      cart: {
        create: {
          userToken: '1231231215',
        },
      },
    },
  })

  await prisma.category.createMany({
    data: categories,
  })

  await prisma.ingredient.createMany({
    data: ingredients,
  })

  await prisma.product.createMany({
    data: products,
  })

  await prisma.pizza.create({
    data: {
      product: {
        create: {
          name: 'Пицца с мясом',
          categoryId: 1,
          basePrice: 110,
          imageUrl:
            'https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp',
          carbs: 30,
          fats: 20,
          proteins: 35,
          kcal: 250,
          weight: 300,
          variations: {
            create: [
              {
                name: 'Размер',
                value: ['25', '30', '35'],
              },
              {
                name: 'Тесто',
                value: ['Тонкое', 'Традиционное'],
              },
            ],
          },
        },
      },
      ingredients: {
        connect: [{ id: 7 }, { id: 8 }, { id: 13 }, { id: 16 }],
      },
    },
  })
  await prisma.pizza.create({
    data: {
      product: {
        create: {
          name: 'Маргарита',
          categoryId: 1,
          basePrice: 130,
          imageUrl:
            'https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp',
          carbs: 40,
          fats: 30,
          proteins: 55,
          kcal: 350,
          weight: 300,
          variations: {
            create: [
              {
                name: 'Размер',
                value: ['25', '30', '35'],
              },
              {
                name: 'Тесто',
                value: ['Тонкое', 'Традиционное'],
              },
            ],
          },
        },
      },
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 12 }, { id: 17 }],
      },
    },
  })
  await prisma.pizza.create({
    data: {
      product: {
        create: {
          name: 'Сырная',
          categoryId: 1,
          basePrice: 120,
          imageUrl:
            'https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp',
          carbs: 35,
          fats: 30,
          proteins: 55,
          kcal: 350,
          weight: 300,
          variations: {
            create: [
              {
                name: 'Размер',
                value: ['25', '30', '35'],
              },
              {
                name: 'Тесто',
                value: ['Тонкое', 'Традиционное'],
              },
            ],
          },
        },
      },
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 17 }],
      },
    },
  })

  await prisma.cart.create({
    data: {
      userToken: '123123121',
    },
  })

  await prisma.cartItem.create({
    data: {
      quantity: 2,
      cart: {
        connect: {
          userToken: '123123121',
        },
      },
      products: {
        connect: {
          id: 18,
        },
      },
      ingredients: {
        connect: [
          {
            id: 7,
          },
          {
            id: 8,
          },
          {
            id: 13,
          },
          {
            id: 16,
          },
        ],
      },
    },
  })
}

async function clear() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE;`
  await prisma.$executeRaw`TRUNCATE TABLE "Order" RESTART IDENTITY CASCADE;`
  await prisma.$executeRaw`TRUNCATE TABLE "Pizza" RESTART IDENTITY CASCADE;`
  await prisma.$executeRaw`TRUNCATE TABLE "VerificationCode" RESTART IDENTITY CASCADE;`
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE;`
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE;`
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE;`
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE;`
}

async function main() {
  try {
    await clear()
    await seed()
  } catch (error) {
    console.error(error)
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
