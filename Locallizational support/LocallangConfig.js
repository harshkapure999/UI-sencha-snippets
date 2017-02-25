var requiredClassName = [];
var lang = "";

if (localStorage) {
if (localStorage.getItem('user-lang')) {
lang = localStorage.getItem('user-lang');
if (lang === "en_US")
lang = "";
} else {
localStorage.setItem('user-lang', 'en_US');  //load a language code dynamically
}
}
if (lang !== "") {
lang = "-" + lang;
}
var downloadObj;
Ext.Loader.loadScriptsSync("resources/locales/Myapp-" + lang+".js");
