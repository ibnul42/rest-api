const axios = require("axios");
const { response } = require("express");

const config = {
  headers: {
    Authentication: `Bearer ${process.env.API_KEY}`,
    "Content-Type": "application/json",
  },
};

// get all languages list
const getLanguageList = async (req, res) => {
  const response = await axios.get(`https://api.rytr.me/v1/languages`, config);
  res.status(200).json(response.data);
};

// gett all tones list
const getToneList = async (req, res) => {
  const response = await axios.get(`https://api.rytr.me/v1/tones`, config);
  res.status(200).json(response.data);
};

// gett tone by id
const getToneDetail = async (req, res) => {
  const id = req.params.id;
  const response = await axios.get(
    `https://api.rytr.me/v1/tones/${id}`,
    config
  );
  if (!response.data.data) {
    res.status(400).json({
      data: "Sorry the Use Tone id is invalid, please try again.",
      ...response.data,
    });
  } else {
    res.status(200).json(response.data);
  }
};

// gett all use cases list
const getUseCaseList = async (req, res) => {
  const response = await axios.get(`https://api.rytr.me/v1/use-cases`, config);

  res.status(200).json(response.data);
};

// gett use case by id
const getUseCaseDetail = async (req, res) => {
  const id = req.params.id;
  const response = await axios.get(
    `https://api.rytr.me/v1/use-cases/${id}`,
    config
  );

  if (!response.data.data) {
    res.status(400).json({
      data: "Sorry the Use case id is invalid, please try again.",
      ...response.data,
    });
  } else {
    res.status(200).json(response.data);
  }
};

// post Ryte
// Sypported format - html | text
// Supported creativity levels creativityLevel - default | none | low | medium | high | max
// Supported variations - 1 to 3
const postRyte = async (req, res) => {
  const data = req.body;
  const response = await axios.post(
    `https://api.rytr.me/v1/ryte`,
    data,
    config
  );
  if (!response.data.data) {
    res.status(400).json({
      data: "Sorry invalid input, please try again.",
      ...response.data,
    });
  } else {
    res.status(200).json(response.data);
  }
};

module.exports = {
  getLanguageList,
  getToneList,
  getToneDetail,
  getUseCaseList,
  getUseCaseDetail,
  postRyte,
};
