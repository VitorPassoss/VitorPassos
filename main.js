function modalOne(){
     let modal = document.querySelector('.modaldiv')
     modal.showModal()
}

function modalTwo(){
    let modal = document.querySelector('.modaldiv1')
    modal.showModal()
}



function exitOne(){
    let modal = document.querySelector('.modaldiv')
    modal.close()
}

function exitTwo(){
    let modal = document.querySelector('.modaldiv1')
    modal.close()
}


//<![CDATA[
    $('#noAdmin').val('928150-7568');// Nomor Tujuan
    $('.whatsapp-btn').click(function () {
    $('#whatsapp').toggleClass('toggle');});
    // Fungsi Tombol Whatsapp Kirim!
            $('#whatsapp .submit').click(WhatsApp);
            $("#whatsapp input, #whatsapp textarea").keypress(function () {
                if (event.which == 13) WhatsApp();
            });
            
    // Fungsi Data Tulisan yang dikirim
    function WhatsApp() {
                var ph = '';
                if ($('#whatsapp .nama').val() == '') { // Cek Nama
                    ph = $('#whatsapp .nama').attr('placeholder');
                    alert('Silahkan tulis ' + ph);
                    $('#whatsapp .nama').focus();
                    return false;
                } else if ($('#whatsapp .email').val() == '') { // Cek email
                    ph = $('#whatsapp .email').attr('placeholder');
                    alert('Silahkan tulis ' + ph);
                    $('#whatsapp .website').focus();
                    return false;
                } else if ($('#whatsapp .nomor').val() == '') { // Cek nomor
                    ph = $('#whatsapp .nomor').attr('placeholder');
                    alert('Silahkan tulis ' + ph);
                    $('#whatsapp .nomor').focus();
                    return false;
                } else if ($('#whatsapp .kota').val() == '') { // Cek kota
                    ph = $('#whatsapp .kota').attr('placeholder');
                    alert('Silahkan tulis ' + ph);
                    $('#whatsapp .email').focus();
                    return false;
                } else if ($('#whatsapp .licensi').val() == '') { // Cek licensi
                    ph = $('#whatsapp .licensi').attr('placeholder');
                    alert('Silahkan pilih ' + ph);
                    $('#whatsapp .licensi').focus();
                    return false;
                } else if ($('#whatsapp .pembayaran').val() == '') { // Cek bayar
                    ph = $('#whatsapp .pembayaran').attr('placeholder');
                    alert('Silahkan pilih ' + ph);
                    $('#whatsapp .pembayaran').focus();
                    return false;
                } else if ($('#whatsapp .informasi').val() == '') { // Cek dari
                    ph = $('#whatsapp .informasi').attr('placeholder');
                    alert('Silahkan pilih ' + ph);
                    $('#whatsapp .informasi').focus();
                    return false;
                } else {
                    // Check Device (Mobile/Desktop)
                    var url_wa = 'https://web.whatsapp.com/send';
                    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                        url_wa = 'whatsapp://send/';
                    }
                    // Get Value
                    var tujuan = $('#whatsapp .tujuan').val(),
                        via_url = location.href,
                        licensi =$('#whatsapp .licensi').val(),
                        nama = $('#whatsapp .nama').val(),
                        email = $('#whatsapp .email').val(),
                        nomor = $('#whatsapp .nomor').val(),
                        kota = $('#whatsapp .kota').val(),
                        pembayaran = $('#whatsapp .pembayaran').val(),
                        informasi = $('#whatsapp .informasi').val();
                    $(this).attr('href', url_wa + '?phone=+55' + tujuan + '&text=' +
                   ' %2ALicensi%2A: ' + licensi + '%0A' +
                   '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _%0A' +
                   ' %0A%2ANama%2A: ' + nama + 
                   ' %0A%2AEmail%2A: ' + email + 
                   ' %0A%2ANomor WhatsApp%2A: ' + nomor + 
                   ' %0A%2AKota%2A: ' + kota + '%0A' +
                   '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _%0A%0A' +
                   ' %0A%2AMetode Pembayaran%2A: ' + pembayaran + '%0A' +
                   ' %0A%2ASaya dapat informasi dari%2A: ' + informasi + '%0A' + 
                   ' %0A%2ADari%2A ' + via_url);
                    var w = 960,
                        h = 540,
                        left = Number((screen.width / 2) - (w / 2)),
                        tops = Number((screen.height / 2) - (h / 2)),
                        popupWindow = window.open(this.href, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' + w + ', height=' + h + ', top=' + tops + ', left=' + left);
                    popupWindow.focus();
                    return false;
                }
            }//]]>
