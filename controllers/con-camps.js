// @desc get all bootcamps
// @route GET /api/v1/camps
// @access Public

exports.getCamps = (req, res, next) => {
  res.status(200).json({
    sucess: true,
    data: {
      show: `get all`,
      hello: req.hello
    }
  });
};
// @desc get single camp
// @route GET /api/v1/camps/:id
// @access Public

exports.getCamp = (req, res, next) => {
  res.status(200).json({
    sucess: true,
    data: {
      show: `get ${req.params.id}`
    }
  });
};
// @desc create camp
// @route POST /api/v1/camps/
// @access Private

exports.createCamp = (req, res, next) => {
  res.status(200).json({
    sucess: true,
    data: {
      show: "create  camp"
    }
  });
};
// @desc update camp
// @route PUT /api/v1/camps/:id
// @access Private

exports.updateCamp = (req, res, next) => {
  res.status(200).json({
    sucess: true,
    data: {
      show: `update ${req.params.id}`
    }
  });
};
// @desc delete camp
// @route DELETE /api/v1/camps/:id
// @access Private

exports.deleteCamp = (req, res, next) => {
  res.status(200).json({
    sucess: true,
    data: {
      show: `delete ${req.params.id}`
    }
  });
};
