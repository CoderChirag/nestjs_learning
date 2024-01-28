import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {
	constructor(@InjectRepository(User) private repo: Repository<User>) {}
	async create(email: string, password: string) {
		const user = this.repo.create({ email, password });

		return this.repo.save(user);
	}

	async findOne(id: number) {
		const user = await this.repo.findOneBy({ id });

		if (!user) {
			throw new NotFoundException("No user found with the given id.");
		}
		return user;
	}

	async find(email: string) {
		return this.repo.find({ where: { email } });
	}

	async update(id: number, attrs: Partial<User>) {
		const user = await this.repo.findOneBy({ id });

		if (!user) {
			throw new NotFoundException("No user found with the given id.");
		}

		Object.assign(user, attrs);
		return this.repo.save(user);
	}

	async remove(id: number) {
		const user = await this.repo.findOneBy({ id });

		if (!user) {
			throw new NotFoundException("No user found with the given id.");
		}

		return this.repo.remove(user);
	}
}
