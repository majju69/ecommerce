import bcrypt from "bcryptjs";

const users=
[
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync("123456",10),
        isAdmin: true
    },
    {
        name: 'Kush Mazumdar',
        email: 'kush@example.com',
        password: bcrypt.hashSync("123456",10),
    },
    {
        name: 'Barna Mazumdar',
        email: 'barna@example.com',
        password: bcrypt.hashSync("123456",10),
    }
]

export default users;