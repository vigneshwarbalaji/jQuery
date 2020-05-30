$(document).ready(function() {
    // $("#btn1").click(function() {
    //     //alert("text" + $("#test").text("#demo"));

    //     $("#demo").text("#test");
    // });

    // $("#btn2").click(function() {
    //     //alert("html" + $("#test").html("#demo"));

    //     $("#demo").html("#test");
    // });

    $("#btn3").click(function() {
        var r = $("#in").val();
        //console.log(a);
        $("#test").text(r);
    });

    $("#add").click(function() {
        var a = Number($("#a").val());
        var b = Number($("#b").val());

        var res = a + b;
        //console.log(a);
        $("#test").text(res);
    });

    $("#sub").click(function() {
        var a = Number($("#c").val());
        var b = Number($("#d").val());

        var res = a - b;
        //console.log(a);
        $("#test").text(res);
    });

    $("#mul").click(function() {
        var a = Number($("#e").val());
        var b = Number($("#f").val());

        var res = a * b;
        //console.log(a);
        $("#test").text(res);
    });

    $("#div").click(function() {
        var a = Number($("#g").val());
        var b = Number($("#h").val());

        var res = a / b;
        //console.log(a);
        $("#test").text(res);
    });

    $("#append").click(function() {
        var str1 = $("#insertLast").val();
        // var str2 = $("#h").val();

        $("#new").append(str1);

        //var res = a / b;
        //console.log(a);
    });

    $("#prepend").click(function() {
        var str2 = $("#insertFirst").val();
        // var str2 = $("#h").val();

        $("#new").prepend(str2);

        //var res = a / b;
        //console.log(a);
    });

    $("#addRow").click(function() {
        var number = $("#number").val();
        var name = $("#name").val();
        // var str2 = $("#h").val();
        var count = 1;

        if (count == 1) {

        }
        $("#addTable").append("<tr><td>" + number + "</td><td>" + name + "</td></tr><br>");

        //var res = a / b;
        //console.log(a);
    });
});