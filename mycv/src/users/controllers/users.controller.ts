import { Body, Controller, Post } from "@nestjs/common";
import { UsersService } from "../services/users.service";
import { CreateUserDto } from "../dtos/create-user.dto";

@Controller("auth")
export class UsersController {
	constructor(public usersService: UsersService) {}

	@Post("/signup")
	async createUser(@Body() body: CreateUserDto) {
		const { email, password } = body;
		return await this.usersService.create(email, password);
	}
}
