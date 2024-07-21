"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
let users = [];
const app = (0, express_1.default)();
const port = process.env.PORT || 3002;
const readUsersFile = () => {
    try {
        const data = (0, fs_1.readFileSync)(path_1.default.join(__dirname, 'users.json'), 'utf-8');
        users = JSON.parse(data);
        return true;
    }
    catch (error) {
        return false;
    }
};
const findUser = (loginUser) => {
    try {
        return users.some((u) => u.username === loginUser.username);
    }
    catch (error) {
        console.error("Not find user", error);
        return false;
    }
};
app.use(express_1.default.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, './views'));
app.get('/', (req, res) => {
    res.render('login');
});
app.post('/login', (req, res) => {
    try {
        if (readUsersFile()) {
            const loginUser = {
                username: req.body.username,
                password: req.body.password
            };
            if (findUser(loginUser)) {
                res.render('logout', { user: loginUser });
            }
            else {
                res.status(400).send("Not in users json");
            }
        }
        else {
            res.status(400).send("Not getting json file");
        }
    }
    catch (error) {
        res.status(400).send("error");
    }
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map