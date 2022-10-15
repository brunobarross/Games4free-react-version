import React from 'react';
import Logo from './Logo';
import LinkSidebar from './LinkSidebar';
import { X } from 'phosphor-react';
import { GlobalContext } from '../context/Global';

const Sidebar = () => {
  const { objLinks, sidebarOpen, handleClickLink, setSideBarOpen } =
    React.useContext(GlobalContext);
  return (
    <div
      className={`sidebar ${
        sidebarOpen
          ? 'translate-x-0 md:translate-x-0'
          : '-translate-x-full md:translate-x-0'
      }`}
    >
      <div className="flex md:hidden justify-end px-8 pt-4">
        <button className="w-8 h-8 bg-white rounded-full grid place-items-center">
          <X size={24} onClick={() => setSideBarOpen(!sidebarOpen)} />
        </button>
      </div>

      <div className="logo">
        <Logo />
      </div>
      <ul className="sidebar-lista overflow-y-auto overflow-x-hidden">
        {objLinks &&
          objLinks.map(({ nome, loja }) => {
            return (
              <LinkSidebar
                key={nome}
                handleClickLink={handleClickLink}
                nome={nome}
                loja={loja}
              />
            );
          })}
      </ul>
      <div className="sidebar-footer">
        <span>Orgulhosamente desenvolvido por Altamiro Bruno.</span>
        <div className="social">
          <a href="https://github.com/brunobarross" target="_blank">
            <svg
              width="512"
              height="512"
              viewBox="0 0 512 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 32C132.3 32 32 134.9 32 261.7C32 363.2 96.2 449.2 185.2 479.6C186.448 479.871 187.723 480.005 189 480C197.3 480 200.5 473.9 200.5 468.6C200.5 463.1 200.3 448.7 200.2 429.5C192.79 431.237 185.21 432.143 177.6 432.2C134.5 432.2 124.7 398.7 124.7 398.7C114.5 372.2 99.8 365.1 99.8 365.1C80.3 351.4 99.7 351 101.2 351H101.3C123.8 353 135.6 374.8 135.6 374.8C146.8 394.4 161.8 399.9 175.2 399.9C184.06 399.723 192.784 397.678 200.8 393.9C202.8 379.1 208.6 369 215 363.2C165.3 357.4 113 337.7 113 249.7C113 224.6 121.7 204.1 136 188.1C133.7 182.3 126 158.9 138.2 127.3C139.836 126.908 141.518 126.74 143.2 126.8C151.3 126.8 169.6 129.9 199.8 150.9C236.495 140.633 275.305 140.633 312 150.9C342.2 129.9 360.5 126.8 368.6 126.8C370.282 126.74 371.964 126.908 373.6 127.3C385.8 158.9 378.1 182.3 375.8 188.1C390.1 204.2 398.8 224.7 398.8 249.7C398.8 337.9 346.4 357.3 296.5 363C304.5 370.1 311.7 384.1 311.7 405.5C311.7 436.2 311.4 461 311.4 468.5C311.4 473.9 314.5 480 322.8 480C324.144 480.006 325.484 479.872 326.8 479.6C415.9 449.2 480 363.1 480 261.7C480 134.9 379.7 32 256 32Z"
                fill="white"
              />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/altamirobruno/" target="_blank">
            <svg
              width="512"
              height="512"
              viewBox="0 0 512 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89V441.61C32 461.91 49.85 480 70.28 480H444.06C464.6 480 480 461.79 480 441.61V66.89C480.12 46.7 464.6 32 444.17 32ZM170.87 405.43H106.69V205.88H170.87V405.43ZM141 175.54H140.54C120 175.54 106.7 160.25 106.7 141.11C106.7 121.62 120.35 106.69 141.35 106.69C162.35 106.69 175.2 121.51 175.66 141.11C175.65 160.25 162.35 175.54 141 175.54ZM405.43 405.43H341.25V296.32C341.25 270.18 331.91 252.32 308.69 252.32C290.95 252.32 280.45 264.32 275.78 276.01C274.03 280.21 273.56 285.93 273.56 291.77V405.43H209.38V205.88H273.56V233.65C282.9 220.35 297.49 201.21 331.44 201.21C373.57 201.21 405.44 228.98 405.44 288.85L405.43 405.43Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
        <div className="copy">
          <p>
            Os dados aqui presentes são fornecidos pela API{' '}
            <a href="https://www.gamerpower.com/api-read" target="_blank">
              {' '}
              Gamer Power
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
