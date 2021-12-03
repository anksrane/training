/**
 * Ways of access object properties
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);
//Ways of access object properties
console.log("The Pocket: ",backpack.pocketNum);
console.log("The Pocket: ",backpack["pocketNum"]);
var query = "pocketNum";
console.log("The Pocket: ",backpack[query]);

