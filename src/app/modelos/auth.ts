export type auth={
  username:string,
  password:string
}

export type authFull={
  id: string,
  username: string,
  email: string,
  firstName: string,
  lastName:string,
  gender: 'male' | 'female',
  image: Array<string>,
  token:string,
}
