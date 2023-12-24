# React Element dan Component
Pada materi ini, kami akan banyak menggunakan istilah element dan component. Agar Anda tidak bingung ketika membaca materinya, kami akan menjelaskan pengertian kedua istilah tersebut secara singkat.

Element dan component di React merupakan dua hal yang sering didengar ketika membangun antarmuka pengguna. Pasalnya, seluruh tampilan antarmuka yang dibangun menggunakan React merupakan element.

Sama halnya seperti element pada standar DOM. Element di React bisa berupa paragraph, button, image, dan tipe lainnya. Bedanya, React element hanya sebatas objek JavaScript biasa yang mengandung informasi tentang bagaimana antarmuka pengguna harus ditampilkan. 

Berikut contoh dari objek React element paragraf.
```jsx
{
 type: 'p',
 props: {
   className: 'p-blue',
   children: 'Content of paragraph.',
 },
}
```
Bila objek di-render pada DOM (tentu dengan bantuan ReactDOM) maka akan menghasilkan HTML element seperti ini.
```html
<p class="p-blue">Content of paragraph.</p>
```

> Catatan:
> React merupakan platform agnostic. Ia tidak tahu dan tidak peduli akan ditampilkan di web atau native (seperti Android atau iOS). Jika ia di-render menggunakan React Native, alih-alih menghasilkan HTML element, ia akan menghasilkan output UI Native.

React mampu menjadi platform agnostic karena memanfaatkan Virtual DOM. Virtual DOM bukanlah hal yang sama seperti DOM pada browser, ia merupakan konsep yang digunakan oleh React agar element mampu diadaptasikan pada banyak platform dan selalu terjaga sinkronisasinya the actual DOM.

Oke. Jika React element mirip seperti HTML element, lantas apa itu React component?

React component hanyalah sebuah fungsi yang mengembalikan React element. Dengan React component, kita dapat mudah membuat antarmuka pengguna yang reusable. Untuk mempermudah pemahaman, anggaplah React component adalah fungsi yang mengembalikan objek seperti ini.
```jsx
function Car({ manufacture, type, color }) {
 return {
   manufacture,
   type,
   color,
   unitCode: `${+new Date()}-${manufacture}-${type}-${color}`,
 }
}
```
Fungsi di atas bersifat reusable. Mengapa? karena Anda bisa membuat objek Car dengan nilai yang berbeda hanya menggunakan fungsi yang sama.

Begitu juga React component. Namun, alih-alih mengembalikan data, React component mengembalikan sebuah UI dalam bentuk React element.
```jsx
function Car({ manufacture, type, color }) {
 return (
   <div className='car-info'>
     <dt>Manufacture:</dt>
     <dd>{manufacture}</dd>
     <dt>Type:</dt>
     <dd>{type}</dd>
     <dt>Color:</dt>
     <dd>{color}</dd>
   </div>
 );
}
```
Catatan:
React memiliki fitur JSX sehingga kita bisa menuliskan sintaks HTML pada kode JavaScript. Hal tersebut memang aneh, tetapi jangan dibuat pusing dulu ya! Kita akan membahas detail tentang JSX nanti pada modul React UI.

Salah satu keunggulan ketika menggunakan React adalah antarmuka pengguna menjadi reusable. React component sangat berperan untuk mencapai tujuan tersebut. Maka dari itu, Anda akan banyak membuat React component nantinya.