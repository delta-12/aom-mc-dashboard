const express = require("express")
const router = express.Router()

const MinecraftServer = require("../../models/MinecraftServer")

router.get("/info", (req, res) => {
    MinecraftServer.findOne({ name: "AoM Minecraft Server"}).then(server => {
    if (server) {
        return res.status(200).json({ success: true, data: server })
    }
    else {
        return res.status(404).json({ success: false, error: "AoM Minecraft Server Not Found" })
    }
    })
})

module.exports = router