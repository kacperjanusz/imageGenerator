 
import { EROFS } from 'constants';
import {ImageGenerator} from'./ImageGenerator'
import axios from 'axios'


export const createCurrentProfileImage = async (id:number) => {

   // try {
   await axios.get(`http://localhost:4000/profiles/${id}`)  
    .then(
        (response: any) => {
            const imageGenerator = new ImageGenerator(response.data)
            imageGenerator.saveImage()
        }
    )
   
}
   
