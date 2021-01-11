const Intern = require('../lib/Intern')

const intern = new Intern('Peter', 1, 'UCF');

test('creates an intern object', () => {

    expect(intern.name).toBe('Peter');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.stringContaining('@'));
    expect(intern.role).toEqual('Intern');
    expect(intern.school).toEqual('UCF');
});

test('gets intern\'s name', () => {
    expect(intern.getName()).toEqual(expect.stringContaining(intern.name));
});

test('gets intern\'s ID', () => {
    expect(intern.getId()).toEqual(expect.stringContaining(`${intern.id}`));
});

test('gets intern\'s email', () => {
    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email));
});

test('gets intern\'s role', () => {
    expect(intern.getRole()).toEqual(expect.stringContaining(intern.role));
});

test('gets intern\'s school', () => {
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});