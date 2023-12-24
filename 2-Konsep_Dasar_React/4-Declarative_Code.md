# Declarative Code
Salah satu konsep yang ada di React adalah menulis kode secara deklaratif. Mungkin Anda pernah mendengar istilah tersebut dan membandingkan dengan kode imperatif. Untuk memahami keduanya dengan jelas, kami akan menggunakan perumpamaan yang biasa terjadi di kehidupan nyata.

Anggaplah Anda sedang berkendara menggunakan mobil dan ingin suhu di dalam kabin tetap sejuk (sekitar 21 derajat). Untuk mengatur suhu, mobil menyediakan dua knop (hembusan angin dan pendingin) yang dapat dikombinasikan nilainya. Ketika berkendara di siang hari dan mulai terasa gerah, Anda perlu menaikkan nilai hembusan angin dan pendingin. Namun, bila berkendara di malam hari dan tidak ingin merasa kedinginan, Anda perlu menurunkan kedua nilainya. Model pengaturan suhu seperti ini mengharuskan Anda melakukan semuanya secara manual. Agar suhu tetap berada di kategori sejuk, Anda perlu tahu berapa nilai aliran udara dan pendingin secara tepat.

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:54e9140936e59fd263b1d46954b170c420220411170045.jpeg)

Oke. Anggaplah Anda membeli mobil baru dan kini model pengaturan suhunya berbeda. Mobil ini tidak memiliki dua knop, melainkan Anda cukup memberikan nilai suhu yang diinginkan. Suhu di kabin akan tetap stabil sesuai dengan nilai suhu yang ditetapkan, terlepas ia digunakan pada siang hari atau malam hari.

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:22949ac91c43ffd3f52fcd6253c36d0a20220411170045.jpeg)

Dari dua mobil di atas, manakah yang menggunakan prinsip imperatif dan deklaratif dalam mengatur suhu? Jika masih belum paham, kita cari tahu dari arti katanya.

KBBI menjelaskan bahwa kata imperatif berarti “memerintah atau memberi komando”. Di JavaScript sendiri, kita sering menuliskan kode yang sifatnya imperatif. Ciri-cirinya adalah kita menjelaskan secara detail kepada JavaScript (lebih tepatnya compiler) apa dan bagaimana ia harus melakukan sesuatu. Contoh, kode imperatif yang umum dituliskan di JavaScript adalah penggunaan for berikut.

```js
const names = ['Asep', 'Alex', 'Bagus', 'Cika', 'Doni'];
const uppercaseNames = [];

for (let i = 0; i < names.length; i++) {
  uppercaseNames[i] = names[i].toUpperCase();
}

console.log(uppercaseNames);

/**
* output:
*
* [ 'ASEP', 'ALEX', 'BAGUS', 'CIKA', 'DONI' ]
*/
```

Jika Anda sudah lama menggunakan JavaScript, penggunaan sintaksis for seperti di atas umum sekali dituliskan. Pada kode tersebut kita melakukan perulangan untuk memberikan nilai pada array uppercaseNames dengan butir nilai di dalam array names yang telah dikapitalkan.

Ini merupakan contoh dari kode imperatif karena kita menjelaskan perintah langkah demi langkah yang harus dilakukan JavaScript untuk mencapai tujuan tersebut. Perintah yang kita lakukan antara lain:

- menetapkan nilai awal untuk variabel iterator (let i = 0),
- memberitahu bahwa perulangan perlu dihentikan ketika i < names.length,
- mendapatkan butir nama dan mengubahnya menjadi kapital (names[i].toUpperCase()),
- menetapkan butir tersebut sebagai nilai ke-i pada array uppercaseNames, dan
- menambahkan 1 nilai pada variabel iterator i setiap kali perulangan agar prosesnya dapat terhenti (i++).
- Ingat contoh mobil pertama yang menggunakan dua knop untuk mengatur suhu? Hal ini sama seperti penggunaan for di atas karena kita perlu menginstruksikan langkah demi langkah untuk mencapai tujuan.

Lantas bagaimana dengan deklaratif? Jika dilihat dari arti katanya, deklaratif merupakan pernyataan yang sifatnya “ringkas dan jelas”. Dengan begitu kode deklaratif sangat kontras dengan kode imperatif. Ketika menuliskan kode secara deklaratif, kita tidak perlu menulis seluruh langkah untuk mendapatkan hasil yang sama. Alih-alih menuliskan perintah yang detail, kita cukup memberitahu apa yang ingin dicapai, sisanya percayakan pada JavaScript. Agar penjelasannya tak terdengar abstrak, mari kita ubah kode for di atas menggunakan kode deklaratif.

Oke, kita lihat dulu seperti apa sih yang kita inginkan. Pertama, kita lihat dulu nilai dari array names.
```js
const names = ['Asep', 'Alex', 'Bagus', 'Cika', 'Doni'];
```
Dari nilai array names di atas, kita menghasilkan nilai array baru di mana seluruh nama sudah dikapitalkan.
```js
[ 'ASEP', 'ALEX', 'BAGUS', 'CIKA', 'DONI' ]
```
Untuk mencapai tujuan tersebut dengan JavaScript, kita bisa menggunakan fungsi map pada array. Lihat, betapa singkat kode yang ditulis dengan gaya deklaratif.
```js
const names = ['Asep', 'Alex', 'Bagus', 'Cika', 'Doni'];
const uppercaseNames = names.map((name) => name.toUpperCase());

console.log(uppercaseNames);
 
/**
* output:
*
* [ 'ASEP', 'ALEX', 'BAGUS', 'CIKA', 'DONI' ]
*/
```
Di sana kita tidak lagi membuat variabel iterator; memberitahu kapan perulangan harus berhenti; dan tidak perlu menetapkan nilai pada setiap butir array secara manual. Menulis kode secara deklaratif sangat mengasyikkan, bukan?

## React Merupakan Deklaratif
React sendiri menerapkan gaya deklaratif baik dari standar yang mereka tetapkan atau konvensi ketika menggunakannya. Sebagai gambaran awal saja, untuk membuat antarmuka berbentuk daftar (list), React mendorong kita untuk menggunakan gaya deklaratif. Anda bisa memanfaatkan map, filter, atau fungsi array sejenisnya.

Contoh lain, ketika menetapkan event pada elemen pun dilakukan secara deklaratif.
```html
<button onClick={callContact}>Call Contact</button>
```
Mungkin contoh kode tersebut terlihat janggal, tapi nyatanya valid di React. Untuk menetapkan event listener, kita tidak lagi menuliskan addEventListener karena itu semua sudah diatasi oleh React.

Intinya, kode imperatif menuntut kita untuk menuliskan seluruh langkah demi langkah untuk mencapai tujuan. Namun, dengan kode deklaratif kita cukup memberitahukan apa yang ingin dicapai, sisanya percayakan pada JavaScript atau React.