const tweetForm = document.querySelector('#tweetForm');
const tweetsContain = document.getElementById("tweets");
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputs = tweetForm.getElementsByTagName("input");
    //console.log(inputs);    
    for (var i = 0; i < inputs.length; i++) {
        /*var bTag = document.createElement("h5");
        bTag.innerText(inputs[i].value);
        tweetsContain.append.bTag;
        console.log(newTweet);*/
        //newTweet.appendChild(document.createTextNode(inputs[i].value));
        //newTweet.innerText = inputs[i].value;

        //CODE HAVE PROBLEM> NOT CREATING NEW LI
    }

});

const inputEvents = document.getElementById("inputEvents");
const h3 = document.querySelector('h3');
// inputEvents.addEventListener('change', function (e) {
//     console.log(inputEvents.value);
// }); //When Input is typed and focus gone change the value
inputEvents.addEventListener('input', function (e) {
    h3.innerText = inputEvents.value;
});

