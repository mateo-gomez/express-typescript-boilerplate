import app from "../src/app";
import request from "supertest";

describe("server", () => {
	test("init server", () => {
		expect(true).toBe(true);
	});
});

describe("api", () => {
	it("should return 200 OK PONG", () => {
		return request(app).get("/ping").expect(200, "pong");
	});
});
