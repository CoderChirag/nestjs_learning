import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	Query,
} from "@nestjs/common";
import { UsersService } from "../services/users.service";
import { CreateUserDto } from "../dtos/create-user.dto";
import { UpdateUserDto } from "../dtos/update-user.dto";

@Controller("auth")
export class UsersController {
	constructor(public usersService: UsersService) {}

	@Post("/signup")
	async createUser(@Body() body: CreateUserDto) {
		const { email, password } = body;
		return await this.usersService.create(email, password);
	}

	@Get("/:id")
	async findUser(@Param("id") id: string) {
		return this.usersService.findOne(parseInt(id));
	}

	@Get()
	async findAllUsers(@Query("email") email: string) {
		return this.usersService.find(email);
	}

	@Delete("/:id")
	async removeUser(@Param("id") id: string) {
		return this.usersService.remove(parseInt(id));
	}

	@Patch("/:id")
	async updateUser(@Param("id") id: string, @Body() body: UpdateUserDto) {
		return this.usersService.update(parseInt(id), body);
	}
}
