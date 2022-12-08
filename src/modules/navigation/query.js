
const get = `
select * from navigation
`
const post = `
insert into navigation(navigation_title)values($1) returning *
`
const put = `
update navigation
    set navigation_title=$2
    where navigation_id=$1
    returning *
`
const del = `
delete from navigation where navigation_id=$1 returning*
`
export {
    get,
    post,
    put,
    del
}