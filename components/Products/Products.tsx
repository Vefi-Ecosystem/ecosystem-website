import React, { useState } from 'react';
import { Container } from '../../styles/Products.style';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import styled from 'styled-components';

const Text = styled.h3`
  font-family: Gilroy-semibold;
  font-size: 3rem;
  text-align: center;
  color: #1d1d1d;
  color: ${(props: any) => props.theme.comingSoon};
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

function Tabs() {
  const [toggle, setToggle] = useState(1);
  const toggleTab = (index: React.SetStateAction<number>) => {
    setToggle(index);
  };
  return (
    <Container id="products">
      <div className="prod">Get familiar with our Products</div>
      <div className="tab-block">
        <div className="tab-seg">
          <div className={toggle === 1 ? 'tabs  active-tab' : 'tabs'} onClick={() => toggleTab(1)}>
            <svg
              className={toggle === 1 ? 'svg  active-tab' : 'svg'}
              width="19"
              height="18"
              viewBox="0 0 19 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.14567 3.62941C6.94443 4.99667 5.83161 6.07814 4.42472 6.27371V11.6888C5.98149 11.9052 7.1782 13.2063 7.1782 14.7791C7.1782 16.5032 5.73996 17.901 3.96581 17.901C2.19165 17.901 0.753418 16.5032 0.753418 14.7791C0.753418 13.2063 1.95013 11.9052 3.5069 11.6888V6.27371C1.95013 6.0573 0.753418 4.75618 0.753418 3.18342C0.753418 1.45925 2.19165 0.0615234 3.96581 0.0615234C5.58415 0.0615234 6.92299 1.22452 7.14567 2.73744H11.3084C13.5895 2.73744 15.4386 4.53451 15.4386 6.75131V7.22891C16.9954 7.44532 18.1921 8.74644 18.1921 10.3192C18.1921 12.0434 16.7539 13.4411 14.9797 13.4411C13.2056 13.4411 11.7673 12.0434 11.7673 10.3192C11.7673 8.74644 12.964 7.44532 14.5208 7.22891V6.75131C14.5208 5.02713 13.0826 3.62941 11.3084 3.62941H7.14567ZM1.67124 3.18342C1.67124 4.41498 2.69856 5.41335 3.96581 5.41335C5.23306 5.41335 6.26037 4.41498 6.26037 3.18342C6.26037 1.95187 5.23306 0.953495 3.96581 0.953495C2.69856 0.953495 1.67124 1.95187 1.67124 3.18342ZM1.67124 14.7791C1.67124 16.0106 2.69856 17.009 3.96581 17.009C5.23306 17.009 6.26037 16.0106 6.26037 14.7791C6.26037 13.5475 5.23306 12.5491 3.96581 12.5491C2.69856 12.5491 1.67124 13.5475 1.67124 14.7791ZM14.9797 8.08927C13.7125 8.08927 12.6852 9.08764 12.6852 10.3192C12.6852 11.5508 13.7125 12.5491 14.9797 12.5491C16.247 12.5491 17.2743 11.5508 17.2743 10.3192C17.2743 9.08764 16.247 8.08927 14.9797 8.08927Z" />
            </svg>
            <p className={toggle === 1 ? 'prod-tab  active-tab' : 'prod-tab'}>BlockChain</p>
          </div>
          <div className={toggle === 2 ? ' tabs active-tab' : 'tabs'} onClick={() => toggleTab(2)}>
            <svg
              className={toggle === 2 ? 'svg  active-tab' : 'svg'}
              width="17"
              height="19"
              viewBox="0 0 17 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.6054 7.75415L8.66173 8.69859L10.6054 7.75415ZM8.66173 8.69859L6.7181 7.75415L8.66173 8.69859ZM8.66173 8.69859V11.0597V8.69859ZM16.4363 4.92083L14.4926 5.86527L16.4363 4.92083ZM16.4363 4.92083L14.4926 3.97639L16.4363 4.92083ZM16.4363 4.92083V7.28193V4.92083ZM10.6054 2.08751L8.66173 1.14307L6.7181 2.08751H10.6054ZM0.887207 4.92083L2.83084 3.97639L0.887207 4.92083ZM0.887207 4.92083L2.83084 5.86527L0.887207 4.92083ZM0.887207 4.92083V7.28193V4.92083ZM8.66173 18.143L6.7181 17.1986L8.66173 18.143ZM8.66173 18.143L10.6054 17.1986L8.66173 18.143ZM8.66173 18.143V15.7819V18.143ZM2.83084 15.3097L0.887207 14.3652V12.0041L2.83084 15.3097ZM14.4926 15.3097L16.4363 14.3652V12.0041" />
              <path
                d="M14.4926 15.3097L16.4363 14.3652V12.0041M10.6054 7.75415L8.66173 8.69859L10.6054 7.75415ZM8.66173 8.69859L6.7181 7.75415L8.66173 8.69859ZM8.66173 8.69859V11.0597V8.69859ZM16.4363 4.92083L14.4926 5.86527L16.4363 4.92083ZM16.4363 4.92083L14.4926 3.97639L16.4363 4.92083ZM16.4363 4.92083V7.28193V4.92083ZM10.6054 2.08751L8.66173 1.14307L6.7181 2.08751H10.6054ZM0.887207 4.92083L2.83084 3.97639L0.887207 4.92083ZM0.887207 4.92083L2.83084 5.86527L0.887207 4.92083ZM0.887207 4.92083V7.28193V4.92083ZM8.66173 18.143L6.7181 17.1986L8.66173 18.143ZM8.66173 18.143L10.6054 17.1986L8.66173 18.143ZM8.66173 18.143V15.7819V18.143ZM2.83084 15.3097L0.887207 14.3652V12.0041L2.83084 15.3097Z"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className={toggle === 2 ? 'prod-tab  active-tab' : 'prod-tab'}> 3swap</p>
          </div>
          <div className={toggle === 3 ? ' tabs active-tab' : 'tabs'} onClick={() => toggleTab(3)}>
            <svg
              className={toggle === 3 ? 'svg  active-tab' : 'svg'}
              width="15"
              height="18"
              viewBox="0 0 15 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.98918 8.97601C4.98918 7.36774 6.33073 6.06399 7.98561 6.06399C9.6405 6.06399 10.982 7.36774 10.982 8.97601C10.982 10.5843 9.6405 11.888 7.98561 11.888C6.33073 11.888 4.98918 10.5843 4.98918 8.97601ZM5.98799 8.97601C5.98799 10.0482 6.88236 10.9174 7.98561 10.9174C9.08887 10.9174 9.98323 10.0482 9.98323 8.97601C9.98323 7.90383 9.08887 7.03466 7.98561 7.03466C6.88236 7.03466 5.98799 7.90383 5.98799 8.97601ZM3.86128 5.90428C3.67622 6.10304 3.36041 6.11837 3.15589 5.93853C2.95137 5.75869 2.9356 5.45177 3.12065 5.25301C3.26718 5.09564 3.42169 4.94548 3.58362 4.80308C6.27047 2.44042 10.4194 2.64186 12.8506 5.25301C13.0356 5.45177 13.0198 5.75869 12.8153 5.93853C12.6108 6.11837 12.295 6.10304 12.1099 5.90428C10.0489 3.69064 6.53158 3.51987 4.25377 5.52285C4.11649 5.64357 3.9855 5.77087 3.86128 5.90428ZM14.8585 3.32313C15.0371 3.52744 15.0114 3.83372 14.8012 4.00723C14.5909 4.18074 14.2758 4.15578 14.0972 3.95147C11.2307 0.671199 6.17062 0.270352 2.79527 3.05615C2.4637 3.32981 2.15559 3.62924 1.874 3.95147C1.69546 4.15578 1.3803 4.18074 1.17007 4.00723C0.959841 3.83372 0.93415 3.52744 1.11269 3.32313C1.42936 2.96076 1.77584 2.62403 2.14872 2.31629C5.94453 -0.816535 11.6349 -0.365756 14.8585 3.32313ZM12.1087 12.0491C12.293 11.8496 12.6088 11.8332 12.814 12.0123C13.0192 12.1914 13.0361 12.4983 12.8518 12.6977C10.4379 15.3095 6.30235 15.5251 3.61483 13.1791C3.44096 13.0274 3.27559 12.8667 3.11943 12.6977C2.93512 12.4983 2.95206 12.1914 3.15725 12.0123C3.36245 11.8332 3.6782 11.8496 3.8625 12.0491C3.99482 12.1922 4.13494 12.3284 4.28226 12.457C6.55939 14.4447 10.0634 14.262 12.1087 12.0491ZM14.0974 14.0004C14.276 13.7961 14.5912 13.7713 14.8014 13.945C15.0115 14.1186 15.037 14.4249 14.8584 14.6291C11.6313 18.3179 5.93827 18.7659 2.14255 15.6298C1.77213 15.3237 1.42778 14.9891 1.11286 14.6291C0.93421 14.4249 0.959731 14.1186 1.16987 13.945C1.38 13.7713 1.69518 13.7961 1.87383 14.0004C2.15388 14.3205 2.46011 14.6181 2.78951 14.8902C6.16495 17.6791 11.2277 17.2807 14.0974 14.0004Z" />
            </svg>

            <p className={toggle === 3 ? 'prod-tab  active-tab' : 'prod-tab'}> Wallet</p>
          </div>
          <div className={toggle === 4 ? ' tabs active-tab' : 'tabs'} onClick={() => toggleTab(4)}>
            <svg
              className={toggle === 4 ? 'svg  active-tab' : 'svg'}
              width="19"
              height="18"
              viewBox="0 0 19 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.74642 0.143555V2.03244V0.143555ZM12.5773 0.143555V2.03244V0.143555ZM6.74642 15.2546V17.1435V15.2546ZM12.5773 15.2546V17.1435V15.2546ZM2.85916 5.8102H0.915527H2.85916ZM2.85916 11.4768H0.915527H2.85916ZM18.4082 5.8102H16.4646H18.4082ZM18.4082 11.4768H16.4646H18.4082ZM4.80279 15.2546H14.5209C15.0364 15.2546 15.5308 15.0556 15.8953 14.7014C16.2598 14.3471 16.4646 13.8667 16.4646 13.3657V3.92132C16.4646 3.42035 16.2598 2.93991 15.8953 2.58568C15.5308 2.23144 15.0364 2.03244 14.5209 2.03244H4.80279C4.28731 2.03244 3.79294 2.23144 3.42843 2.58568C3.06393 2.93991 2.85916 3.42035 2.85916 3.92132V13.3657C2.85916 13.8667 3.06393 14.3471 3.42843 14.7014C3.79294 15.0556 4.28731 15.2546 4.80279 15.2546ZM6.74642 5.8102H12.5773V11.4768H6.74642V5.8102Z" />
            </svg>

            <p className={toggle === 4 ? 'prod-tab  active-tab' : 'prod-tab'}> Block Explorer</p>
          </div>
        </div>
        <div className="tab-seg">
          <div className={toggle === 5 ? ' tabs active-tab' : 'tabs'} onClick={() => toggleTab(5)}>
            <svg
              className={toggle === 5 ? 'svg  active-tab' : 'svg'}
              width="19"
              height="18"
              viewBox="0 0 19 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.19962 14.2273C1.20715 14.2111 1.21571 14.195 1.22531 14.1793L9.24414 1.06449C9.43212 0.75705 9.88987 0.756363 10.0788 1.06324L18.2202 14.2854C18.2598 14.3496 18.2818 14.4193 18.2876 14.4891C18.367 14.6526 18.4082 14.8232 18.4082 15.0001C18.4082 16.7197 14.5116 17.8334 9.66187 17.8334C4.81209 17.8334 0.915527 16.7197 0.915527 15.0001C0.915527 14.7265 1.01418 14.4682 1.19962 14.2273ZM3.02156 13.0904C4.62247 12.5027 6.99842 12.1668 9.66187 12.1668C12.3613 12.1668 14.7654 12.5118 16.3667 13.1144L9.66333 2.22774L3.02156 13.0904ZM1.95435 14.7833C1.91016 14.8559 1.88734 14.9284 1.88734 15.0001C1.88734 15.8885 5.38742 16.889 9.66187 16.889C13.9363 16.889 17.4364 15.8885 17.4364 15.0001C17.4364 14.1117 13.9363 13.1112 9.66187 13.1112C5.98034 13.1112 2.87325 13.8534 2.0821 14.6269L2.06077 14.6618C2.03178 14.7092 1.99559 14.7499 1.95435 14.7833Z" />
            </svg>

            <p className={toggle === 5 ? 'prod-tab  active-tab' : 'prod-tab'}>Exchange</p>
          </div>
          <div className={toggle === 6 ? ' tabs active-tab' : 'tabs'} onClick={() => toggleTab(6)}>
            <svg
              className={toggle === 6 ? 'svg  active-tab' : 'svg'}
              width="20"
              height="18"
              viewBox="0 0 20 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.5927 6.38011C14.8248 5.64816 12.4496 5.17594 9.9115 5.04608C9.50658 5.02247 9.11218 5.0146 8.73722 5.0146C10.6144 2.7873 12.6261 1.29193 13.9502 1.24471C14.211 1.23448 14.4321 1.288 14.6086 1.39897C15.1804 1.75943 15.3415 2.79045 15.05 4.22442C15.0176 4.42118 15.1472 4.61243 15.3415 4.64942C15.544 4.68877 15.7383 4.56285 15.7788 4.36609C16.1433 2.57165 15.876 1.33916 15.0176 0.794528C14.7098 0.599343 14.3373 0.50726 13.9243 0.522214C12.2641 0.582816 9.92365 2.33239 7.77756 5.02405C6.84299 5.05159 5.9635 5.12636 5.16013 5.24993C4.63697 2.96989 4.84429 1.33286 5.64118 0.939342C5.75294 0.881889 5.87199 0.852768 6.01128 0.84175C6.57574 0.79925 7.35563 1.15263 8.20596 1.84128C8.36307 1.96721 8.59955 1.95147 8.72913 1.79406C8.76024 1.75763 8.78366 1.7156 8.79806 1.67037C8.81245 1.62514 8.81754 1.5776 8.81303 1.53046C8.80852 1.48332 8.79449 1.43751 8.77176 1.39563C8.74903 1.35376 8.71803 1.31665 8.68053 1.28642C7.66013 0.465548 6.71909 0.0641604 5.94973 0.119253C5.72375 0.13704 5.50318 0.195766 5.29943 0.2924C4.33571 0.77013 3.94698 2.12383 4.18994 4.10007C4.24663 4.50933 4.31951 4.9359 4.42479 5.37506C1.76769 5.89136 0.0751082 6.92552 0.00222206 8.22727C-0.0463687 9.1481 0.702739 10.0249 2.17261 10.7631C2.21631 10.7889 2.265 10.8056 2.31565 10.8123C2.36631 10.819 2.41783 10.8155 2.46703 10.802C2.51622 10.7885 2.56204 10.7653 2.60161 10.7339C2.64119 10.7025 2.67369 10.6634 2.69708 10.6193C2.72048 10.5751 2.73427 10.5267 2.73759 10.4771C2.74092 10.4276 2.73371 10.3779 2.71642 10.3311C2.69913 10.2844 2.67213 10.2416 2.63709 10.2054C2.60205 10.1692 2.55972 10.1405 2.51275 10.1209C1.33847 9.53296 0.706788 8.87107 0.744851 8.26505C0.785343 7.41506 2.1799 6.54145 4.59972 6.0771C4.81838 6.85941 5.10182 7.67635 5.45006 8.50903C4.62563 9.99495 4.02797 11.458 3.71942 12.759C3.2659 14.6991 3.50886 16.0803 4.41588 16.6533C4.70743 16.8374 5.04756 16.9287 5.42576 16.9287C6.18297 16.9287 7.09971 16.5667 8.13632 15.8489C8.17839 15.8225 8.21453 15.7881 8.24254 15.7477C8.27056 15.7074 8.28987 15.6619 8.29932 15.6141C8.30877 15.5663 8.30816 15.5171 8.29753 15.4696C8.28689 15.422 8.26645 15.377 8.23744 15.3373C8.20843 15.2977 8.17145 15.2641 8.12873 15.2387C8.08601 15.2133 8.03844 15.1965 7.98888 15.1895C7.93932 15.1824 7.8888 15.1852 7.84037 15.1976C7.79195 15.21 7.74661 15.2319 7.7071 15.2618C6.4567 16.1299 5.4039 16.4203 4.82243 16.0512C4.20694 15.6616 4.07251 14.522 4.4499 12.9219C4.70905 11.8311 5.18443 10.6159 5.83312 9.36454C5.99508 9.70926 6.16515 10.054 6.34332 10.3979C7.49735 12.5985 8.91053 14.5117 10.3197 15.7852C11.4421 16.8004 12.4852 17.3301 13.3444 17.3301C13.6279 17.3301 13.8951 17.2711 14.1348 17.1546C15.0621 16.6942 15.463 15.4153 15.267 13.5539C15.0856 11.8122 14.4086 9.68958 13.3606 7.57246C13.3164 7.4886 13.2403 7.4248 13.1484 7.39462C13.0566 7.36444 12.9562 7.37025 12.8687 7.41083C12.7812 7.45141 12.7134 7.52355 12.6797 7.61193C12.6461 7.70031 12.6492 7.79796 12.6885 7.88413C14.8669 12.2931 15.0208 15.904 13.798 16.51C12.5103 17.1499 9.40535 14.6566 7.00334 10.0721C6.72799 9.55657 6.48747 9.04894 6.27448 8.55311C6.54983 8.07459 6.84137 7.59293 7.16126 7.11283C7.48115 6.63747 7.814 6.17784 8.15251 5.73946H8.47159C8.90891 5.73946 9.38348 5.74733 9.87587 5.77724C15.1642 6.04719 18.7639 7.79205 18.6902 9.18824C18.6578 9.79032 17.9419 10.3987 16.7264 10.8568C16.635 10.8925 16.5618 10.9617 16.5224 11.0495C16.483 11.1372 16.4806 11.2364 16.5158 11.3258C16.5331 11.3702 16.5593 11.4109 16.5929 11.4453C16.6265 11.4798 16.6668 11.5074 16.7115 11.5266C16.7562 11.5458 16.8044 11.5562 16.8532 11.5571C16.9021 11.558 16.9506 11.5495 16.996 11.532C18.5388 10.9496 19.3851 10.15 19.4337 9.22602C19.4904 8.17927 18.4862 7.17186 16.5992 6.3927V6.38483L16.5927 6.38011ZM6.53768 6.7146C6.31902 7.04121 6.11656 7.36547 5.91896 7.69367C5.69444 7.12227 5.49903 6.54047 5.33344 5.95039C5.91086 5.86381 6.53606 5.80085 7.20418 5.7615C6.97743 6.06844 6.75553 6.3864 6.54011 6.71381V6.70594L6.53768 6.7146ZM9.71633 7.63936C9.421 7.63936 9.13777 7.75337 8.92894 7.95632C8.72011 8.15927 8.60279 8.43452 8.60279 8.72153C8.60279 9.00854 8.72011 9.2838 8.92894 9.48674C9.13777 9.68969 9.421 9.8037 9.71633 9.8037C10.0117 9.8037 10.2949 9.68969 10.5037 9.48674C10.7125 9.2838 10.8299 9.00854 10.8299 8.72153C10.8299 8.43452 10.7125 8.15927 10.5037 7.95632C10.2949 7.75337 10.0117 7.63936 9.71633 7.63936Z" />
            </svg>
            <p className={toggle === 6 ? 'prod-tab  active-tab' : 'prod-tab'}>CTV</p>
          </div>
          <div className={toggle === 7 ? ' tabs active-tab' : 'tabs'} onClick={() => toggleTab(7)}>
            <svg
              className={toggle === 7 ? 'svg  active-tab' : 'svg'}
              width="21"
              height="19"
              viewBox="0 0 21 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.5134 0.327165C10.3477 0.330113 10.1898 0.396155 10.0737 0.511081C9.95763 0.626008 9.8926 0.780631 9.89262 0.94168V12.6225C9.89262 12.7855 9.95925 12.9418 10.0778 13.057C10.1964 13.1723 10.3572 13.237 10.525 13.237C10.6926 13.237 10.8534 13.1722 10.972 13.057C11.0905 12.9417 11.1571 12.7855 11.1571 12.6225V0.941764C11.1571 0.860124 11.1404 0.779299 11.1079 0.704011C11.0754 0.628723 11.0278 0.560481 10.9679 0.503271C10.908 0.44606 10.8369 0.401029 10.7589 0.370806C10.6808 0.340584 10.5974 0.325776 10.5134 0.327248V0.327165ZM20.0796 3.82663C19.9972 3.82901 19.9161 3.84698 19.8408 3.87952L14.4139 6.23315C14.3029 6.28185 14.2086 6.36068 14.1425 6.46016C14.0764 6.55964 14.0412 6.67555 14.0412 6.79398C14.0412 6.91241 14.0764 7.02832 14.1425 7.1278C14.2086 7.22728 14.3029 7.3061 14.4139 7.35481L19.8408 9.71667C19.9221 9.75217 20.0102 9.77071 20.0994 9.77107C20.2443 9.77111 20.3849 9.72275 20.4975 9.63411C20.6101 9.54546 20.688 9.4219 20.7181 9.28411C20.7482 9.14632 20.7287 9.00267 20.6628 8.87721C20.5969 8.75175 20.4887 8.65209 20.3562 8.59492L16.2219 6.79478L20.3562 5.00109C20.5089 4.93429 20.6282 4.81147 20.6881 4.65947C20.7479 4.50746 20.7434 4.33861 20.6756 4.1898C20.6243 4.07882 20.5403 3.98509 20.4342 3.92045C20.3281 3.8558 20.2047 3.82313 20.0796 3.82655V3.82663ZM0.644137 8.05101C0.546636 8.04919 0.450024 8.06932 0.361863 8.10982C0.273701 8.15033 0.19638 8.21011 0.135953 8.2845C0.0755259 8.35888 0.0336311 8.44585 0.0135476 8.53859C-0.00653593 8.63133 -0.00426328 8.72732 0.0201877 8.81907C1.51981 14.4244 6.73634 18.3399 12.7032 18.3399C12.8709 18.3399 13.0317 18.2751 13.1503 18.1599C13.2689 18.0446 13.3355 17.8883 13.3355 17.7254C13.3355 17.5624 13.2689 17.4061 13.1503 17.2908C13.0317 17.1756 12.8709 17.1108 12.7032 17.1108C10.083 17.1117 7.53659 16.2678 5.46282 14.7114C3.38906 13.155 1.90514 10.9741 1.24355 8.51022C1.20881 8.38063 1.13144 8.26564 1.02323 8.18274C0.915023 8.09984 0.7819 8.05358 0.644137 8.05101Z" />
            </svg>

            <p className={toggle === 7 ? 'prod-tab  active-tab' : 'prod-tab'}>NFT MARKETPLACE</p>
          </div>
          <div className={toggle === 8 ? ' tabs active-tab' : 'tabs'} onClick={() => toggleTab(8)}>
            <svg
              className={toggle === 8 ? 'svg  active-tab' : 'svg'}
              width="17"
              height="18"
              viewBox="0 0 17 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.4365 4.20159L8.66197 0.423828L0.887451 4.20159H16.4365ZM16.4365 4.20159L8.66197 7.97935L16.4365 4.20159ZM16.4365 4.20159V13.646L8.66197 17.4238L16.4365 4.20159ZM8.66197 7.97935L0.887451 4.20159L8.66197 7.97935ZM8.66197 7.97935V17.4238V7.97935ZM0.887451 4.20159V13.646L8.66197 17.4238" />
            </svg>

            <p className={toggle === 8 ? 'prod-tab  active-tab' : 'prod-tab'}>ALTERVERSE</p>
          </div>
        </div>
      </div>
      <div className="tab-content">
        <div className={toggle === 1 ? ' content active-content' : 'content'}>
          <div className="content-img"></div>
          <div className="content-text">
            <div className="product-con">
              <div className="prod-log-con">
                <div className="prod-log">
                  <svg
                    className="svg-active"
                    width="46"
                    height="47"
                    viewBox="0 0 46 47"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.6658 9.75016C16.1451 13.2629 13.2655 16.0415 9.625 16.5439V30.4564C13.6534 31.0124 16.75 34.3553 16.75 38.396C16.75 42.8258 13.0284 46.4168 8.4375 46.4168C3.84663 46.4168 0.125 42.8258 0.125 38.396C0.125 34.3553 3.22165 31.0124 7.25 30.4564V16.5439C3.22165 15.9879 0.125 12.6451 0.125 8.60433C0.125 4.17455 3.84663 0.583496 8.4375 0.583496C12.6252 0.583496 16.0896 3.57149 16.6658 7.4585H27.4375C33.34 7.4585 38.125 12.0756 38.125 17.771V18.9981C42.1534 19.5541 45.25 22.8969 45.25 26.9377C45.25 31.3675 41.5284 34.9585 36.9375 34.9585C32.3466 34.9585 28.625 31.3675 28.625 26.9377C28.625 22.8969 31.7217 19.5541 35.75 18.9981V17.771C35.75 13.3412 32.0284 9.75016 27.4375 9.75016H16.6658ZM2.5 8.60433C2.5 11.7685 5.15831 14.3335 8.4375 14.3335C11.7167 14.3335 14.375 11.7685 14.375 8.60433C14.375 5.4402 11.7167 2.87516 8.4375 2.87516C5.15831 2.87516 2.5 5.4402 2.5 8.60433ZM2.5 38.396C2.5 41.5601 5.15831 44.1252 8.4375 44.1252C11.7167 44.1252 14.375 41.5601 14.375 38.396C14.375 35.2319 11.7167 32.6668 8.4375 32.6668C5.15831 32.6668 2.5 35.2319 2.5 38.396ZM36.9375 21.2085C33.6583 21.2085 31 23.7735 31 26.9377C31 30.1018 33.6583 32.6668 36.9375 32.6668C40.2167 32.6668 42.875 30.1018 42.875 26.9377C42.875 23.7735 40.2167 21.2085 36.9375 21.2085Z" />
                  </svg>
                </div>
                <div className="prod-title">BlockChain</div>
              </div>
              <div className="prod-desc">
                3 Swap is a newly designed Decentralized exchange that makes decentralized trading fast with low
                transaction fees and traffic...
              </div>
              <div className="prod-btn">
                <button>
                  More details <HiOutlineArrowNarrowRight className="icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={toggle === 2 ? ' content active-content' : 'content'}>
          <div className="content-img"></div>
          <div className="content-text">
            <div className="product-con">
              <div className="prod-log-con">
                <div className="prod-log">
                  <svg
                    className="svg-active"
                    width="40"
                    height="44"
                    viewBox="0 0 40 44"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="path-1-outside-1_48_257"
                      maskUnits="userSpaceOnUse"
                      x="-1"
                      y="0"
                      width="42"
                      height="44"
                      fill="black"
                    >
                      <rect fill="white" x="-1" width="42" height="44" />
                      <path d="M24.75 17.0417L20 19.3333L24.75 17.0417ZM20 19.3333L15.25 17.0417L20 19.3333ZM20 19.3333V25.0625V19.3333ZM39 10.1667L34.25 12.4583L39 10.1667ZM39 10.1667L34.25 7.875L39 10.1667ZM39 10.1667V15.8958V10.1667ZM24.75 3.29167L20 1L15.25 3.29167H24.75ZM1 10.1667L5.75 7.875L1 10.1667ZM1 10.1667L5.75 12.4583L1 10.1667ZM1 10.1667V15.8958V10.1667ZM20 42.25L15.25 39.9583L20 42.25ZM20 42.25L24.75 39.9583L20 42.25ZM20 42.25V36.5208V42.25ZM5.75 35.375L1 33.0833V27.3542L5.75 35.375ZM34.25 35.375L39 33.0833V27.3542" />
                    </mask>
                    <path d="M24.75 17.0417L20 19.3333L24.75 17.0417ZM20 19.3333L15.25 17.0417L20 19.3333ZM20 19.3333V25.0625V19.3333ZM39 10.1667L34.25 12.4583L39 10.1667ZM39 10.1667L34.25 7.875L39 10.1667ZM39 10.1667V15.8958V10.1667ZM24.75 3.29167L20 1L15.25 3.29167H24.75ZM1 10.1667L5.75 7.875L1 10.1667ZM1 10.1667L5.75 12.4583L1 10.1667ZM1 10.1667V15.8958V10.1667ZM20 42.25L15.25 39.9583L20 42.25ZM20 42.25L24.75 39.9583L20 42.25ZM20 42.25V36.5208V42.25ZM5.75 35.375L1 33.0833V27.3542L5.75 35.375ZM34.25 35.375L39 33.0833V27.3542" />
                    <path
                      d="M25.1845 17.9423C25.6819 17.7023 25.8906 17.1046 25.6507 16.6071C25.4107 16.1097 24.8129 15.901 24.3155 16.141L25.1845 17.9423ZM19.5655 18.4327C19.0681 18.6727 18.8594 19.2704 19.0993 19.7679C19.3393 20.2653 19.9371 20.474 20.4345 20.234L19.5655 18.4327ZM19.5655 20.234C20.0629 20.474 20.6607 20.2653 20.9007 19.7679C21.1406 19.2704 20.9319 18.6727 20.4345 18.4327L19.5655 20.234ZM15.6845 16.141C15.1871 15.901 14.5893 16.1097 14.3493 16.6071C14.1094 17.1046 14.3181 17.7023 14.8155 17.9423L15.6845 16.141ZM21 19.3333C21 18.781 20.5523 18.3333 20 18.3333C19.4477 18.3333 19 18.781 19 19.3333H21ZM19 25.0625C19 25.6148 19.4477 26.0625 20 26.0625C20.5523 26.0625 21 25.6148 21 25.0625H19ZM39.4345 11.0673C39.9319 10.8273 40.1406 10.2296 39.9007 9.73214C39.6607 9.23472 39.0629 9.02603 38.5655 9.26601L39.4345 11.0673ZM33.8155 11.5577C33.3181 11.7977 33.1094 12.3954 33.3493 12.8929C33.5893 13.3903 34.1871 13.599 34.6845 13.359L33.8155 11.5577ZM38.5655 11.0673C39.0629 11.3073 39.6607 11.0986 39.9007 10.6012C40.1406 10.1038 39.9319 9.50599 39.4345 9.26601L38.5655 11.0673ZM34.6845 6.97434C34.1871 6.73436 33.5893 6.94305 33.3493 7.44047C33.1094 7.93789 33.3181 8.53568 33.8155 8.77566L34.6845 6.97434ZM40 10.1667C40 9.61438 39.5523 9.16667 39 9.16667C38.4477 9.16667 38 9.61438 38 10.1667H40ZM38 15.8958C38 16.4481 38.4477 16.8958 39 16.8958C39.5523 16.8958 40 16.4481 40 15.8958H38ZM24.75 3.29167V4.29167C25.2164 4.29167 25.6209 3.96922 25.7248 3.51454C25.8288 3.05985 25.6046 2.59368 25.1845 2.39101L24.75 3.29167ZM20 1L20.4345 0.0993418C20.16 -0.033114 19.84 -0.033114 19.5655 0.0993418L20 1ZM15.25 3.29167L14.8155 2.39101C14.3954 2.59368 14.1712 3.05985 14.2752 3.51454C14.3791 3.96922 14.7836 4.29167 15.25 4.29167V3.29167ZM0.565472 9.26601C0.0680521 9.50599 -0.140642 10.1038 0.0993418 10.6012C0.339325 11.0986 0.937108 11.3073 1.43453 11.0673L0.565472 9.26601ZM6.18453 8.77566C6.68195 8.53568 6.89064 7.93789 6.65066 7.44047C6.41067 6.94305 5.81289 6.73436 5.31547 6.97434L6.18453 8.77566ZM1.43453 9.26601C0.937108 9.02603 0.339325 9.23472 0.0993418 9.73214C-0.140642 10.2296 0.0680521 10.8273 0.565472 11.0673L1.43453 9.26601ZM5.31547 13.359C5.81289 13.599 6.41067 13.3903 6.65066 12.8929C6.89064 12.3954 6.68195 11.7977 6.18453 11.5577L5.31547 13.359ZM2 10.1667C2 9.61438 1.55228 9.16667 1 9.16667C0.447715 9.16667 0 9.61438 0 10.1667H2ZM0 15.8958C0 16.4481 0.447715 16.8958 1 16.8958C1.55228 16.8958 2 16.4481 2 15.8958H0ZM19.5655 43.1507C20.0629 43.3906 20.6607 43.1819 20.9007 42.6845C21.1406 42.1871 20.9319 41.5893 20.4345 41.3493L19.5655 43.1507ZM15.6845 39.0577C15.1871 38.8177 14.5893 39.0264 14.3493 39.5238C14.1094 40.0212 14.3181 40.619 14.8155 40.859L15.6845 39.0577ZM19.5655 41.3493C19.0681 41.5893 18.8594 42.1871 19.0993 42.6845C19.3393 43.1819 19.9371 43.3906 20.4345 43.1507L19.5655 41.3493ZM25.1845 40.859C25.6819 40.619 25.8906 40.0212 25.6507 39.5238C25.4107 39.0264 24.8129 38.8177 24.3155 39.0577L25.1845 40.859ZM19 42.25C19 42.8023 19.4477 43.25 20 43.25C20.5523 43.25 21 42.8023 21 42.25H19ZM21 36.5208C21 35.9686 20.5523 35.5208 20 35.5208C19.4477 35.5208 19 35.9686 19 36.5208H21ZM5.75 35.375L5.31547 36.2757C5.71259 36.4673 6.18834 36.3761 6.48656 36.0514C6.78479 35.7266 6.83511 35.2448 6.61044 34.8654L5.75 35.375ZM1 33.0833H0C0 33.4672 0.219738 33.8172 0.565472 33.984L1 33.0833ZM1 27.3542L1.86044 26.8446C1.63086 26.4569 1.17038 26.2707 0.735838 26.3897C0.301293 26.5087 0 26.9036 0 27.3542H1ZM33.8155 34.4743C33.3181 34.7143 33.1094 35.3121 33.3493 35.8095C33.5893 36.3069 34.1871 36.5156 34.6845 36.2757L33.8155 34.4743ZM39 33.0833L39.4345 33.984C39.7803 33.8172 40 33.4672 40 33.0833H39ZM40 27.3542C40 26.8019 39.5523 26.3542 39 26.3542C38.4477 26.3542 38 26.8019 38 27.3542H40ZM24.3155 16.141L19.5655 18.4327L20.4345 20.234L25.1845 17.9423L24.3155 16.141ZM20.4345 20.234L25.1845 17.9423L24.3155 16.141L19.5655 18.4327L20.4345 20.234ZM20.4345 18.4327L15.6845 16.141L14.8155 17.9423L19.5655 20.234L20.4345 18.4327ZM14.8155 17.9423L19.5655 20.234L20.4345 18.4327L15.6845 16.141L14.8155 17.9423ZM19 19.3333V25.0625H21V19.3333H19ZM21 25.0625V19.3333H19V25.0625H21ZM38.5655 9.26601L33.8155 11.5577L34.6845 13.359L39.4345 11.0673L38.5655 9.26601ZM34.6845 13.359L39.4345 11.0673L38.5655 9.26601L33.8155 11.5577L34.6845 13.359ZM39.4345 9.26601L34.6845 6.97434L33.8155 8.77566L38.5655 11.0673L39.4345 9.26601ZM33.8155 8.77566L38.5655 11.0673L39.4345 9.26601L34.6845 6.97434L33.8155 8.77566ZM38 10.1667V15.8958H40V10.1667H38ZM40 15.8958V10.1667H38V15.8958H40ZM25.1845 2.39101L20.4345 0.0993418L19.5655 1.90066L24.3155 4.19232L25.1845 2.39101ZM19.5655 0.0993418L14.8155 2.39101L15.6845 4.19232L20.4345 1.90066L19.5655 0.0993418ZM15.25 4.29167H24.75V2.29167H15.25V4.29167ZM1.43453 11.0673L6.18453 8.77566L5.31547 6.97434L0.565472 9.26601L1.43453 11.0673ZM5.31547 6.97434L0.565472 9.26601L1.43453 11.0673L6.18453 8.77566L5.31547 6.97434ZM0.565472 11.0673L5.31547 13.359L6.18453 11.5577L1.43453 9.26601L0.565472 11.0673ZM6.18453 11.5577L1.43453 9.26601L0.565472 11.0673L5.31547 13.359L6.18453 11.5577ZM0 10.1667V15.8958H2V10.1667H0ZM2 15.8958V10.1667H0V15.8958H2ZM20.4345 41.3493L15.6845 39.0577L14.8155 40.859L19.5655 43.1507L20.4345 41.3493ZM14.8155 40.859L19.5655 43.1507L20.4345 41.3493L15.6845 39.0577L14.8155 40.859ZM20.4345 43.1507L25.1845 40.859L24.3155 39.0577L19.5655 41.3493L20.4345 43.1507ZM24.3155 39.0577L19.5655 41.3493L20.4345 43.1507L25.1845 40.859L24.3155 39.0577ZM21 42.25V36.5208H19V42.25H21ZM19 36.5208V42.25H21V36.5208H19ZM6.18453 34.4743L1.43453 32.1827L0.565472 33.984L5.31547 36.2757L6.18453 34.4743ZM2 33.0833V27.3542H0V33.0833H2ZM0.139563 27.8637L4.88956 35.8846L6.61044 34.8654L1.86044 26.8446L0.139563 27.8637ZM34.6845 36.2757L39.4345 33.984L38.5655 32.1827L33.8155 34.4743L34.6845 36.2757ZM40 33.0833V27.3542H38V33.0833H40Z"
                      mask="url(#path-1-outside-1_48_257)"
                    />
                  </svg>
                </div>
                <div className="prod-title">3swap</div>
              </div>
              <div className="prod-desc">
                3 Swap is a newly designed Decentralized exchange that makes decentralized trading fast with low
                transaction fees and traffic...
              </div>
              <div className="prod-btn">
                <button>
                  More details <HiOutlineArrowNarrowRight className="icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={toggle === 3 ? ' content active-content' : 'content'}>
          <Text>Wallet Coming Soon</Text>
        </div>
        <div className={toggle === 4 ? ' content active-content' : 'content'}>
          <Text>Coming Soon</Text>
        </div>
        <div className={toggle === 5 ? ' content active-content' : 'content'}>
          <Text>Coming Soon</Text>
        </div>
        <div className={toggle === 6 ? ' content active-content' : 'content'}>
          <Text>Coming Soon</Text>
        </div>
        <div className={toggle === 7 ? ' content active-content' : 'content'}>
          <Text>Coming Soon</Text>
        </div>
        <div className={toggle === 8 ? ' content active-content' : 'content'}>
          <Text>Coming Soon</Text>
        </div>
      </div>
      <div className="border"></div>
    </Container>
  );
}

export default Tabs;
