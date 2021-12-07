const UserModel = require("../../models/User.model");
const { sendResponse, sendError } = require("../_helper");

const login = async (req, res, next) => {
  console.log(req.body)
  try {
    if (!req.body.email || !req.body.password) {
      sendError(
        {
          title: "invalid_input",
          msg: `email or password not exists email:${req.body.email} || password:${req.body.password}`,
        },
        res
      );
    } else {
      const data = await UserModel.findOne({
        email: req.body.email,
      });
      if (!data) {
        console.log("error 2");
        sendError(
          {
            title: "no_user",
            msg: "no user exists",
          },
          res
        );
      }
      if (req.body.password === data.password) {
        console.log("error 3");
        sendResponse(
          {
            msg: `user ${req.body.email} is logged in`,
            data: { ...data._doc, password: "" },
          },
          res
        );
      } else {
        console.log("error 4");
        sendError(
          {
            title: "invalid_cred",
            msg: "invalid credentials",
          },
          res
        );
      }
    }
  } catch (error) {
    console.log("error 5");
    console.log("ERROR at login");
    sendError(
      {
        title: "server_error",
        msg: error,
      },
      res
    );
  }
};

const signup = async (req, res, next) => {
  try {
    const data = await UserModel.find({
      email: req.body.email.trim().toLowerCase(),
    });
    if (data.length !== 0) {
      sendError(
        {
          title: "user_exist",
          msg: "user with same email exists",
        },
        res
      );
    } else {
      let local_model = new UserModel(req.body);
      await UserModel.create(local_model).then((user) => {
        sendResponse(
          {
            msg: `user ${req.body.email} is logged in`,
            data: { ...user._doc, password: "" },
          },
          res
        );
      });
    }
  } catch (err) {
    console.log("ERROR at signup");
    sendError(
      {
        title: "server_error",
        msg: err.message,
      },
      res
    );
  }
};

module.exports = {
  login,
  signup,
};
