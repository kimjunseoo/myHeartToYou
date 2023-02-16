export const getIntroduce = (req, res) => {
    return res.render("introduce/introduce.pug");
};

export const getMotive = (req, res) => {
    return res.render("introduce/motive.pug");
};

export const getGoal = (req, res) => {
    return res.render("introduce/goal.pug");
}