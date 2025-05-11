import Image from 'next/image';

interface PopupModalProps {
  onClose: () => void;
  children: React.ReactNode;
  hasButtons?: boolean;
  submitText?: string;
  cancelText?: string;
  onSubmit: () => void;
}

const PopupModal: React.FC<PopupModalProps> = ({
  onClose,
  children,
  hasButtons = false,
  submitText = '확인',
  cancelText = '취소',
  onSubmit,
}) => (
  <div>
    <div className='relative flex h-48 w-72 items-center justify-center rounded-lg bg-gray-100 p-6 sm:h-52 sm:w-md'>
      <div className='absolute top-6 right-6'>
        <Image
          src='/assets/icons/ico__X.png'
          alt='X icon'
          width={24}
          height={24}
          onClick={onClose}
        />
      </div>
      <div className='flex items-center justify-center'>{children}</div>

      {/* 추후 버튼 컴포넌트로 대체 */}
      <div className='absolute bottom-6 flex gap-2'>
        {hasButtons && <button onClick={onClose}>{cancelText}</button>}
        <button onClick={onSubmit}>{submitText}</button>
      </div>
    </div>
  </div>
);

export default PopupModal;
