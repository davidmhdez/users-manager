import UserRepository from "./domain/repository/UserRepository";
import TYPES from "./domain/repository/Types";
import UserRepositoryImp from "./data/Api/User/UserRepositoryImp";
import {Container} from "inversify";
import CreateUserUseCase from "./domain/interactor/User/CreateUserUseCase"
import GetUsersUseCase from "./domain/interactor/User/GetUsersUseCase";
import DeleteUserUseCase from "./domain/interactor/User/DeleteUserUseCase";
import UpdateUserUseCase from "./domain/interactor/User/UpdateUserUseCase";

const container = new Container();
container.bind<UserRepository>(TYPES.UserRepository).to(UserRepositoryImp);
container.bind<CreateUserUseCase>(TYPES.CreateUserUseCase).to(CreateUserUseCase);
container.bind<GetUsersUseCase>(TYPES.GetUsersUseCase).to(GetUsersUseCase);
container.bind<DeleteUserUseCase>(TYPES.DeleteUserUseCase).to(DeleteUserUseCase);
container.bind<UpdateUserUseCase>(TYPES.UpdateUserUseCase).to(UpdateUserUseCase);

export default container;