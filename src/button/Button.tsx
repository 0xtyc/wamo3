import className from 'classnames';

type IButtonProps = {
  xl?: boolean;
  children: string;
};

const Button = (props: IButtonProps) => {
  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': true,
  });

  return (
    <div className={btnClass}>
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-full text-center;
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-bold text-xl py-2 px-10;
          }

          .btn-primary {
            @apply bg-white text-[#E57A29];
          }

          .btn-primary:hover {
            @apply bg-[#E57A29];
          }
        `}
      </style>
    </div>
  );
};

export { Button };
