$(document).ready(function(){

    document.addEventListener("backbutton", onBackKeyDown, false);

    function onBackKeyDown(e) {
        e.preventDefault();
        e.stopPropagation();
        navigator.notification.confirm("Apakah Anda mau menutup aplikasi ini?",
            function (buttonIndex) { ConfirmExit(buttonIndex); }, "Konfirmasi", "Ya,Tidak"
        );
    }

    function ConfirmExit(stat) {
        if (stat == "1") {
            navigator.app.exitApp();
        } else {
            return;
        };
    };

    $('#peta').on('click', function (e) {
  
        e.preventDefault();
        e.stopImmediatePropagation();
        
        $.mobile.changePage('#peta-plaza', { transition: 'slide' });       

    });

    $('#daftar').on('click', function (e) {

        e.preventDefault();
        e.stopImmediatePropagation();
        
        var tgl = new Date();
        var tg = tgl.getDate(); if(tgl<10){var tg='0'+tg.toString();}
        var bl = tgl.getMonth()+1; if(bl<10){var bl='0'+bl.toString();}
        var th = tgl.getFullYear();
        var dt = tgl.getSeconds();
        var mn = tgl.getMinutes();
        var jm = tgl.getHours();

        var tanggal = bl +'/'+ tg +'/'+ th;
        var jam = jm +':'+ mn +':'+ dt;
        var ktr = $('#ktrtelkom').val();
        var lyn = $('#lynplh').val();

        // generate kode booking antrian
        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWYZ";
        var string_length = 8;
        var randomstring = '';
        for (var i = 0; i < string_length; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            randomstring += chars.substring(rnum, rnum + 1);
        }

        $('#no_antrian').val(randomstring);  $("#no_antrian1").val(randomstring);
        $('#kantor').val(ktr);  $("#kantor1").val(ktr);
        $('#tanggal').val(tanggal); //$('#tanggal1').val(tanggal);
        $('#jam').val(jam); //$('#jam1').val(jam);
        $('#layanan').val(lyn); $("layanan1").val(lyn);

        if (ktr === undefined) {alert('Anda belum memilih lokasi layanan di Plaza Telkom, Pilih lokasi dahulu..!');}
        else
            {  alert('Anda mendaftar Antrian layanan di lokasi '+ ktr);
                $.mobile.changePage('#daftar-antrian', { transition: 'slide' });
            }

        // if (lyn === undefined) { alert('Anda belum memilih  layanan , Pilih layanan dahulu..!'); }
        // else 
        //     {alert('Anda mendaftar Antrian layanan  ' + lyn);
        //     $.mobile.changePage('#daftar-antrian', { transition: 'slide' });
        //     }       
    });


    $('#simpan').on('click', function (e) {

        e.preventDefault();
        e.stopImmediatePropagation();

        var tgl = new Date();
        var jam = tgl.getHours();
        var no_antrian = $("#no_antrian").val();
        var telpon = $("#telpon").val();
        var nama = $("#nama").val();
        var lyn = $("#layanan1").val();


        // if(document.getElementById("radio-choice-ab").checked === true){
        //     var layanan='CS';
        //     }
        // else if (document.getElementById("radio-choice-bb").checked === true) {
        //     var layanan='langganan';
        //     }
        // else if (document.getElementById("radio-choice-cb").checked === true) {
        //     var layanan = 'perbaikan';   
        //     }
        // else { var layanan = 'indihome';}

        sessionStorage.setItem("no_antrian", no_antrian);
        sessionStorage.setItem("telpon", telpon);
        sessionStorage.setItem("nama", nama);
        sessionStorage.setItem("layanan", lyn);

        $("#no_antrian2").val(no_antrian); 
        $("#telpon1").val(telpon); 
        $("#nama1").val(nama);
        $("#layanan1").val(lyn);

        if(jam > 22) {alert('Maaf, Jam layanan kami sudah tutup');}
        else {  alert('Data disimpan');
                document.getElementById('counter').innerHTML = "<center><img src='img/11.jpg' width='50%' height='50%'><br>dari 15</center >";
                $.mobile.changePage('#antrian-plaza', { transition: 'slide' });
            }
        
    });

    $('#refresh').on('click', function (e) {

        e.preventDefault();
        e.stopImmediatePropagation();

        $("#no_antrian2").val(sessionStorage.getItem("no_antrian"));
        $("#telpon1").val(sessionStorage.getItem("telpon"));
        $("#nama1").val(sessionStorage.getItem("nama"));
        $("#layanan1").val(sessionStorage.getItem("layanan"));

        document.getElementById("counter").innerHTML = "<center><img src='img/10.jpg' width='50%' height='50%'><br>dari 14</center >";
        $.mobile.changePage('#antrian-plaza', { transition: 'slide' });
    });

    $('#pilih').on('click', function (e) {

        e.preventDefault();
        e.stopImmediatePropagation();

        $.mobile.changePage('#pilih-layanan', { transition: 'slide' });

    });

});