# React Ecosystem

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:2a202aa845cd4a19d391055f77f4544120220422073153.png)

Hal lain yang membuat React istimewa adalah memiliki ekosistem yang luas. Maksudnya, React dapat dikombinasikan dengan penggunaan library, tools, teknologi, atau hal lain yang dapat menunjang pengalaman yang lebih baik dalam mengembangkan aplikasi React. Hal itu mirip seperti pengertian ekosistem pada ekologi di mana hewan, tumbuhan, dan benda alam saling mendukung satu sama lain sehingga menciptakan sistem kehidupan yang kuat.

Seperti yang kita ketahui, React hanyalah library untuk membangun antarmuka pengguna. Tak lebih dari itu. Inti dari React sangatlah kecil sehingga sulit bila kita hanya mengandalkan package inti untuk membangun aplikasi yang kompleks. Peran ekosistem sangat membantu untuk membuat aplikasi React dengan cara yang lebih baik lagi.

Misal, jika ingin membuat aplikasi web yang memiliki lebih dari satu halaman, Anda pasti memerlukan penanganan routing. React sendiri tidak menyediakan mekanisme routing, sehingga Anda perlu menyediakannya secara mandiri. Namun, alih-alih membuat mekanisme routing sendiri, manfaatkanlah salah satu ekosistem yang ada, yaitu react-router agar kita dapat mengimplementasikan routing secara mudah pada React.

Selain itu, Anda juga memerlukan persiapan yang tidak sederhana ketika memutuskan ingin menggunakan React. Setidaknya Anda pasti butuh module bundler seperti webpack untuk membundel seluruh kode inti React dengan kode yang Anda miliki atau sebuah transpiler kode JavaScript seperti Babel untuk menerjemahkan sintaksis khusus React ke JavaScript yang dapat dimengerti oleh browser. Percayalah, konfigurasi webpack atau Babel untuk React tidak sederhana dan membuat pusing dalam memahaminya. Alih-alih kita menyiapkan semuanya secara mandiri, alangkah baiknya untuk menggunakan ekosistem Vite. 

Kami setuju bahwa ekosistem sangat membantu developer dalam menggunakan React. Namun, ingat ya! Pikirkan dua kali bila hendak menggunakan library atau package tambahan. Buatlah kode sekecil mungkin dengan menambahkan ekosistem yang dibutuhkan saja sebelum React menjadi penyebab buruknya performa web Anda.

Ekosistem bukan hanya permasalahan penggunaan tools atau library. Namun, hal apa pun yang dapat mendukung pengembangan menggunakan React lebih baik lagi, termasuk komunitas atau sumber belajar. 

Materi yang kami sediakan (bukan hanya di kelas ini) akan mengajak Anda untuk menjajal beberapa ekosistem React yang ada. Terutama yang dapat membantu kita dalam mengembangkan aplikasi React di web. Ekosistem yang dimaksud antara lain sebagai berikut.

- ES6+ sintaksis : Kita akan banyak memanfaatkan sintaksis dan fitur JavaScript terbaru (ES6 ke atas) untuk mendapatkan pengalaman yang maksimal dalam menggunakan React. Jadi, biasakan diri Anda untuk menggunakan sintaksis, seperti const, let, class, rest parameter, spread operator, destructuring, default parameter, dan arrow function. Anda juga harus terbiasa dengan penggunaan Promise dan async/await.


- Vite : Seperti yang sudah disinggung sebelumnya, untuk memudahkan dalam pembuatan proyek aplikasi React, kita akan memanfaatkan Vite.


- React DOM : React hanyalah library untuk membangun antarmuka pengguna. React dapat digunakan tak hanya untuk aplikasi web, tetapi juga dapat digunakan untuk membangun aplikasi Android dan iOS dengan bantuan React Native. Lain halnya dengan React DOM yang dibutuhkan ketika Anda ingin mengembangkan aplikasi React untuk platform web.


- React Router : React Router adalah salah satu ekosistem React untuk memudahkan implementasi routing di React. Kita akan membutuhkan ini ketika ingin membuat aplikasi yang memiliki lebih dari satu halaman.


- Redux : State merupakan salah satu konsep inti dari React. Secara standar, state bersifat lokal dan hidup di dalam komponen. Dengan Redux, kita bisa membuat state secara terpusat dan bersifat global.


- Jest : Ia merupakan JavaScript testing framework yang dibuat oleh The Meta Open Source team (pengembang yang sama dengan React). Dengan Jest, kita dapat menguji mulai dari kode JavaScript hingga komponen React secara lebih mudah.


Hal yang membuat belajar React menjadi sulit sebenarnya bukan karena React itu sendiri, melainkan penggunaan ekosistem yang terlalu dini sehingga membuat Anda bingung untuk mencampurkan dan mempelajari banyak hal.

Karena itu, di kelas ini kami tidak akan menjajal semua ekosistem sekaligus. Ini adalah kelas React pertama dan akan banyak membahas inti dari React itu sendiri. Ekosistem seperti React Router, Redux, Jest, atau ekosistem lainnya akan kita pelajari di kelas terpisah. Ketika Anda sudah memiliki pengetahuan dasar tentang React, penggunaan ekosistem bukanlah hal yang sulit.

Di modul selanjutnya, kami akan mengajak Anda berkenalan lebih dalam mengenai konsep dasar yang ada di React. Hal ini penting untuk Anda ketahui bahkan sebelum mulai menulis satu baris kode React. Yuk, kita lanjut ke materi berikutnya.