import type { Pet } from "./model"

export interface PetRepository {
  list(): Promise<Pet & { id: number }>
}
