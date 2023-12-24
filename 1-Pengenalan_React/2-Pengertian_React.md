# Pengertian React

React diciptakan oleh Meta (dahulu Facebook) dan mulai dipublikasi pada NPM repository sejak tahun 2012. Seperti yang disinggung sebelumnya, React adalah JavaScript library yang digunakan untuk membangun User Interface (antarmuka pengguna). Hal ini ditegaskan oleh tim pengembang React pada website resminya di react.dev. 

Tak jarang React dibandingkan dengan JavaScript Framework seperti Vue atau Angular karena keduanya memiliki fungsi yang sama yakni membuat antarmuka pengguna web jadi lebih mudah. Namun, sebenarnya hal itu tak sebanding mengingat React hanyalah library. Library biasanya tak lebih besar daripada framework, baik dari segi ukuran maupun tingkat abstraksi yang dapat dilakukan dari standar yang ada. React tidak memaksakan penggunaan library pendukung tertentu dalam mengembangkan aplikasi web. Your code, your way. React hanya library yang ukurannya kecil [1], tetapi dapat membangun antarmuka pengguna melalui JavaScript dengan pengalaman yang lebih baik. Hal itulah mengapa kami menyukai React.

Dengan React, kita dapat terhindar dari banyak kesulitan yang biasa terjadi ketika menggunakan standar W3C dalam membangun antarmuka pengguna. Dilansir dari website resminya, React memanfaatkan konsep komponen, deklaratif, dan unidirectional data flow (aliran data searah). Berikut penjelasan singkatnya.

- Komponen
React memanfaatkan komponen dalam membangun antarmuka. Setiap komponen terenkapsulasi dan dapat saling dikomposisikan satu sama lain. Karena adanya komponen, antarmuka yang dibangun menggunakan React sangat reusable. Anda tidak perlu menuliskan kode yang sama berulang kali untuk menggunakan antarmuka yang serupa.


- Deklaratif
Dengan konsep deklaratif, pembuatan antarmuka pengguna dapat lebih cepat. Pasalnya, kita cukup fokus terhadap apa yang ingin dicapai. Tak ada kode imperatif lagi ketika menggunakan React. Bahkan, Anda bisa menuliskan “layaknya” sintaksis HTML di dalam kode JavaScript. Hal yang mustahil dilakukan oleh JavaScript standar saat ini. Karena itu, Anda bisa mengucapkan selamat tinggal pada fungsi DOM manipulation, seperti appendChild, getElementById, addEventListener, dan sebagainya.


- Aliran Data Searah
Komponen React dapat menampung sekumpulan data. React secara reaktif akan memperbarui dan me-render komponen jika data di dalamnya berubah. Karena sifat reaktifnya tersebut, kami rasa inilah alasan mengapa dinamakan React. Komponen React dapat dikomposisikan dan aliran data pada komponen dilakukan secara searah dari parent ke child. Hal itu membuat perubahan data pada React lebih terukur dan masuk akal.

> Catatan: Jangan khawatir bila Anda belum memahami betul penjelasan di atas. Kami akan membahas konsep dasar React lebih detail pada modul selanjutnya.

Oke, saat ini Anda sudah tahu sekilas tentang React. Di modul selanjutnya, kami akan menjelaskan mengapa React adalah pilihan yang tepat untuk Anda pelajari saat ini sebagai library dalam membangun antarmuka pengguna.

> Catatan: Tak afdal rasanya bila memulai belajar React tanpa mengetahui alasan mengapa React sendiri dibangun. Kami sarankan Anda untuk menyimak penjelasan Pete Hunt sebagai tim inti React pada artikel berjudul “Why did we build React?”.