const report = require("../models/model.js");
const { Op } = require("sequelize");
const fs = require("fs");
const path = require("path");

const index = async (req, res) => {
  try {
    const reports = await report.findAll();
    res.send(reports);
  } catch (error) {
    console.log(error);
  }
};

const getReport = async (req, res) => {
  const id = req.params.id;
  try {
    const reports = await report.findAll({
      where: {
        id: {
          [Op.eq]: id,
        },
      },
    });
    res.send(reports);
  } catch (error) {
    console.log(error);
  }
};

const create = async (req, res) => {
  try {
    const name = req.body.name;
    const comment = req.body.comment;
    const temp = req.body.temp;
    const city = req.body.city;
    const time = req.body.time;
    const nameImage = `${time + "-" + req.file.originalname}`;
    const image = `https://star2impact-pollution.herokuapp.com/${nameImage}`;
    if (!req.file) {
      return res.send("Devi sciegliere una immagine!!");
    }
    await report.create({
      name: name,
      city: city,
      comment: comment,
      image: image,
      nameImage: nameImage,
      temp: temp,
    });

    res.json({ message: "salvato correctamente" });
  } catch (error) {
    console.log(error);
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, comment, temp, city, time } = req.body;
    const nameImage = `${time + "-" + req.file.originalname}`;
    const image = `https://star2impact-pollution.herokuapp.com/${nameImage}`; /* https://star2impact-pollution.herokuapp.com/ */

    const searchReport = await report.findOne({
      where: {
        id: {
          [Op.eq]: id,
        },
      },
    });
    if (!searchReport) {
      res.send({ messagge: "non abbimo trovato il report!!" });
    } else {
      await fs.unlinkSync(
        path.join(__dirname, "../images/" + searchReport.dataValues.nameImage)
      );
      const updateReport = await report.update(
        { name, comment, temp, city, image, nameImage },
        {
          where: {
            id: {
              [Op.eq]: id,
            },
          },
        }
      );
      res.status(200).json({ updateReport });
    }
  } catch (error) {
    console.log(error);
  }
};

const Delete = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteReport = await report.findOne({
      where: {
        id: {
          [Op.eq]: id,
        },
      },
    });
    if (!deleteReport) {
      res.send("Non abbiamo trovato il report");
    } else {
      await fs.unlinkSync(
        path.join(__dirname, "../images/" + deleteReport.dataValues.nameImage)
      );
      await report.destroy({
        where: {
          id: {
            [Op.eq]: id,
          },
        },
      });
    }
    res.send({ messagge: "report cancellato" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  index,
  getReport,
  create,
  update,
  Delete,
};
