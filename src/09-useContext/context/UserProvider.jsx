import {UserContext} from './userContext'

const user = {
  id: 123,
  name: "Mariangely Gonzalez",
  email: 'mariangelygonzalez14@gmail.com'
}

export const UserProvider = ({children}) => {
  return (
    <UserContext.Provider value={{hola: 'Mundo', user: user}}>
        {children}
    </UserContext.Provider>
  )
}
