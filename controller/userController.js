const userModel = require('../model/userModel')
exports.insert = async (req, res) => {
    const data = await userModel.create(req.body)
    res.status(200).json({
        status: "success",
        data
    })
}
exports.getdata = async (req, res) => {
    const data = await userModel.find()
    res.status(200).json({
        status: "Success",
        data
    })
}