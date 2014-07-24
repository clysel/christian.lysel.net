<script language="JavaScript">

/* Random Image Script- By JavaScript Kit (http://www.javascriptkit.com) 
Over 400+ free JavaScripts here!
Keep this notice intact please */

function random_imglink(){
var myimages=new Array()
//specify random images below. You can have as many as you wish
myimages[1]="image1.gif"
myimages[2]="image2.gif"
myimages[3]="image3.gif"
myimages[4]="image4.gif"
myimages[5]="image5.gif"
myimages[6]="image6.gif"

var ry=Math.floor(Math.random()*myimages.length)
if (ry==0)
ry=1
document.write('<img src="/images/'+myimages[ry]+'" width="1260" height="240" alt"">')
}
random_imglink()
</script>
