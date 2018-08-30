const handleGetAllUsers = (req, res, db) => {
  console.log('trying to get users')
  db.select('name', 'entries', 'joined', 'age').from('users').orderBy('entries', 'desc').as('rank')
    .then(data => {
        res.send(data)
    })
    .catch(err => res.status(400).json('error getting users'));
}

module.exports = {
 handleGetAllUsers
}