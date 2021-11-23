function time() {
  console.log(Date());
  let con = confirm(Date());
  let url = "https://";
  if (con) {
    url += prompt("Enter url, only need to type 'www.xxxx.com' part.");
    window.open(url);
  }
}
