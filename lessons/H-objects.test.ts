// Ch 6: Interface extends + Utility types
import { describe, it, expect } from "bun:test";

// ─── Task 1: Interface extends ───
// Create a BaseEntity interface with `id: string` and `createdAt: Date`.
// Then refactor User and Product to use `extends BaseEntity`.

type BaseEntity = {
  id: string;
  createdAt: Date;
  name: string;
};

interface User extends BaseEntity {
  email: string;
}

interface Product extends BaseEntity {
  price: number;
}

// ─── Task 2: Utility types ───
// Create these from User:
// - PublicUser: only name and email (Pick)
// - UserWithoutId: everything except id (Omit)
// - PartialUser: everything optional (Partial)

type PublicUser = Pick<User, "name" | "email">;
type UserWithoutId = Omit<User, "id">;
type PartialUser = Partial<User>;

// ─── Tests ───
describe("Ch 6 — Objects", () => {
  it("Task 1: User requires id, createdAt, name, email", () => {
    const user: User = {
      id: "1",
      createdAt: new Date(),
      name: "Alice",
      email: "alice@test.com",
    };
    expect(user).toBeTruthy();
  });

  it("Task 1: Product requires id, createdAt, name, price", () => {
    const product: Product = {
      id: "1",
      createdAt: new Date(),
      name: "Widget",
      price: 29.99,
    };
    expect(product).toBeTruthy();
  });

  it("Task 2: PublicUser only allows name and email", () => {
    const pub: PublicUser = { name: "Alice", email: "a@test.com" };
    expect(pub.name).toBe("Alice");
    // Extra fields should not be assignable:
    // @ts-expect-error — id should not exist on PublicUser
    pub.id satisfies string;
  });

  it("Task 2: UserWithoutId has everything except id", () => {
    const noId: UserWithoutId = {
      createdAt: new Date(),
      name: "Bob",
      email: "b@test.com",
    };
    expect(noId.name).toBe("Bob");
  });

  it("Task 2: PartialUser makes everything optional", () => {
    const empty: PartialUser = {};
    expect(empty).toEqual({});
  });
});
