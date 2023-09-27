module.exports.home = function(req, res){
    res.render('home', { title: 'home' });
  };
  /* GET menu page */
  module.exports.menu = function(req, res){
    res.render('menu', { title: 'menu' });
  };

  module.exports.darkchocolate = function(req, res){
    res.render('darkchocolate', { title: 'darkchocolate' ,Course: [
      {
        name: "Dark chocolate Icecream",
        price: 300,
        description: "Signature dark chocolate waffle with melted belgian chocolate.",
        rating: 4,
        image:"images/darkchocolate.jpeg" 
      },
      {
        name: "Tripple chocolate",
        price: 400,
        description: "Three layers of melted white,belgian white and belgian dark chocolate",
        rating: 5,
        image: "images/tripplechocolate.jpeg"
      },
      {
        name: "Dark chocolate overload",
        price: 400,
        description: "A delightful dark chocolate overload.Double the chocolate.",
        rating: 4,
        image: "images/darkchocolate-overload.jpeg"
      },
      {
        name: "Death by chocolate",
        price: 400,
        description: "Signature Dark chocolate waffle layed with different chocolates.",
        image: "images/deathbychocolate.jpeg"
      }
    ]});
  };

  module.exports.whitechocolate = function(req, res){
    res.render('whitechocolate', { title: 'whitechocolate',Course: [
      {
        name: "red velvet",
        price: 300,
        description: "Original velvet with cheese and cream.A true original!",
        rating: 4,
        image:"images/redvelvet.jpeg" 
      },
      {
        name: "tripple cookie",
        price: 400,
        description: "Original red velvet with biscoff cookie.",
        rating: 5,
        image: "images/tripplecookie.jpeg"
      }
    ]});
  };

  module.exports.milkchocolate= function(req, res){
    res.render('milkchocolate', { title: 'milkchocolate',Course: [
      {
        name: "Milk chocolate",
        price: 300,
        description: "Signature milk chocolate waffle.Original style!",
        rating: 4,
        image:"images/milkchocolate.jpeg" 
      },
      {
        name: "raspberry waffle",
        price: 400,
        description: "Signature raspberry chocolate waffle.Original style!",
        rating: 5,
        image: "images/raspberry.jpeg"
      }
    ]});
  };