radio.onReceivedValue(function (name, value) {
    led.toggle(4, 4)
    serial.writeString("{")
    serial.writeString("\"t\":" + radio.receivedPacket(RadioPacketProperty.Time) + ",")
    serial.writeString("\"s\":" + radio.receivedPacket(RadioPacketProperty.SerialNumber) + ",")
    serial.writeString("\"" + name + "\":" + value)
    serial.writeLine("}")
    led.toggle(4, 4)
})
serial.redirectToUSB()
radio.setGroup(1)
images.createImage(`
    # # . . .
    # . # . .
    # # . . .
    # . # . .
    . . . . .
    `).showImage(0)
basic.forever(function () {
    serial.writeLine("PING")
    basic.pause(1000)
})
