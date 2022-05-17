const username = document.querySelector('#username')
function addUser(e){
    e.preventDefault()
    console.log('add');
}
let user =[]
if(!localStorage.getItem('users')) {
    localStorage.setItem('user'.JSON.stringify([]))
    users = []
} else {
    users = JSON.parse(localStorage.getItem( 'user'))
}
const addBtn = document.querySelector('#add')

addBtn.addEventListener('click', function (e) {
    e.preventDefault()
    console.log('add')
    let name = userName. value
    user.push(name)
    console.log(users)

})
