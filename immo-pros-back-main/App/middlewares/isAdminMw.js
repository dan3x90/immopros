
const isAdminMw = {
    isAdmin(req, res, next) {
        if (req.user.label === "admin") {
            next();
        } else {
            res.status(401).send('Droits refusés');        }
    }
}



export default isAdminMw;
