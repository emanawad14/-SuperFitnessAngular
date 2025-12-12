 
 export type EditProfile = { weight: number }|{ activityLevel: string }|{ goal: string };


export interface EditProfileResponse {
  message: string
  user: User
 }

export interface User {
  _id: string
  firstName: string
  lastName: string
  email: string
  gender: string
  age: number
  weight: number
  height: number
  activityLevel: string
  goal: string
  photo: string
  createdAt: string
}

 
