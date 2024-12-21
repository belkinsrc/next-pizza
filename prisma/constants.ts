const categories = [
  {
    name: 'Пиццы',
  },
  {
    name: 'Завтрак',
  },
  {
    name: 'Закуски',
  },
  {
    name: 'Коктели',
  },
  {
    name: 'Напитки',
  },
]

const ingredients = [
  {
    name: 'Сырный бортик',
    price: 179,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
  },
  {
    name: 'Сливочная моцарелла',
    price: 79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
  },
  {
    name: 'Сыры чеддер и пармезан',
    price: 79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
  },
  {
    name: 'Острый перец халапеньо',
    price: 59,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
  },
  {
    name: 'Нежный цыпленок',
    price: 79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A',
  },
  {
    name: 'Шампиньоны',
    price: 59,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324',
  },
  {
    name: 'Бекон',
    price: 79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA637AAB68F',
  },
  {
    name: 'Ветчина',
    price: 79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61',
  },
  {
    name: 'Пикантная пепперони',
    price: 79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3',
  },
  {
    name: 'Острая чоризо',
    price: 79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027',
  },
  {
    name: 'Маринованные огурчики',
    price: 59,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B',
  },
  {
    name: 'Свежие томаты',
    price: 59,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67',
  },
  {
    name: 'Красный лук',
    price: 59,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C',
  },
  {
    name: 'Сочные ананасы',
    price: 59,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0',
  },
  {
    name: 'Итальянские травы',
    price: 39,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png',
  },
  {
    name: 'Сладкий перец',
    price: 59,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B',
  },
  {
    name: 'Кубики брынзы',
    price: 79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349',
  },
  {
    name: 'Митболы',
    price: 79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png',
  },
]

const products = [
  {
    name: 'Омлет с ветчиной и грибами',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EE7970321044479C1D1085457A36EB.webp',
    categoryId: 2,
    basePrice: 110,
    carbs: 30,
    fats: 20,
    proteins: 35,
    kcal: 250,
    weight: 300,
  },
  {
    name: 'Омлет с пепперони',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EE94ECF33B0C46BA410DEC1B1DD6F8.webp',
    categoryId: 2,
    basePrice: 120,
    carbs: 25,
    fats: 30,
    proteins: 40,
    kcal: 280,
    weight: 350,
  },
  {
    name: 'Кофе Латте',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp',
    categoryId: 2,
    basePrice: 130,
    carbs: 40,
    fats: 15,
    proteins: 10,
    kcal: 150,
    weight: 200,
  },
  {
    name: 'Дэнвич ветчина и сыр',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EE796FF0059B799A17F57A9E64C725.webp',
    categoryId: 3,
    basePrice: 140,
    carbs: 50,
    fats: 25,
    proteins: 20,
    kcal: 320,
    weight: 400,
  },
  {
    name: 'Куриные наггетсы',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EE7D618B5C7EC29350069AE9532C6E.webp',
    categoryId: 3,
    basePrice: 150,
    carbs: 30,
    fats: 35,
    proteins: 25,
    kcal: 270,
    weight: 300,
  },
  {
    name: 'Картофель из печи с соусом',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EED646A9CD324C962C6BEA78124F19.webp',
    categoryId: 3,
    basePrice: 160,
    carbs: 45,
    fats: 20,
    proteins: 15,
    kcal: 220,
    weight: 250,
  },
  {
    name: 'Додстер',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EE796F96D11392A2F6DD73599921B9.webp',
    categoryId: 3,
    basePrice: 170,
    carbs: 55,
    fats: 30,
    proteins: 25,
    kcal: 330,
    weight: 400,
  },
  {
    name: 'Острый Додстер',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EE796FD3B594068F7A752DF8161D04.webp',
    categoryId: 3,
    basePrice: 180,
    carbs: 60,
    fats: 35,
    proteins: 30,
    kcal: 380,
    weight: 450,
  },
  {
    name: 'Банановый молочный коктейль',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EEE20B8772A72A9B60CFB20012C185.webp',
    categoryId: 4,
    basePrice: 190,
    carbs: 70,
    fats: 40,
    proteins: 35,
    kcal: 430,
    weight: 500,
  },
  {
    name: 'Карамельное яблоко молочный коктейль',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EE79702E2A22E693D96133906FB1B8.webp',
    categoryId: 4,
    basePrice: 200,
    carbs: 80,
    fats: 45,
    proteins: 40,
    kcal: 480,
    weight: 550,
  },
  {
    name: 'Молочный коктейль с печеньем Орео',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EE796FA1F50F8F8111A399E4C1A1E3.webp',
    categoryId: 4,
    basePrice: 210,
    carbs: 90,
    fats: 50,
    proteins: 45,
    kcal: 530,
    weight: 600,
  },
  {
    name: 'Классический молочный коктейль',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EE796F93FB126693F96CB1D3E403FB.webp',
    categoryId: 4,
    basePrice: 220,
    carbs: 100,
    fats: 55,
    proteins: 50,
    kcal: 580,
    weight: 650,
  },
  {
    name: 'Ирландский Капучино',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EE7D61999EBDA59C10E216430A6093.webp',
    categoryId: 5,
    basePrice: 230,
    carbs: 110,
    fats: 60,
    proteins: 55,
    kcal: 630,
    weight: 700,
  },
  {
    name: 'Кофе Карамельный капучино',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EE7D61AED6B6D4BFDAD4E58D76CF56.webp',
    categoryId: 5,
    basePrice: 240,
    carbs: 120,
    fats: 65,
    proteins: 60,
    kcal: 680,
    weight: 750,
  },
  {
    name: 'Кофе Кокосовый латте',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EE7D61B19FA07090EE88B0ED347F42.webp',
    categoryId: 5,
    basePrice: 250,
    carbs: 130,
    fats: 70,
    proteins: 65,
    kcal: 730,
    weight: 800,
  },
  {
    name: 'Кофе Американо',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EE7D61B044583596548A59078BBD33.webp',
    categoryId: 5,
    basePrice: 260,
    carbs: 140,
    fats: 75,
    proteins: 70,
    kcal: 780,
    weight: 850,
  },
  {
    name: 'Кофе Латте',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp',
    categoryId: 5,
    basePrice: 270,
    carbs: 150,
    fats: 80,
    proteins: 75,
    kcal: 830,
    weight: 900,
  },
]

const pizzes = [
  {
    product: {
      create: {
        name: 'Пицца с мясом',
        categoryId: 1,
        basePrice: 110,
        carbs: 30,
        fats: 20,
        proteins: 35,
        kcal: 250,
        weight: 300,
        variations: {
          create: [
            {
              name: 'Размер',
              values: ['25', '30', '35'],
            },
            {
              name: 'Тесто',
              values: ['Тонкое', 'Традиционное'],
            },
          ],
        }
      },
    },
    ingredients: {
      connect: [
        { id: 7 },
        { id: 8 },
        { id: 13 },
        { id: 16 },
      ]
    }
  },
]

export { categories, ingredients, products, pizzes }
