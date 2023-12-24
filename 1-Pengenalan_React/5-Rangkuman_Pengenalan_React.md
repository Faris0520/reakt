# Rangkuman Pengenalan React

Anda sudah berada di akhir modul pengenalan React. Semoga dengan materi yang kami berikan, Anda dapat mengetahui pengertian dari React, alasan kami memilih React, dan ekosistem yang ada di React.

Untuk memantapkan pengetahuan yang baru saja Anda dapatkan, kami merangkum beberapa poin penting.



## Pengertian React

React adalah JavaScript library yang digunakan untuk membangun User Interface (antarmuka pengguna). Hal ini ditegaskan oleh tim pengembang React pada website resminya di reactjs.org. React diciptakan oleh Meta (dahulu Facebook) dan mulai dipublikasi pada NPM repository sejak tahun 2012. Berikut konsep yang dimanfaatkan oleh React.

- Komponen: Komponen membuat antarmuka yang dibangun menggunakan React sangat reusable.

- Deklaratif: Pembuatan antarmuka pengguna dapat lebih cepat. Anda bisa menuliskan “layaknya” sintaksis HTML di dalam kode JavaScript.

- Aliran Data Searah: Komponen React dapat menampung sebuah data. React secara reaktif akan memperbarui dan me-render komponen jika data di dalamnya berubah. Komponen React dapat dikomposisikan dan aliran data pada komponen dilakukan secara searah dari parent ke child.


## Alasan Memilih React

Selain konsep yang dianut React. Berikut beberapa alasan mengapa kami memilih React.

- Popularitas React : React melejit bak roket bahkan sejak setahun setelah pertama dirilis. Sampai saat ini, percayalah, React masih juara dalam hal popularitas di kategori UI Library atau Front-End Framework.

- Pengguna React : React banyak digunakan oleh industri besar, unicorn, ataupun perusahaan rintisan. React digunakan oleh platform web social media yang dimiliki Meta, Twitter, Netflix, Discord, dan banyak platform sukses lainnya.

- Komunitas : Tim inti React sendiri selalu menjaga agar komunitas React selalu sehat dan aktif. React bisa tumbuh dan digunakan banyak perusahaan berkat komunitas yang aktif mendukungnya.
Meta sebagai pemilik teknologi pun cukup memperhatikan komunitas developer dengan membuat komunitas resmi bernama Developer Circles (DevC). Di sana, developer aktif berdiskusi dan berbagi ilmu perihal teknologi yang diciptakan oleh Meta, salah satunya React.


## React Ecosystem

React memiliki ekosistem yang luas dan dapat dikombinasikan dengan library, tools, teknologi, atau hal lain yang menunjang pengalaman lebih baik dalam mengembangkan aplikasi React. 

Ekosistem bukan hanya permasalahan penggunaan tools atau library. Namun, hal apa pun yang dapat mendukung pengembangan React menjadi lebih baik lagi, termasuk komunitas atau sumber belajar. 

Berikut beberapa ekosistem yang dapat membantu kita dalam mengembangkan aplikasi React di web.

- ES6+ sintaksis : Kita akan banyak memanfaatkan sintaksis dan fitur JavaScript terbaru (ES6 ke atas) untuk mendapatkan pengalaman yang maksimal dalam menggunakan React. Jadi, biasakan diri Anda untuk menggunakan sintaksis, seperti const, let, class, rest parameter, spread operator, destructuring, default parameter, dan arrow function. Anda juga harus terbiasa dengan penggunaan Promise dan async/await.

- Vite : Seperti yang sudah disinggung sebelumnya, untuk memudahkan dalam pembuatan proyek aplikasi React, kita akan memanfaatkan Vite.

- React DOM : React hanyalah library untuk membangun antarmuka pengguna. React dapat digunakan tak hanya untuk aplikasi web, tetapi juga dapat digunakan untuk membangun aplikasi Android dan iOS dengan bantuan React Native. Lain halnya dengan React DOM yang dibutuhkan ketika Anda ingin mengembangkan aplikasi React untuk platform web.

- React Router: React Router adalah salah satu ekosistem React untuk memudahkan implementasi routing di React. Kita akan membutuhkan ini ketika ingin membuat aplikasi yang memiliki lebih dari satu halaman.

- Redux : State merupakan salah satu konsep inti dari React. Secara standar, state bersifat lokal dan hidup di dalam komponen. Dengan Redux, kita bisa membuat state secara terpusat dan bersifat global.

- Jest : Ia merupakan JavaScript testing framework yang dibuat oleh The Meta Open Source team (pengembang yang sama dengan React). Dengan Jest, kita dapat menguji mulai dari kode JavaScript hingga komponen React secara lebih mudah.