
const LOGIN = `
select * from users where username=$1 and password=crypt($2,password)
`
export {
  LOGIN
}