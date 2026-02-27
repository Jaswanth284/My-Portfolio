// import frontend from '../Assets/certificates/Front‑End Web Developer.png';


export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
}

export const certificatesData: Certificate[] = [
  {
    id: 1,
    title: 'Front‑End Web Developer Nanodegree',
    issuer: 'Udacity',
    date: '2023',
    image: ""
  },
];
