/**
 * Create a Backpack object.
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
  // toggleLid: function (lidStatus) {
  //   this.lidOpen = lidStatus;
  // },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};
// function toggleLid(lidStatus){
//   backpack.lidOpen=lidStatus;
// }

//Arrow Function
var toggleLid=(lidStatus)=>{
  backpack.lidOpen=lidStatus;
}
console.log("before running funtion: ",backpack.lidOpen);
toggleLid(true);
console.log("After running funtion: ",backpack.lidOpen);