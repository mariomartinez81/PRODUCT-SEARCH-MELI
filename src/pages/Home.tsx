import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Icon from '../components/Icon';
import logo from '../assets/Logo_ML.png';
import searchLogo from '../assets/ic_Search.png';
import { useResponsive } from '../hooks/useResponsive';
import handleKeyPress from '../utils/handlerKeyPress';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const { isMobile } = useResponsive();
  const navigate = useNavigate();

  const handlerSearchBar = () => {
    navigate(`items?search=${inputValue}`, {
      state: {
        search: inputValue,
      },
    });
  };

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) =>
    handleKeyPress({
      event: e,
      callback: handlerSearchBar,
    });

  const handleClickIcon = () => {
    setInputValue('');
    navigate('/');
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full">
        <Header>
          <div className={`flex w-full gap-6 ${isMobile ? 'px-0' : 'px-40'}`}>
            <Icon
              className="flex cursor-pointer w-fit"
              icon={logo}
              onClick={handleClickIcon}
            />
            <SearchBar
              icon={searchLogo}
              className="flex items-center justify-center w-full border-white rounded-sm shadow-sm cursor-text"
              onClickIcon={handlerSearchBar}
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              onKeyDown={handleEnterPress}
            />
          </div>
        </Header>
      </div>
      <div
        className={`flex w-full justify-center items-center  ${
          isMobile ? 'px-3' : 'px-44'
        } `}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
