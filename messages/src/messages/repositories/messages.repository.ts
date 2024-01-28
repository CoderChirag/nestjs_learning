import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";
import { v4 } from "uuid";

export interface Message {
	id: string;
	content: string;
}

@Injectable()
export class MessagesRepository {
	async findAll() {
		const messagesString = await readFile("./messages.json", "utf-8");
		const messages: { [key: string]: Message } = JSON.parse(messagesString);

		return Object.values(messages);
	}

	async findOne(id: string) {
		const messages = await this.findAll();
		return messages.find((message: { id: string }) => message.id === id);
	}

	async create(content: string) {
		const messages = await this.findAll();
		const newMessage: Message = { id: v4(), content };
		messages.push(newMessage);

		await writeFile("./messages.json", JSON.stringify(messages));
		return newMessage;
	}
}
