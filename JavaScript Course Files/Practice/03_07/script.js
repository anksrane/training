/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
const laptop={
    cpu_Brand:"Intel",
    cpu_Freq:2.3,
    cpu_Core:8,
    //Normal ShortHand Function
    display:function(){
        console.log("Before Change \n",this.cpu_Brand,"\n",this.cpu_Freq,"\n",this.cpu_Core);
    },
    changeFrequency:function(freq){
        this.cpu_Freq=freq;
    },
    //Arrow Function
    changeCore:(core_no)=>{
        return this.cpu_Core=core_no;
    }
};
laptop.display();
laptop.changeFrequency(3.8);
laptop.changeCore(6);
console.log("After Change")
console.log("Brand",laptop.cpu_Brand);
console.log("Frequency",laptop.cpu_Freq);
console.log("Core",laptop.cpu_Core);