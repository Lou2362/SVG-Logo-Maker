class Shape { 
    constructor(color, text, textColor) {
        this.color =color;
        this.text = text;
        this.textColor = textColor;
    }
    setColor(color) {
        this.color = color
    }
    setText(text) {
        this.text= text;
    }
    setTextColor(textColor) {
        this.textColor = textColor;
    }

    render() {
        throw new Error("Render must be completed");
    }
}

class Circle extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
    }
    render() {
        return `
        <circle cx="50" cy="50" r="40" fill="${this.color} />
        <text x="50" y="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        `;
    }
}

class Square extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
    }
    render() {
        return `
        <rect width="100" height="100" fill="${this.color} />
        <text x="50" y="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        `;
    }
}

class Triangle extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
    }
    render() {
        return `
        <polygon points="50,0 100,100 0,100" fill="${this.color} />
        <text x="50" y="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        `;
    }
}

export { Circle, Square, triangle };