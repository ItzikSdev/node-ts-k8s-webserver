import express from 'express';
import path from 'path';
import { User } from './types/types';
import { readFileSync } from 'fs';

let users: User[] = []

const app = express();
const port = process.env.PORT || 3002;

const readUsersFile = () => {
    try {
        const data = readFileSync(path.join(__dirname, 'users.json'), 'utf-8')
        users = JSON.parse(data)
        return true
    } catch (error) {
       return false
    }
}
const findUser = (loginUser: User): boolean => {
    try {
        return users.some((u: User) => u.username === loginUser.username);
    } catch (error) {
        console.error("Not find user", error)
        return false
    }
}
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
const views = path.join(__dirname, '../views')
app.set('views', views);

app.get('/', (req, res) => {
    res.render('login');
});
app.post('/login', (req, res) => {
    try {
        if (readUsersFile()) {
            const loginUser: User = {
                username: req.body.username,
                password: req.body.password
            }
            if (findUser(loginUser)) { 
                res.render('logout', {user :loginUser})
            }else {
                res.status(400).send("Not in users json")
            }
        }else {
            res.status(400).send("Not getting json file")
        }
    } catch (error) {
        res.status(400).send("error")
    }
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
