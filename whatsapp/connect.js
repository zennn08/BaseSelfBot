/*
HAI NAMAKU AQULZZ
YAH DISINI AKU SEBAGAI PEMULA MAU MENCOBA MEMBUAT BOT KU SENDIRI
YANG PASTINYA BANYAK COPY PASTE
OKE TERIMA KASIH
*/
const { WAConnection, MessageType } = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const fs = require('fs')
const { color } = require('../lib/color')

const xinz = new WAConnection()
exports.xinz = xinz

exports.connect = async() => {
    let authofile = './aqulzz.json'
	xinz.on('qr', qr => {
        qrcode.generate(qr, { small: true })
        console.log(`QR Siap, Scan Pack`)
    })
    /*
	xinz.on('credentials-updated', () => {
		fs.writeFileSync(authofile, JSON.stringify(xinz.base64EncodedAuthInfo(), null, '\t'))
		console.log(color('Wait....'))
	})
    */
	fs.existsSync(authofile) && xinz.loadAuthInfo(authofile)
	xinz.on('connecting', () => {
		console.log(color('Connecting...'))
	})
	xinz.on('open', () => {
		console.log(color('Welcome Owner'))
	})
	await xinz.connect({timeoutMs: 30*1000})
    fs.writeFileSync(authofile, JSON.stringify(xinz.base64EncodedAuthInfo(), null, '\t'))
    return xinz
}