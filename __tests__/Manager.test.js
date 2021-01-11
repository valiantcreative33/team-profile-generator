const Manager = require ('../lib/Manager');

const manager = new Manager('Peter', 1, 7777777777);

test('creates a manager object', () => {

    expect(manager.name).toBe('Peter');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.stringContaining('@'));
    expect(manager.role).toEqual('Manager');
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets manager\'s name', () => {
    expect(manager.getName()).toEqual(expect.stringContaining(manager.name));
});

test('gets manager\'s ID', () => {
    expect(manager.getId()).toEqual(expect.stringContaining(`${manager.id}`));
});

test('gets manager\'s email', () => {
    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email));
});

test('gets manager\'s role', () => {
    expect(manager.getRole()).toEqual(expect.stringContaining(manager.role));
});

test('gets manager\'s office number', () => {
    expect(manager.getOfficeNumber()).toEqual(expect.stringContaining(`${manager.officeNumber}`));
});