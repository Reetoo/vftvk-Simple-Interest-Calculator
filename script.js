<html>
    <head>
        <title>Simple Interest Calculator</title>
<script>
function compute()
{
  var  principal = document.getElementById("principal").value;
 var rate=document.getElementById("rate").value;
  var years = document.getElementById("years").value;
 interest=document.getElementById("interest").value;
 interest.innerText="The interest is " + (principal*years*rate/100);
 var year=new Date().getFullYear()+parseInt(years);

}
</script>
</head>
<body>
    <h1>Simple Interest Calculator</h1>

    Amount: <input id="principal"><br/>
    Rate: <input id="rate"><br/>
    No.of Years: <input  id="years"><br/>
    <button onclick="compute()">compute interest</button>
    <p id="interest"></p>

    <script>
        function updateRate(rateval){
            var rateval=document.getElementById("rate").value;
            document.getElementById("rate_val").innerText=rateval;
        }
    </script>

</body>
</html>
