import PersonModel from "../models/models";
import axios from "axios"
// https://www.restapitutorial.com/httpstatuscodes.html ---> status codes

// interface User {
//   title: string,
// }


const getUsers = async function() {
  try {
      const user = await axios.get("https://randomuser.me/api/?results=5")
      
      return user.data.results
  } catch {
    return "Error de busqueda"
  }
}

// export const getPosts = async (req:any, res:any) => {
//   try{
//     const postMessages = await PersonModel.find();

//         const users = await getUsers();
//     res.status(200).json(users);
//   } catch (error: any) {
//     res.status(404).json({message: error.message});
//   }
// }



export const getPosts = async (req:any, res:any) => {
  try{
    const postMessages = await PersonModel.find();

        const users = await getUsers();

          users.map((e: any) => PersonModel.create({
            name:{ first: e.name.first, last: e.name.last},
            gender: e.gender,
            location: {
              number: e.location.street.number,
              streetName: e.location.street.name,
              locality: e.location.state,
              postalCode: String(e.location.postcode)
            }
          }))


    res.status(200).json(users);
  } catch (error: any) {
    res.status(404).json({message: error.message});
  }
}



export const createPost = async (req:any, res:any) => {
    const {name, gender, location, birthdate, email} = req.body;
    try {

        const newPerson = new PersonModel({
            name,
            gender,
            location,
            birthdate,
            email
        });
        newPerson.save();
        res.status(200).json(newPerson);

    } catch (error: any) {
        res.status(404).json({message: error.message});
    }

}
