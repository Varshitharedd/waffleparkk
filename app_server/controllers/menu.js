module.exports.home = function(req, res){
    res.render('home', { title: 'home' });
  };
  /* GET menu page */
  module.exports.menu = function(req, res){
    res.render('menu', { title: 'menu' });
  };

  module.exports.darkchocolate = function(req, res){
    res.render('darkchocolate', { title: 'darkchocolate' });
  };

  module.exports.whitechocolate = function(req, res){
    res.render('whitechocolate', { title: 'whitechocolate' });
  };

  module.exports.milkchocolate= function(req, res){
    res.render('milkchocolate', { title: 'milkchocolate' });
  };