
import { createCanvas, loadImage } from 'canvas'
import fs from 'fs'


class ImageGenerator {

readonly width = 1200
readonly height = 600
private canvas = createCanvas(this.width, this.height)
private context = this.canvas.getContext('2d')

id: number = 0
name: string =''
avatar: string = ''
description : string = ''

constructor (data: any) {
    this.id = data.id
    this.name = data.name
    this.avatar = data.image
    this.description = data.description
    this.context.fillStyle = '#ffs'
    this.context.font = 'bold 20px'
    this.context.fillRect(0, 0, this.width, this.height)
    this.context.textAlign = 'center'
    this.context.fillStyle = 'black'
    this.context.fillText(this.name, 400, 900)
    this.context.fillText(this.description, 400, 900)
    this.context.fillText(this.description, 400, 500, 300)
}

 saveImage() {
     
    loadImage(`${this.avatar}`).then(image => {
        this.context.drawImage(image, 400, 500, 200, 200)
        const buffer = this.canvas.toBuffer('image/png')
    fs.writeFileSync('./images/image.png', buffer)
      })
   
 }

}

export {ImageGenerator}