export interface Istore {
  restaurants: IRestaurants
  chefs: IChefs
  dishes: IDishs
  users: IUsers
}

export interface IRestaurants {
  value: IRestaurant[]
}
export interface IChefs {
  value: IChef[]
}
export interface IDishs {
  value: IDish[]
}
export interface IUsers {
  value: IUser[]
}

export interface IUser {
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface IChef {
  id: number
  firstName: string
  lastName: string
  info?: string
  img: string
  restaurants: number[]
  isChefOfTheWeek: Boolean
  isNew?: Boolean
  mostViewed?: Boolean
}

export interface IRestaurant {
  id: number
  img: string
  name: string
  chef: string
  dishes: number[]
  rating?: number
  isPopular?: Boolean
  isNew?: Boolean
  OpeningTime: number
  ClosingTime: number
  address?: number[]
}

export interface IDish {
  id: string
  img: string
  name: string
  restaurant: string
  ingredients: string
  isSpicy: boolean
  isVegitarian: boolean
  isVegan: boolean
  price: string
  optionalSides?: string[]
  optionalChanges?: string[]
  isPopular?: Boolean
}
