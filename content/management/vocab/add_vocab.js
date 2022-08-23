console.log($('.vocab').length);

let indexVocab = $('.vocab').length;

$('#add_vocab').click(function() {
    $('#vocab').append(`
                <tr class="vocab">
                  <th scope="row"></th>
                  <td>
                    <input type="text" name="vocab" class="edit_vocab">
                  </td>
                  <td>
                    <input type="text" name="main" onchange="changeVocab()" id="edit_vocab">
                  </td>
                  <td>
                    <button class="btn btn-outline-danger"  id="btn_delete_lesson" ><i class="bi bi-dash"></i></button>
                 </td>
                 <td>
                    <button class="btn btn-outline-info" style="display: none" id="accept_edit" onclick="addVocab()"><i class="bi bi-check2"></i></button>
                </td>
                </tr>
`);
});

$('#edit_vocab').change(() => {
    $("#accept_edit").css("display","block");
});

$('.edit_vocab').blur(() => {
    $("#accept_edit").css("display","none");
});

function addVocab () { 
    console.log('adadad');
 }

function changeVocab() { 
    $("#accept_edit").css("display","block");
 }