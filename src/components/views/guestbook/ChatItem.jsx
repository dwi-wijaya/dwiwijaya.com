import Image from 'next/image';
import { FiTrash2 as DeleteIcon } from 'react-icons/fi';
import { MdAdminPanelSettings as AdminIcon } from 'react-icons/md';
import ChatTime from './ChatTime';


const ChatItem = ({
  id,
  avatar,
  name,
  email,
  message,
  created_at,
  onDelete,
  session
}) => {

  const authorEmail = 'dev.dwiwijaya@gmail.com';

  const pattern = /@([^:]+):/g;
  const modifiedMessage = message?.split(pattern).map((part, index) => {
    if (index % 2 === 1) {
      return (
        <span key={index} className='text-yellow-600 dark:text-yellow-400'>
          @{part}
        </span>
      );
    }
    return part;
  });

  const handleDeleteMessage = () => {
    onDelete(id);
  };

  return (
    <div className='group flex items-start gap-3'>
      {avatar && (
        <Image
          src={avatar}
          width={40}
          height={40}
          alt={name}
          className='mt-1 rounded-full border dark:border-neutral-800'
        />
      )}
      <div className='space-y-1'>
        <div className='flex flex-col items-start gap-3 md:flex-row md:items-center'>
          <div className='flex items-center gap-2'>
            <div className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
              {name}
            </div>
            <div className='hidden md:flex'>
              <ChatTime datetime={created_at} />
            </div>
            {email === authorEmail && (
              <div className='text-medium flex items-center gap-0.5 rounded-full bg-orange-600 dark:bg-orange-700 px-1.5 py-0.5 text-violet-50'>
                <AdminIcon size={13} />
                <span className=' text-[10px]'>Author</span>
              </div>
            )}
            <div className='flex items-center gap-3'>
              {(session?.email === email ||
                session?.email === authorEmail) && (
                  <DeleteIcon
                    size={17}
                    className='hidden cursor-pointer text-red-500 group-hover:flex mr-3'
                    onClick={handleDeleteMessage}
                  />
                )}
            </div>
          </div>
        </div>
        <div className=' flex items-center gap-3'>
          <p
            className={
              `w-fit rounded-xl rounded-tl-none bg-container border border-stroke dark:border-none px-3 py-2 text-neutral-800 dark:text-neutral-200 `
            }
          >
            {modifiedMessage}
          </p>

        </div>
        <div className='flex md:hidden'>
          <ChatTime datetime={created_at} />
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
