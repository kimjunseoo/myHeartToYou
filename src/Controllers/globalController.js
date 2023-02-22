import User from "../Models/user";

export const getHome = (req, res) => {
    return res.render("home.pug");
};

export const getLogin = (req, res) => {
    return res.render("login.pug");
};

export const getJoin = (req, res) => {
    return res.render("join.pug");
};

export const postJoin = async (req, res) => {
    
    const { name, birthDay, email, password } = req.body;

    //이메일 존재 여부 확인
    const emailExists = await User.exists({ email: email });
    if(emailExists){
        return res.status(500).render("join.pug", { errorMessage: "이메일이 이미 사용 중 입니다."});
    };

    try{
        await User.create({
            name: name,
            birthDay: birthDay,
            email: email,
            password: password
        });
    }catch(error){
        return res.status(500).render("join.pug", { errorMessage: "오류가 발생하였습니다. 다시 시도해주십시오." });
    }
    

    return res.status(200).render("guide/successJoin.pug");
};