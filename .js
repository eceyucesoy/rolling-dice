function rollDice()
{
    var result=Math.ceil(Math.random()*6);
    document.getElementById("imgbox1").setAttribute("src","images/dice"+result+".png");
    result =Math.ceil(Math.random()*6);
    document.getElementById("imgbox2").setAttribute("src","images/dice"+result+".png");
}
