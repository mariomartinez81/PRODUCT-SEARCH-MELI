import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import SearchBar from '@components/products/SearchBar';
import Icon from '@components/common/Icon';
import Header from '@components/common/Header';
import { useResponsive } from '@hooks/useResponsive';
import handleKeyPress from '@utils/handlerKeyPress';
import searchLogo from '@assets/ic_Search.png';
import logo from '@assets/Logo_ML.png';
import styles from './Home.module.sass';

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
    <div className={styles.Home}>
      <div className={styles.Home__header}>
        <Header>
          <div
            className={`${styles.Home__header__container} ${
              isMobile
                ? styles['Home__header__container--mobile']
                : styles['Home__header__container--desktop']
            }`}
          >
            <Icon
              className={styles.Home__header__container__logo}
              icon={logo}
              onClick={handleClickIcon}
            />
            <SearchBar
              icon={searchLogo}
              className={styles['Home__header__container__search-bar']}
              onClickIcon={handlerSearchBar}
              onChange={(e: any) => setInputValue(e.target.value)}
              value={inputValue}
              onKeyDown={handleEnterPress}
            />
          </div>
        </Header>
      </div>
      <div
        className={`${styles.Home__content} ${
          isMobile
            ? styles['Home__content--mobile']
            : styles['Home__content--desktop']
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
