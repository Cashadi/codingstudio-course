$(document).ready(function () {
  let h2 = $('h2');
  h2.html('<i>cashadi front end developer</i>');
  h2.append('<b> dia sangat rajin belajar FE</b>');
  h2.prepend('hallo ');
  h2.after('ganteng banget');
  h2.before('<h1>hamdalah</h1>');
  let input = $('input');
  console.log(input.val('gak bahaya ta? kagaklah'));
  h2.empty();
});
