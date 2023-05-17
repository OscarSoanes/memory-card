export function Cell({ colour, onClick }) {
  return (
    <button
      onClick={() => onClick(colour.id)}
      className={
        "aspect-square rounded-md flex flex-col items-center justify-center relative hover:scale-95 hover:rounded-none transition-cell ease-in duration-200 motion-reduce:transition-none motion-reduce:hover:transform-none cursor-pointer"
      }
      style={{ backgroundColor: colour.hex }}
      title={`Click on ${colour.name}?`}
    >
      <h2
        className={`${
          colour.dark ? "text-dBackground" : "text-dPrimary"
        } font-bold text-xl sm:text-2xl`}
      >
        {colour.hex}
      </h2>
      <p
        className={
          "self-end bottom-1 right-1 rounded-md p-1 absolute bg-lSecondaryButton dark:bg-dSecondaryButton sm:p-2"
        }
      >
        {colour.name}
      </p>
    </button>
  );
}
