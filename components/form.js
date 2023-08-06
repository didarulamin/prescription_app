import { useForm } from 'react-hook-form';

export default function PatientInfo() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-1/2">
      <input
        className="p-2 m-2 b-2 border border-sky-500 "
        {...register('patientName')}
        type="text"
        placeholder="Patient Name"
      />
      <input
        className="p-2 m-2 b-2 border border-sky-500"
        {...register('address')}
        type="text"
        placeholder="Address"
      />
      <input
        className="p-2 m-2 b-2 border border-sky-500"
        {...register('age')}
        type="text"
        placeholder="Age"
      />
      <input
        className="p-2 m-2 b-2 border border-sky-500"
        {...register('date')}
        type="text"
        placeholder="Date"
      />
      <input
        className="p-2 m-2 b-2 border border-sky-500"
        {...register('mobile')}
        type="text"
        placeholder="Mobile"
      />
      <input
        className="p-2 m-2 b-2 border border-sky-500"
        {...register('diagnosis')}
        type="text"
        placeholder="Dignosis"
      />

      {/* <input type="submit" /> */}
    </form>
  );
}
