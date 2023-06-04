function GetPrint()
{
    /*For Print*/
    window.print();
}


function BtnAdd()
{
    /*Add Button*/
    var v = $("#TRow").clone().appendTo("#TBody") ;
    $(v).find("input").val('');
    $(v).removeClass("d-none");
    $(v).find("th").first().html($('#TBody tr').length - 1);
}
/*---------------Duplicate -------*/
function BtnAdded() 
{
    var V = $("#FRow").clone().appendTo("#FBody") ;
    $(V).find("input").val('');
    $(V).removeClass("d-none");
    $(V).find("th").first().html($('#FBody tr').length - 1);

}

function BtnDeled(V)
{
    $(V).parent().parent().remove(); 
    GetTotal();

     $("#FBody").find("tr").each(
     function(index)
     {
        $(this).find("th").first().html(index);
     }
    );

}

function BtnDel(v)
{
    /*Delete Button*/
       $(v).parent().parent().remove(); 
       GetTotal();

        $("#TBody").find("tr").each(
        function(index)
        {
           $(this).find("th").first().html(index);
        }

       );
}


/*----save function----*/

async function saveAs(){
fileHandler = await window.showSaveFilePicker();
const file = await fileHandler.createWritable();
await file.write(document.querySelector('#content').innerHTML);
await file.close();
}
