import { Body, Controller, Post } from "@nestjs/common";
import { UsersService } from "../services/users.service";
import { CreateUserDto } from "../dtos/create-user.dto";

@Controller("auth")
export class UsersController {
	constructor(public usersService: UsersService) {}

	@Post("/signup")
	createUser(@Body() body: CreateUserDto) {}
}
