/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
   //your code here
   right();
   left();
   right();
   left();
   last();
   
   
}
function right(){
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   turnLeft();
   move();
   turnLeft();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();

}
function left(){
   turnRight();
   move();
   turnRight();
   
}
function last(){
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
}