import USERS from "../../fixtures/users.json";
import { AllUsersUseCase} from "../../src/usecases/all-users.usecase"
import { UsersRepository} from "../../src/repositories/users.repository"

jest.mock("../../src/repositories/users.repository");

describe("All users UseCase", () => {
    beforeEach(() => {
        UsersRepository.mockClear();
    })

    it("should execute correct", async () => {

        UsersRepository.mockImplementation(() =>{
            return{
                getAllUsers: () => {
                    return USERS;
                }
            }
        })
        const useCase = new AllUsersUseCase();
        const users = await useCase.execute();
        expect(users).toHaveLenght(30)
    })
})