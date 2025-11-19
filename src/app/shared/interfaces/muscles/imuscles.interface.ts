
export interface Imuscles {
  _id: string;
  name: string;
}



export interface IMusclesResponse {
  message: string;
  musclesGroup: Imuscles[];
}
