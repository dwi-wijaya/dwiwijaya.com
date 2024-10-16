import { useState, useRef } from 'react';
import { supabase } from '@/lib/supabase';
import Image from 'next/image';
import { FiTrash2 as DeleteIcon } from 'react-icons/fi';
import { MdAdminPanelSettings as AdminIcon } from 'react-icons/md';
import ChatTime from './ChatTime';
// Daftar emoji yang tersedia untuk reaksi
const availableReactions = ['👍', '❤️', '😄', '😕', '👀', '🎉', '👏', '🔥'];

const ChatItem = ({
  id,
  avatar,
  name,
  email,
  message,
  created_at,
  reactions,
  onDelete,
  session
}) => {
  const [showEmojiPopup, setShowEmojiPopup] = useState(false);
  const [currentReactions, setCurrentReactions] = useState(reactions || {});

  const popupRef = useRef();

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

  const handleReaction = async (emoji) => {
    const userEmail = session?.email;
    if (!userEmail) return;

    const newReactions = { ...currentReactions };

    if (newReactions[emoji]?.includes(userEmail)) {
      newReactions[emoji] = newReactions[emoji].filter((user) => user !== userEmail);

      if (newReactions[emoji].length === 0) {
        delete newReactions[emoji];
      }
    } else {
      if (newReactions[emoji]) {
        newReactions[emoji].push(userEmail);
      } else {
        newReactions[emoji] = [userEmail];
      }
    }

    setCurrentReactions(newReactions);
    setShowEmojiPopup(false); // Tutup popup setelah emoji dipilih

    await supabase
      .from('guestbook')
      .update({ reactions: newReactions })
      .eq('id', id);
  };

  const toggleEmojiPopup = () => {
    setShowEmojiPopup(!showEmojiPopup);
  };

  const getReactionCount = (emoji) => {
    return currentReactions[emoji]?.length || 0;
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
      <div className='space-y-1 relative'>
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
              {(session?.email === email || session?.email === authorEmail) && (
                <DeleteIcon
                  size={17}
                  className='hidden cursor-pointer text-red-500 group-hover:flex mr-3'
                  onClick={() => onDelete(id)}
                />
              )}
            </div>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <div className='w-fit rounded-xl rounded-tl-none bg-container border border-stroke dark:border-none px-3 py-2 text-neutral-800 dark:text-neutral-200'>
            <p className='leading-5'>{modifiedMessage}</p>

            {/* Reactions Section */}

            <div className={`hidden group-hover:flex ${session && 'mt-2'} ${Object.keys(currentReactions).length !== 0 && '!flex mt-2 mb-1'} items-center gap-2`}>
              {session &&
                <div className='relative'>
                  <button className="text-sm text-subtext flex item-center justify-center" onClick={toggleEmojiPopup}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      width="20px"
                      height="20px"
                    >
                      <path
                        d="M3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 11.5523 19.4477 12 20 12C20.5523 12 21 11.5523 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21C12.167 21 13.2894 20.7997 14.3332 20.4307C14.854 20.2467 15.1269 19.6754 14.9428 19.1546C14.7588 18.6339 14.1875 18.361 13.6668 18.545C12.834 18.8394 11.9368 19 11 19C6.58172 19 3 15.4183 3 11Z"
                      />
                      <path
                        d="M20 14C20 13.4477 19.5523 13 19 13C18.4477 13 18 13.4477 18 14V16H16C15.4477 16 15 16.4477 15 17C15 17.5523 15.4477 18 16 18H18V20C18 20.5523 18.4477 21 19 21C19.5523 21 20 20.5523 20 20V18H22C22.5523 18 23 17.5523 23 17C23 16.4477 22.5523 16 22 16H20V14Z"
                      />
                      <path
                        d="M8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6Z"
                      />
                      <path
                        d="M7.03441 12.1344C7.51247 11.8578 8.1242 12.0212 8.40075 12.4993C8.92097 13.3986 9.89085 14 11 14C12.1092 14 13.0791 13.3986 13.5993 12.4993C13.8758 12.0212 14.4875 11.8578 14.9656 12.1344C15.4437 12.4109 15.607 13.0227 15.3305 13.5007C14.4675 14.9926 12.852 16 11 16C9.14805 16 7.53255 14.9926 6.66953 13.5007C6.39299 13.0227 6.55635 12.4109 7.03441 12.1344Z"
                      />
                      <path
                        d="M14 6C12.8954 6 12 6.89543 12 8C12 9.10457 12.8954 10 14 10C15.1046 10 16 9.10457 16 8C16 6.89543 15.1046 6 14 6Z"
                      />
                    </svg>
                  </button>


                  {/* Popup untuk memilih emoji */}
                  {showEmojiPopup && (
                    <div
                      ref={popupRef}
                      className='absolute z-10 mt-4 -left-3  p-1  bg-container border border-stroke shadow-lg rounded-md flex gap-1'
                    >
                      {availableReactions.map((emoji) => (
                        <button
                          key={emoji}
                          className={`text-sm hover:bg-slate-100 dark:hover:bg-slate-600 p-1 rounded-md ${currentReactions[emoji]?.includes(session?.email)
                            ? 'bg-slate-100 dark:bg-slate-600'
                            : ''
                            }`}
                          onClick={() => handleReaction(emoji)}
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              }

              {/* Display existing reactions with count */}
              <div className='flex gap-1'>
                {Object.keys(currentReactions).map((emoji) => (
                  <div key={emoji} className='text-sm bg-slate-100  dark:bg-slate-600 rounded-md px-1 py-[2px] border border-slate-200 dark:border-slate-600 flex items-center gap-1'>
                    {emoji} {getReactionCount(emoji) > 1 && <span>{getReactionCount(emoji)}</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
        <div className='flex md:hidden'>
          <ChatTime datetime={created_at} />
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
