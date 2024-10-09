import React, { useEffect } from 'react';

type MenuProps = {
  onClose: () => void;
};

const Menu: React.FC<MenuProps> = ({ onClose }) => {
  useEffect(() => {
    // Блокируем скролл при открытом меню
    document.body.style.overflow = 'hidden';

    // Восстанавливаем скролл при закрытии меню
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <aside className="fixed top-0 left-0 z-30 w-full h-full bg-[#191536] flex flex-col">
      <div className="flex justify-end pt-6 pr-8">
        <button className="text-white" onClick={onClose}>
          <img
            src="/images/menu_close.svg"
            alt="Close Menu"
            className="md:w-6 md:h-6 max-sm:w-4 max-sm:h-6"
          />
        </button>
      </div>

      <nav className="flex flex-col gap-0 text-white font-medium text-[21px] leading-[27.3px] md:mt-[2rem] max-sm:mt-[3rem]">
        <ul className="m-0 p-0 list-none flex flex-col md:gap-2 sm:gap-5 max-sm:gap-5">
          {['about', 'tech', 'benefits', 'contact', 'faq'].map((section) => (
            <li key={section} className="hover:bg-[#110E25] w-full">
              <a
                className="flex items-center h-12 text-white no-underline hover:text-[#05C2DF] md:px-[9rem] sm:px-[9rem] max-sm:px-[4rem] w-full"
                href={`#${section}`}
                onClick={onClose} // Закрываем меню при нажатии
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Menu;