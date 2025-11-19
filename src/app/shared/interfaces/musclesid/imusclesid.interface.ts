import { Imuscles } from "../muscles/imuscles.interface";

export interface ImusclesId {
  _id: string;
  name: string;
  image:string
}


export interface IMusclesIdResponse {
  message: string;
  musclesGroup: Imuscles[];
  muscles :ImusclesId[];

}
