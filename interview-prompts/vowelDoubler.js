/* 

Given an array of characters, return the array with every vowel doubled. For example:
['w','h','a','t',' ','o','n',' ','e','a','r','t','h',' ','a','r','e',' ','y','o','u',' ','t','a','l','k','i','n','g',' ','a','b','o','u','t','?']

==>

['w','h','a','a','t',' ','o','o','n',' ','e','e','a','a','r','t','h',' ','a','a','r','e','e',' ','y','o','o','u','u',' ','t','a','a','l','k','i','i','n','g',' ','a','a','b','o','o','u','u','t','?']
Constraints
The challenge in this problem is in meeting its (arbitrary) constraints:

Do not convert into strings or manipulate strings at all.
Do not create any other data structures.
In particular, don't instantiate a new array.
The big-O of the solution should be O(n).

Hints
Try not to use the hints if you can help it, but if you do want one, use ROT-13 to decode.

Hint #1
Pna lbh pbzchgr gur yratgu bs gur qbhoyrq neenl?

Hint #2
Pna lbh pbzchgr gur qrfgvangvba vaqrk bs rirel punenpgre?

Hint #3
Vgrengvat naq znavchyngvat gur neenl va erirefr pna or n cbjreshy grpuavdhr sbe nibvqvat univat gb fuvsg nyy ryrzragf gb gur evtug (guhf xrrcvat guvatf B(a)).

Hint #4
Cfrhqbpbqr:
pbhag gur ibjryf naq gurerol pbzchgrq gur erdhverq yratgu bs gur qbhoyrq neenl
fpna gur neenl va erirefr sebz vgf bevtvany raq...
naq svyy va gur neenl sebz vgf arj raq va erirefr, qbhoyvat punef naq qrperzragvat gur vaqrk nppbeqvatyl.

*/

const vowelDoubler = (array) => {
  let l = array.length;
  while (l > 0) {
    if (['a', 'e', 'i', 'o', 'u'].includes(array[0])) {
      array.push(array[0]);
    }
    array.push(array.shift());
    l -= 1;
  }

  return array;
}

const ex = ['w','h','a','t',' ','o','n',' ','e','a','r','t','h',' ','a','r','e',' ','y','o','u',' ','t','a','l','k','i','n','g',' ','a','b','o','u','t','?'];


console.log(vowelDoubler(ex)); // ['w','h','a','a','t',' ','o','o','n',' ','e','e','a','a','r','t','h',' ','a','a','r','e','e',' ','y','o','o','u','u',' ','t','a','a','l','k','i','i','n','g',' ','a','a','b','o','o','u','u','t','?']