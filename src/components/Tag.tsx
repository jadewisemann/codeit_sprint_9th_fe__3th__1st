const KST_OFFSET = 9 * 60 * 60 * 1000; // 한국 시간(KST)

const Tag = ({
  variant,
  registrationEnd,
}: {
  variant: 'small' | 'large';
  registrationEnd: string;
}) => {
  const classArray = [
    'flex h-[32px] w-[117px] items-center bg-[#EA580C] rounded-bl-[12px] justify-center  px-[10px] py-[4px]',
    variant === 'small' && '',
    variant === 'large' && 'rounded-tr-[22px]',
  ];
  const tagClass = classArray.filter(Boolean).join(' ');
  const deadline = new Date(registrationEnd).getUTCHours();

  if (Date.now() + KST_OFFSET > new Date(registrationEnd).getTime()) return;

  return (
    <div className={tagClass}>
      <span className='space-x-[4px] text-[12px] leading-[16px] font-semibold text-white'>
        <span>⏰</span>
        <span>{`오늘 ${deadline}시 마감`}</span>
      </span>
    </div>
  );
};

export default Tag;
