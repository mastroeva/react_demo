import React from "react";
import { type } from '@testing-library/user-event/dist/type';

type Users = Array<User>

type User = {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
  age: number
}

const users: Users = [
  {
      id: 7,
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: "https://reqres.in/img/faces/7-image.jpg",
      age: 23
  },
  {
      id: 8,
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: "https://reqres.in/img/faces/8-image.jpg",
      age: 20
  }
];

type Products = Array<Product>

type Product = {
  id: number
  name: string
  price: number
  currency: string
  ingredients: string[]
  type: string
  available: boolean
}

const products = [
  {
      id: 1,
      name: "Burger Premium",
      price: 6,
      currency: "euro",
      ingredients: ["flour", "beef", "salad", "cheese", "sauce"],
      type: "burger",
      available: true
  },
  {
      id: 2,
      name: "Burger Lite",
      price: 2.3,
      currency: "euro",
      ingredients: ["flour", "beef", "cheese", "sauce", "cucumber"],
      type: "burger",
      available: true
  },
];

type GetUser = (id: number, user: Users) => User | undefined

const getUser: GetUser = (id, users) => users.find((user) => user.id === id);

//задача 1
type Countries = Array<Country>

type Country = {
  country: string,
  abbreviation: string,
  city: string,
  currency_name:string,
  population: number
}

const countries: Countries = [
  {
      country: "United Arab Emirates",
      abbreviation: "AE",
      city: "Abu Dhabi",
      currency_name: "Arab Emirates Dirham",
      population: 9630959
  },
  {
      country: "Poland",
      abbreviation: "PL",
      city: "Warszawa",
      currency_name: "Polish Zloty",
      population: 37974750
  },
  {
      country: "Russian Federation",
      abbreviation: "RU",
      city: "Moscow",
      currency_name: "Russian Ruble",
      population: 144478050
  }
]

//   1. Создать строку из названий стран через запятую
type CountryString = (countries: Countries) => string

const countryString: CountryString = (countries) => {
  let res = ''
  countries.forEach((item: Country) => res += item.country)
  return res 
}

console.log(countryString(countries));

//  2. Посчитать общее количнство людей в данном массиве стран.
type PeopleNumber = (countries: Countries) => number

const peopleNumber: PeopleNumber = (countries) => {
  return countries.reduce((acc: number, cur: Country) => {
    return acc + cur.population
  }, 0)
}

console.log(peopleNumber(countries));

//    3. Создать функцию, которая бы принимала массив стран и сортировала бы их по названию.
type ArrayCountry = (countries: Countries) => Countries

const arrayCounty: ArrayCountry = (countries) => {
  return countries.sort((a: Country, b: Country) => a.country > b.country ? 1 : -1)
}

console.log(arrayCounty(countries));

//     4. Получить массив валют.

type ArrayCurrency = (countries: Countries) => string[]

const arrayCurrency: ArrayCurrency = (countries) => {
  let res: string[] = []
  countries.forEach((item: Country) => res.push(item.currency_name))
  return res
}

console.log(arrayCurrency(countries));

//  5. Получить массив городов, отсортированных в алвавитном порядке.

type ArrayCity = (countries: Countries) => string[]

const arrayCity: ArrayCity = (countries) => {
  return countries.reduce((acc: string[], cur: Country ) => [...acc, cur.city], []).sort()
}

console.log(arrayCity(countries));

// 6.  Создать функцию, которая бы принимала массив стран и отдавала бы среднее количество людей в этих странах.

type NumberPeople = (countries: Countries) => number

const numberPeople: NumberPeople = (countries) => countries.reduce((acc: number, cur: Country) => acc + cur.population, 0) / countries.length

console.log(numberPeople(countries));