import type { Pet } from "../domain/model"
import type { PetRepository } from "../domain/repository"

export class PetRepositoryOnMemory implements PetRepository {
  list(): Promise<Pet & { id: number }> {
    throw new Error("Method not implemented.")
  }
}
