// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {

    $("#flip01").click(function () {

        $("#panel1").slideToggle("slow")

    })

    $("#flip02").click(function () {

        $("#panel2").slideToggle("slow")

    })

    $("#flip03").click(function () {

        $("#panel3").slideToggle("slow")

    })

    //DATOS DEL PACIENTE 
    $("#flip").click(function () {
        $("#panel").slideToggle("slow")
    })

    //ANTECEDENTES FAMILIARES
    $("#flip1").click(function () {
        $("#panel1").slideToggle("slow")
    })

    //ANTECEDENTES CLINICOS
    $("#flip2").click(function () {
        $("#panel2").slideToggle("slow")
    })

    //ANTECDENETES SALUD OCUPACIONAL
    $("#flip3").click(function () {
        $("#panel3").slideToggle("slow")
    })


    $("#siguiente1").click(function () {
        $("#panel1").slideToggle("slow")
    })
    $("#siguiente2").click(function () {
        $("#panel2").slideToggle("slow")
    })
    $("#siguiente3").click(function () {
        $("#panel3").slideToggle("slow")
    })

    $("#boton0").click(function () {
        $("#panel").slideToggle("slow")
    })

    $("#boton1").click(function () {
        $("#panel1").slideToggle("slow")
    })
    $("#boton2").click(function () {
        $("#panel2").slideToggle("slow")
    })
    $("#boton3").click(function () {
        $("#panel3").slideToggle("slow")
    })

    alert("Usted ingresará datos en el formulario EMPA")
});