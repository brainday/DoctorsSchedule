module.exports = (sequlize, Sequlize) => {
    const User = sequlize.define("users", {
        username: {
            type: Sequlize.STRING
        },
        password: {
            type: Sequlize.STRING
        }
    });

    return User;
}