/**
 * Fonts.js
 * Material design uses the Roboto Family. This script is responsible
 * for pulling it in asynchronously.
 *
 * http://www.google.com/design/spec/style/typography.html#typography-typeface
 */

WebFontConfig = {
  google: { families: [ 'Roboto:500,700italic,300,700,500italic,400:latin' ] }
};

(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();
