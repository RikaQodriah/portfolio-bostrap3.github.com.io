// // event pada saaat link di klik
// $('.page-scroll').on('click', function (e) {
    
//  // ambil isi href
//     var tujuan = $(this).attr('href');
//  // tangkap elemen yg bersangkutan
//     var elemenTujuan = $(tujuan);

//     // //pindahkan scroll 
//     $('body').scrollTop('700');


//     e.preventDefault();

// });



$('.page-scroll').on('click', function (e) {
    var tujuan = $(this).attr('href');
    var elemenTujuan = $(tujuan);
    
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top
    }, 1000);
    
    e.preventDefault();
});
