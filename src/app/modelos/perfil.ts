export type perfil = {

  id: number,
  firstName: string,
  lastName: string,
  maidenName: string,
  age: number,
  gender: 'male' | 'female',
  email: string,
  phone: number,
  username: string,
  password: string,
  birthDate: string,
  image: Array<string>,
  bloodGroup: string,
  height: number,
  weight: number,
  eyeColor: string,
  hair: {
    color: string,
    type: string
  },
  domain: string,
  ip: string,
  address: {
    address: string,
    city: string,
    coordinates: {
      lat: number,
      lng: number
    },
    postalCode:number,
    state: string
  },
  macAddress: string,
  university: string,
  bank: {
    cardExpire: number,
    cardNumber: number,
    cardType: string,
    currency: string,
    iban: string,
  },
  company: {
    address: {
      address: string,
      city: string,
      coordinates: {
        lat:number,
        lng:number,
      },
      postalCode: number,
      state: string,
    },
    department: string,
    name: string,
    title:string,
  },
  ein:number,
  ssn:number,
  userAgent:string,


}
