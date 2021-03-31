import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('12345',10),
        isAdmin: true
    },
    {
        name: 'Hamza khan',
        email: 'hamza@example.com',
        password: bcrypt.hashSync('12345',10),
        
    },
    {
        name: 'bilal khan',
        email: 'bilal@example.com',
        password: bcrypt.hashSync('12345',10),
         }
]

export default users