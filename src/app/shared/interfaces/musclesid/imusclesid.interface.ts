
export interface ImusclesId {
  _id: string;
  name: string;
  image:string
}


export interface IMusclesIdResponse {
  message: string;
  musclesGroup: ImusclesId[];
}
