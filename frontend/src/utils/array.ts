import {nanoid} from "nanoid";

export function createArrayWithIds(length: number){
    return  Array.from({ length }, () => {
      return { id: nanoid() };
    })
  }