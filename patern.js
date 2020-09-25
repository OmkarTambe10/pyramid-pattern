<!DOCTYPE html>
<html lang="en-US">

<body>

<script>
var i, j;
var k = 65;
var n = 1
for(i=65; i<=68; i++)
{
 for(j=68; j>=65; j--)
 {
  if(j > i)
   document.write("&nbsp;&nbsp;");
  else
   document.write(String.fromCharCode(k++)+(n++)+"&nbsp;&nbsp;");
 }
 document.write("<br>");
}
</script>
  </body>
</html>
