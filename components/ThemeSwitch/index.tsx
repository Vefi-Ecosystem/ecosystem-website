import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../context/globalContext';
import styled from 'styled-components';
import { FiMoon, FiSun } from 'react-icons/fi';
import { lightTheme, darkTheme } from '../../themes';

const ThemeSwitcher = styled.div`
  label {
    --gap: 5px;
    --size: 23px;
    height: 32px;
        width: 60px;
    padding: 0 7px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: ${(props: any) => props.theme.themeSwitchShadow};
    background: ${(props: any) => props.theme.themeSwitchBackground};
    position: relative;
    cursor: pointer;
    border-radius: 23px;
    z-index: 1;

    .icon {
      height: 23px;
      width: 23px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    svg {
      width: 90%;
      color: black;
    }
  }

  input {
    width: 0;
    height: 0;
    display: none;
    visibility: hidden;
  }

  label::after {
    position: absolute;
    content: '';
    border-radius: 50%;
    transform: translateY(-50%);
    top: 50%;
    height: 23px;
    width: 23px;
    left: 7px;
    background: ${(props: any) => props.theme.themeSwitchBtn};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(255, 255, 255, 0.25);
    z-index: -1;
    transition: 0.2s ease left;
  }
  input:checked + label::after {
    left: calc(100% - var(--size) - 7px);
  }
`;

const ThemeSwitch = (props: any) => {
  const [iconColor, setIconColor] = useState(darkTheme.themeSwitchBtn);

  const { theme, themeSwitchHandler } = useContext<any | null>(GlobalContext);

  const handleCheck = (e: any) => {
    if (e.target.checked) {
      setIconColor(lightTheme.themeSwitchBtn);
    } else {
      setIconColor(darkTheme.themeSwitchBtn);
    }
  };

  useEffect(() => {
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeSwitcher>
      <input
        type="checkbox"
        id="switcher"
        onChange={(e) => {
          handleCheck(e);
          themeSwitchHandler(theme === 'dark' ? 'light' : 'dark');
        }}
      />
      <label htmlFor="switcher">
        <div className="icon">
          <FiSun color={iconColor} />
        </div>
        <div className="icon">
          <FiMoon color={iconColor} />
        </div>
      </label>
    </ThemeSwitcher>
  );
};

export default ThemeSwitch;
