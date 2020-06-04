(function()
{
var names=["Yaakov","John","Jen","Paul","Frank","Laura","Jason","Larry","Paula","Jim"];
for(var i=0;i<names.length;i++)
var fl=names[i].charAt(0).toLowerCase();
if(fl=='j'){
	byeSpeaker.speak(names[i]);
}
else
{
helloSpeaker.speak(names[i]);
}
}}}();
