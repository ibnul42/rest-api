const getLanguageList = (req, res) => {
  res.status(200).json({ msg: "User get" });
};

const getToneList = (req, res) => {
  res.status(200).json({ msg: "User get" });
};

const getToneDetail = (req, res) => {
  const id = req.params.id;
  res.status(200).json({ msg: `User tone ${id}` });
};
const getUseCaseList = (req, res) => {
  res.status(200).json({ msg: "User get" });
};
const getUseCaseDetail = (req, res) => {
  res.status(200).json({ msg: "User get" });
};

module.exports = {
  getLanguageList,
  getToneList,
  getToneDetail,
  getUseCaseList,
  getUseCaseDetail,
};
