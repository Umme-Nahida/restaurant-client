import useAxiosPublic from "../Hooks/useAxiosPublic"

export const getUserRole = async email =>{
  const {data} = await useAxiosPublic.get(`/getUserRole/${email}`)
  return data
}