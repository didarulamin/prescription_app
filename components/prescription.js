import Card from './Card';

const products = [
  {
    title_en:
      'Restora- Silicone Gel is a safe and effective treatment for scars and marks 15 ml',
    title_ar: 'ريستورا- سيليكون جل علاج آمن وفعال للندبات واللآثار 15 مل',
    price: 189,
    des: 'Rystora® Scar Gel is a safe and effective treatment for scars and scars on both skin folds as well as flat skin. Rystora® Scar Gel promotes skin regeneration',

    img_url:
      'https://media.zid.store/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/abd9a1a7-fd02-498a-95ae-d3187811dd93.png',
  },
  {
    title_en: 'Restura - silicone sheet 4 * 25 cm',
    title_ar: 'ريستورا- سيليكون جل علاج آمن وفعال للندبات واللآثار 15 مل',
    price: 298,
    des: 'Rystora® Scar Gel is a safe and effective treatment for scars and scars on both skin folds as well as flat skin. Rystora® Scar Gel promotes skin regeneration',

    img_url:
      'https://media.zid.store/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/f7fab6bc-ce6d-4ad0-9108-d520dcd31755.jpg',
  },
  {
    title_en: 'Preminox - Hair Strengthening Spray 100 ml',
    title_ar: 'ريستورا- سيليكون جل علاج آمن وفعال للندبات واللآثار 15 مل',
    price: 129,
    des: 'Rystora® Scar Gel is a safe and effective treatment for scars and scars on both skin folds as well as flat skin. Rystora® Scar Gel promotes skin regeneration',

    img_url:
      'https://media.zid.store/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/c314b8b4-fe1b-473f-8e93-ebddebbd5568.jpg',
  },
  {
    title_en:
      'Preminox - Shampoo to promote hair growth and stop hair loss 250 ml',
    title_ar: 'بريمينوكس- شامبو لتعزيز نمو الشعر وايقاف التساقط 250 مل',
    price: 89.7,
    des: 'Rystora® Scar Gel is a safe and effective treatment for scars and scars on both skin folds as well as flat skin. Rystora® Scar Gel promotes skin regeneration',

    img_url:
      'https://media.zid.store/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/c314b8b4-fe1b-473f-8e93-ebddebbd5568.jpg',
  },
];

const Prescription = () => {
  return (
    <div className="flex justify-items-center justify-center">
      {products.map((item) => (
        <Card data={item} />
      ))}
    </div>
  );
};

export default Prescription;
