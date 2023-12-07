import { square, circle, triangle } from "./shapes";

describe("Shape test", () => {
    test("Square", () => {
        const square = new Square("red", "square", "white");
        expect(square.render()).toEqual(`
        <rect width="100" height="100" fill="red" />
        <text x="50" y="50" text-anchor="middle" fill="white">square</text>
        `);
    });
    test("Circle", () => {
        const circle = new Circle("red", "circle", "white");
        expect(circle.render()).toEqual(`
        <circle cx="50" cy="50" r="40" fill="red" />
        <text x="50" y="50" text-anchor="middle" fill="white">circle</text>
        `);
    });
    test("Triangle", () => {
        const triangle = new Triangle("red", "triangle", "white");
        expect(triangle.render()).toEqual(`
        <polygon points="50,0 100,100 0,100" fill="red" />
        <text x="50" y="50" text-anchor="middle" fill="white">triangle</text>
        `);
    });
});
