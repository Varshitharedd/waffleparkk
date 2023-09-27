var mongoose = require('mongoose');
var Course = mongoose.model('Course');

var sendJsonResponse = function (res, status, content) {
  res.status(status);
  res.json(content);
};

// Create a new course
module.exports.coursesCreate = function (req, res) {
  // You can access the request body to create a new course
  const newCourse = new Course({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    rating: req.body.rating,
    image: req.body.image
  });

  newCourse.save(function (err, course) {
    if (err) {
      sendJsonResponse(res, 500, { error: 'An error occurred' });
    } else {
      sendJsonResponse(res, 201, course);
    }
  });
};

// Get a list of courses
module.exports.coursesList = function (req, res) {
  Course.find({}, function (err, courses) {
    if (err) {
      sendJsonResponse(res, 500, { error: 'An error occurred' });
    } else {
      sendJsonResponse(res, 200, courses);
    }
  });
};

// Get a single course by ID
module.exports.coursesReadOne = async function (req, res) {
  try {
    const course = await Course.findById(req.params.courseid).exec();
    if (!course) {
      sendJsonResponse(res, 404, { error: 'Course not found' });
    } else {
      sendJsonResponse(res, 200, course);
    }
  } catch (err) {
    sendJsonResponse(res, 500, { error: 'An error occurred' });
  }
};

// Update a course by ID
module.exports.coursesUpdateOne = function (req, res) {
  Course.findByIdAndUpdate(
    req.params.courseid,
    {
      $set: {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        rating: req.body.rating,
        image: req.body.image
      }
    },
    { new: true },
    function (err, course) {
      if (err) {
        sendJsonResponse(res, 500, { error: 'An error occurred' });
      } else {
        sendJsonResponse(res, 200, course);
      }
    }
  );
};

// Delete a course by ID
module.exports.coursesDeleteOne = function (req, res) {
  Course.findByIdAndRemove(req.params.courseid, function (err, course) {
    if (err) {
      sendJsonResponse(res, 500, { error: 'An error occurred' });
    } else {
      sendJsonResponse(res, 204, null);
    }
  });
};
