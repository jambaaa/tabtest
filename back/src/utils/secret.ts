import bcrypt from 'bcrypt';

export const hashPassword = (password: string) => {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    return hashedPassword;
}

export const checkPassword = (password: string, hashedPassword: string) => {
    var res: boolean = false;
    bcrypt.compare(password, hashedPassword, function (err: Error, result: boolean) {
        if(err) {
            throw Error(err.name + " ==> " + err.message);
        }
        res = result;
    });

    return res;
}