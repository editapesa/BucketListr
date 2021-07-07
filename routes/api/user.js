const router = require('express').Router();
const { User } = require('../../models/user');
//const passport = require('passport');

router.post('/signup', async (req, res) => {
    console.log('inside signup route');
    try {
        const user = await User.create(req.body);
        console.log(user);
        req.session.save(() => {
        req.session.user_id = user.id;
        req.session.username = user.username;
        req.session.logged_in = true;

        //res.json(user);
        res.redirect('/dashboard')
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const user = await User.update(
            req.body, { where: { id: req.params.id }
        });
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }  
  });
    
router.post('/login', async (req, res) => {
    try {
    const user = await User.findOne({
        where: { username: req.body.username } });

    if (!user) {
        res.status(400).json({ message: 'Not found' });
        return;
    }

    const validPassword = await user.checkPassword(req.body.password);

    if (!validPassword) {
        res.status(400).json({ message: 'Not found' });
        return;
    }

    req.session.save(() => {
        req.session.user_id = user.id;
        req.session.username = user.username;
        req.session.logged_in = true;

        res.json({ user, message: 'You are now logged in!' });
    });
    } catch (err) {
    res.status(400).json({ message: 'Not found' });
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
    req.session.destroy(() => {
        res.status(204).end();
    });
    } else {
    res.status(404).end();
    }
});

module.exports = router;