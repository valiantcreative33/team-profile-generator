const Manager = require ('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Peter', 1, 7777777777);

    expect(manager.name).toBe('Peter');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.stringContaining('@'));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets manager\'s name', () => {
    const manager = new Manager('Peter', 1, 7777777777);

    expect(manager.getName()).toEqual(expect.stringContaining(manager.name));
});

test('gets manager\'s ID', () => {
    const manager = new Manager('Peter', 1, 7777777777);

    expect(manager.getId()).toEqual(expect.stringContaining(`${manager.id}`));
});

test('gets manager\'s email', () => {
    const manager = new Manager('Peter', 1, 7777777777);

    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email));

    expect(manager.getRole()).toBe('Manager');
});