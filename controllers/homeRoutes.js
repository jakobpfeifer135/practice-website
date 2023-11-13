const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
console.log("testing")
   
    res.render('home');
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/cart', async (req, res) => {

    res.render('cart'

    );
});

// router.get('/login', async (req, res) => {
 
//     res.render('loginPage'

//     );
// });
module.exports = router;