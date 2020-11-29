
import{pretty} from './Node'

let kapre=new pretty(23,21)
    console.log(kapre.sum())
    
    kapre.set_a(1000);// setting up a with setter method
    let res=kapre.get_a();//getting the value of a usinge getter method 
    console.log(res)
    console.log(kapre.sum())
