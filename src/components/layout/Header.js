import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center">
        <div className="w-64 mr-3">
          <LogoIcon />
        </div>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#features">
          Soluções
        </AnchorLink>
        <AnchorLink className="px-4" href="#services">
          Serviços
        </AnchorLink>
        <AnchorLink className="px-4" href="#stats">
          Sobre nós
        </AnchorLink>
        <AnchorLink className="px-4" href="#testimonials">
          Depoimentos
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <Button className="text-sm">Diagnóstico Gratuito</Button>
      </div>
    </div>
  </header>
);

export default Header;
