import Image from 'next/image';
const Card = ({ data }) => {
  return (
    <div className="border border-sky-500 p-4 flex-wrap m-2">
      <div>
        <Image
          src={data.img_url}
          width={100}
          height={100}
          alt="Picture of the author"
        />
      </div>

      <div>
        <h4>{data.title_en}</h4>
        <h4>{data.title_ar}</h4>
        <h4>Price:{data.price} SAR</h4>
      </div>
      <input
        id="default-checkbox"
        type="checkbox"
        value=""
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
    </div>
  );
};

export default Card;
