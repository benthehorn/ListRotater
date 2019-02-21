# ListRotater

##### First clone the repo:

```sh
git clone https://github.com/benthehorn/ListRotater.git
```
##### cd into the directory you cloned the repo into : 
---
```sh
 cd ListRotater
 npm install
```

###### Run the code
```sh
  node rotate.js "[1,2,3,4,5,6]" 2
``` 

It should return [3,4,5,6,1,2]

##### to run the tests
---
```sh
 npm test
```

Because I am using two loops to iterate through the array I am using O(n) + O(n) swap operations, well I think!

The first loop will only iterate from the rotate_steps index to the end, and the second from the beginning of the array
to the rotate_steps index, so maybe it looks more like O(n - (array.length - rotate_steps)) + O(rotate_steps), but I know this isn't how it's written!
