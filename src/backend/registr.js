router.post('/registration', (req, res, next)=>{
    if(req.body.password === req.body.repeatPassword){
      db
        .getUser(req.body.email)
        .then((results)=>{
          if (results.length == 0){
            data = {
              email: req.body.email,
              password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10), null)
            };
            db
              .add('users', data)
              .then((results)=>{
                res.json({
                  message: 'Пользователь добавлен: ' + results[0]
                })
              })
              .catch((err)=>{
                next(err);
              })
          } else {
            const err = new Error('Такой пользователь уже есть!');
            err.status = 400;
              next(err);
          }
        })
        .catch((err)=>{
          next(err);
        })
    } else {
      const err = new Error('Не совпадает пароль и подтверждение пароля!');
      err.status = 400;
        next(err);        
    }
  })
  bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10), null)