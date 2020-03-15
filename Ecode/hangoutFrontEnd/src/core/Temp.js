const a = 'desqwxu7vqhy';
const b = '65028';
const c = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidXNlci1vbmUifQ.1HfktmJgDrnnV7QGJI23mUEszdwtSxcP4ispggsuPqs';

module.exports = {
  a: a,
  b: b,
  c: c
};

/*

const username = client.feed('actor', 'name');

await username.addActivity({
  actor: 'name',
  verb: 'add',
  object: 'image',
  foreign_id: 'id',
  caption: 'message'
});

const another = client.feed('timeline', 'name');
await another.follow('actor', 'name');

const combfeeds = await another.get({ limit: 20 });

await username.removeActivity({ foreignId: 'id' });

*/
