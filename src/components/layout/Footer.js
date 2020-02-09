import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Sobre nós</h2>
        <p className="mt-5">
          Somos uma empresa de contabilidade e assessoria corporativa com mais de 15 anos de
          experiência de mercado.
        </p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Links</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://codebushi.com">Termos e Condições</a>
          </li>
          <li>
            <a href="https://codebushi.com">Política de Privacidade</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Acompanhe nossas redes sociais</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://instagram.com/assessoriainside">Instagram</a>
          </li>
          <li>
            <a href="https://facebook.com/assessoriainside">Facebook</a>
          </li>
          <li>
            <a href="https://linkedin.com/">LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
