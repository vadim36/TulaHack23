router.post('/login', (req, res, next)=>{
    db
      .getUser(req.body.email)
      .then((results)=>{
        if (isValidPassword(results[0], req.body.password)) {
          data ={};
          data.login=req.body.email;
          data.token=uuidv4();
          db
            .delete(req.body.email)
            .then((results)=>{
              db
                .add('token', data)
                .then((results)=>{
                  res.json({
                    token: results.token
                  })                            
                })
                .catch((err)=>{
                  next(err)
                })
            })
            .catch((err)=>{
              next(err)
            })
        } else {
          const err = new Error('Не верный логин или пароль!');
          err.status = 400;
          next(err); 
        }
      })
      .catch((err)=>{
        next(err);
      })
  })
  if (isValidPassword(results[0], req.body.password)) {}
    const isValidPassword = function(user, password) {
    return bcrypt.compareSync(password, user.password);
     }
     data.token=uuidv4()