const Engineer = require('../lib/Engineer');

const engineer = new Engineer('Peter', 1, 'petercodes');

test('creates an engineer object', () => {

    expect(engineer.name).toBe('Peter');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.stringContaining('@'));
    expect(engineer.role).toEqual('Engineer');
});

test('gets engineer\'s name', () => {
    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name));
});

test('gets engineer\'s ID', () => {
    expect(engineer.getId()).toEqual(expect.stringContaining(`${engineer.id}`));
});

test('gets engineer\'s email', () => {
    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email));
});

test('gets engineer\'s role', () => {
    expect(engineer.getRole()).toEqual(expect.stringContaining(engineer.role));
});

test('gets engineer\'s github', () => {
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));
});