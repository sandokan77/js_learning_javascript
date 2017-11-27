const u1 = { name: 'Cynthia' };
const u2 = { name: 'Jackson' };
const u3 = { name: 'Olive' };
const u4 = { name: 'James' };

const userRoles = new Map();

userRoles.set(u1, 'User');
userRoles.set(u2, 'User');
userRoles.set(u3, 'Admin');
// poor James...we don't assign him a role

//or doing it chainable
userRoles
.set(u1, 'User')
.set(u2, 'User')
.set(u3, 'Admin');

//or passing and array for Map
const userRoles = new Map([
    [u1, 'User'],
    [u2, 'User'],
    [u3, 'Admin'],
    ]);

//get element from Map
userRoles.get(u2); // "User"

/* If you call get on a key that isn’t in the map, it will return undefined. Also, you can
use the has() method to determine if a map contains a given key: */

userRoles.has(u1); // true
userRoles.get(u1); // "User"
userRoles.has(u4); // false
userRoles.get(u4); // undefined

/* If you call set() on a key that’s already in the map, its value will be replaced: */
userRoles.get(u1); // 'User'
userRoles.set(u1, 'Admin');
userRoles.get(u1); // 'Admin'

//The size property will return the number of entries in the map:
userRoles.size; // 3

//another example:
map.set("1","first element");
map.set("2","second element");
map.set("3","third element");

//iterating through map:
for (i of map.keys()) console.log(i); 
for (i of map.values()) console.log(i);
for (i of map.entries()) console.log(i); //to get the whole elements, both their key and value

//delete single entry from map
map.delete("2"); //returns true and "second element" is deleted
map.size; //2 (reduced from 3)
map.clear(); //removes all entries from map so size will be 0

//Weak Maps




