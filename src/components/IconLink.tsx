interface IconLinkProps {
  src: string;
  alt: string;
  text: string;
  color?: string;
  onHover: () => void;
  onClick: () => void;
}

const IconLink: React.FC<IconLinkProps> = ({
  src,
  alt,
  text,
  color = 'black',
  onHover,
  onClick,
}) => {
  return (
    <div
      className="mx-10 my-5 flex flex-row border-b p-5 hover:cursor-pointer hover:bg-gray-100 md:w-80"
      onMouseEnter={onHover}
      onClick={onClick}
    >
      <img src={src} alt={alt} className="w-24 p-4" />
      <p className="my-auto text-4xl" style={{ color }}>
        {text}
      </p>
    </div>
  );
};

export default IconLink;
