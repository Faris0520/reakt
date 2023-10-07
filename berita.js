import React from 'react';
import { createRoot } from 'react-dom/client';

function Head({ title, subtitle }) {
  return (
    <header>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
}

function Ui({ image, category, date, title, content, link }) {
  return (
    <article>
      <HeadBerita image={image} category={category} />
      <IsiBerita date={date} title={title} content={content} link={link} />
    </article>
  );
}

function HeadBerita({ image, category }) {
  return (
    <header>
      <h4>{category}</h4>
      <img src={image} alt="" />
    </header>
  );
}

function IsiBerita({ date, title, content, link }) {
  return (
    <div>
      <p>{date}</p>
      <h2>{title}</h2>
      <p>{content}</p>
      <Tombol link={link} />
    </div>
  );
}

function Tombol({ link }) {
  return <a href={link}>Find out more</a>;
}

function Berita() {
  const someNews = [
    {
      title: 'Zake demote pmimir',
      date: '30 September 1952',
      content:
        'Minggu kemarin, Zake selaku owner server Discord "Gamew" telah menurunkan jabatan seorang pengguna yang bernama "pmimir" karna dia celek. mapp',
      image: 'https://source.unsplash.com/user/erondu/600x400',
      category: 'Biz',
      link: '#'
    },
    {
      title: 'Parris memberi role owner ke pmimir',
      date: '1 Oktober 1952',
      content:
        'Pada 1 Oktober kemarin, parris yang berpangkat Jendral Admin telah menaikkan seorang member yang bernama "pmimir" karena dedikasinya terhadap server "Gamew acingalak"',
      image: 'https://holopin.me/faris0520',
      category: 'International',
      link: '#'
    }
  ];

  return (
    <div>
      <Head title="Latest News" subtitle="September - Oktober 2023" />
      {someNews.map((a) => (
        <Ui {...a} key={a.title}/>
      )
        )}
    </ div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<Berita />);

// ref: https://www.dicoding.com/academies/403/tutorials/23383
