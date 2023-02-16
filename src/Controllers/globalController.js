export const getHome = (req, res) => {
    return res.render("home.pug");
};

export const getLogin = (req, res) => {
    return res.render("login.pug");
};

export const getJoin = (req, res) => {
    return res.render("join.pug");
};