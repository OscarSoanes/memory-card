export function Scoreboard({ message, value }) {
  return (
    <>
      <p className='text-xl'>
        {message} Score: <span className='font-bold'>{value}</span>
      </p>
    </>
  );
}
